import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@nitminer.com' });

    if (existingAdmin) {
      return NextResponse.json(
        {
          message: 'Admin user already exists',
          credentials: {
            email: 'admin@nitminer.com',
            password: '12345678',
          },
        },
        { status: 400 }
      );
    }

    // Create new admin user
    const hashedPassword = await bcrypt.hash('12345678', 10);

    const adminUser = new User({
      name: 'Administrator',
      email: 'admin@nitminer.com',
      password: hashedPassword,
      role: 'admin',
      isPremium: true,
      trialCount: 100,
    });

    await adminUser.save();

    return NextResponse.json(
      {
        message: 'Admin user created successfully',
        credentials: {
          email: 'admin@nitminer.com',
          password: '12345678',
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Admin seed error:', error);
    return NextResponse.json(
      { error: 'Failed to create admin user', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
