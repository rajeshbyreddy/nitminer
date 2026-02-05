import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { SessionManagement } from '@/models/SessionManagement';
import { User } from '@/models/User';
import crypto from 'crypto';

/**
 * POST /api/auth/session/create
 * Create a new session for the user
 */
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    let {
      userId,
      email,
      deviceId,
      deviceFingerprint,
      deviceName,
      browser,
      os,
    } = body;

    if (!email || !deviceId || !deviceFingerprint) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If userId is email (fallback), try to find the actual user ID
    if (!userId || userId === email) {
      try {
        const user = await User.findOne({ email: email.toLowerCase() });
        if (user) {
          userId = user._id.toString();
        } else {
          userId = `user_${Date.now()}`; // Fallback ID
        }
      } catch (err) {
        console.log('Could not find user by email, using fallback');
        userId = `user_${Date.now()}`;
      }
    }

    // Get client IP
    const ipAddress =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Generate unique session token
    const sessionToken = crypto.randomBytes(32).toString('hex');

    // Check if user has other active sessions
    const existingSessions = await SessionManagement.find({
      email: email.toLowerCase(),
      isActive: true,
    });

    console.log(`Creating session for ${email}, found ${existingSessions.length} existing sessions`);

    // Invalidate all previous sessions for this email
    if (existingSessions.length > 0) {
      await SessionManagement.updateMany(
        { email: email.toLowerCase(), isActive: true },
        { isActive: false }
      );
      console.log(`Invalidated ${existingSessions.length} previous sessions`);
    }

    // Create new session
    const newSession = new SessionManagement({
      userId,
      email: email.toLowerCase(),
      deviceId,
      deviceFingerprint,
      deviceName: deviceName || 'Unknown Device',
      browser: browser || 'Unknown',
      os: os || 'Unknown',
      ipAddress,
      sessionToken,
      isActive: true,
      loginTime: new Date(),
      lastActivity: new Date(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    });

    await newSession.save();
    console.log(`New session created: ${newSession._id}`);

    return NextResponse.json(
      {
        success: true,
        sessionToken,
        sessionId: newSession._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Session creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    );
  }
}
export async function GET(request: NextRequest) {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405 }
  );
}