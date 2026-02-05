(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return l}});let l=e=>{}},7670,e=>{"use strict";function a(){for(var e,a,t=0,l="",s=arguments.length;t<s;t++)(e=arguments[t])&&(a=function e(a){var t,l,s="";if("string"==typeof a||"number"==typeof a)s+=a;else if("object"==typeof a)if(Array.isArray(a)){var n=a.length;for(t=0;t<n;t++)a[t]&&(l=e(a[t]))&&(s&&(s+=" "),s+=l)}else for(l in a)a[l]&&(s&&(s+=" "),s+=l);return s}(e))&&(l&&(l+=" "),l+=a);return l}e.s(["clsx",()=>a])},18566,(e,a,t)=>{a.exports=e.r(76562)},75254,e=>{"use strict";var a=e.i(71645);let t=(...e)=>e.filter((e,a,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===a).join(" ").trim(),l=e=>{let a=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,t)=>t?t.toUpperCase():a.toLowerCase());return a.charAt(0).toUpperCase()+a.slice(1)};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,a.forwardRef)(({color:e="currentColor",size:l=24,strokeWidth:n=2,absoluteStrokeWidth:d,className:i="",children:r,iconNode:o,...c},u)=>(0,a.createElement)("svg",{ref:u,...s,width:l,height:l,stroke:e,strokeWidth:d?24*Number(n)/Number(l):n,className:t("lucide",i),...!r&&!(e=>{for(let a in e)if(a.startsWith("aria-")||"role"===a||"title"===a)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...o.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(r)?r:[r]])),d=(e,s)=>{let d=(0,a.forwardRef)(({className:d,...i},r)=>(0,a.createElement)(n,{ref:r,iconNode:s,className:t(`lucide-${l(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,d),...i}));return d.displayName=l(e),d};e.s(["default",()=>d],75254)},43531,e=>{"use strict";let a=(0,e.i(75254).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",()=>a],43531)},37727,e=>{"use strict";let a=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>a],37727)},40160,e=>{"use strict";let a=(0,e.i(75254).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",()=>a],40160)},2493,e=>{"use strict";var a=e.i(43476),t=e.i(37902),l=e.i(932),s=e.i(71645),n=e.i(18566),d=e.i(78933),i=e.i(63178),r=e.i(86817),o=e.i(13903),c=e.i(50030),u=e.i(44003);function f(){let[e,l]=(0,s.useState)(""),[f,m]=(0,s.useState)(""),[b,x]=(0,s.useState)("c"),[h,p]=(0,s.useState)(null),[g,j]=(0,s.useState)(5),[v,y]=(0,s.useState)(!1),{theme:w}=(0,i.useTheme)(),[k,S]=(0,s.useState)(!1),[N,C]=(0,s.useState)({c:"",java:"",python:"",solidity:""}),[E,P]=(0,s.useState)({c:[],java:[],python:[],solidity:[]}),[$,M]=(0,s.useState)(""),[T,A]=(0,s.useState)(""),[B,I]=(0,s.useState)("Condition Coverage Fuzzing"),[_,D]=(0,s.useState)("VeriSol"),[R,z]=(0,s.useState)("bmc"),[F,L]=(0,s.useState)("10"),[O,U]=(0,s.useState)("1"),[V,W]=(0,s.useState)("4"),[q,K]=(0,s.useState)("3600"),[J,X]=(0,s.useState)("4"),[H,Y]=(0,s.useState)("3600"),[G,Z]=(0,s.useState)(!1),[Q,ee]=(0,s.useState)(!1),[ea,et]=(0,s.useState)(""),[el,es]=(0,s.useState)([]),[en,ed]=(0,s.useState)(""),[ei,er]=(0,s.useState)(!1),[eo,ec]=(0,s.useState)(!1),[eu,ef]=(0,s.useState)([]),[em,eb]=(0,s.useState)(!1),ex={c:(0,s.useRef)(null),java:(0,s.useRef)(null),python:(0,s.useRef)(null),solidity:(0,s.useRef)(null)},eh=(0,n.useRouter)(),ep=(0,s.useRef)(!1);(0,s.useEffect)(()=>{S(!0)},[]),(0,s.useEffect)(()=>{ep.current||(ep.current=!0,eg())},[]);let eg=async()=>{let e=localStorage.getItem("token"),a=localStorage.getItem("email"),t=localStorage.getItem("email"),s=localStorage.getItem("user");if("true"!==localStorage.getItem("adminMode")){if(t&&l(t),s)try{let e=JSON.parse(s);e.firstName&&m(e.firstName)}catch(e){console.error("Error parsing user object:",e)}if(!e||!a){eb(!0),eh.push("/login");return}try{if(t){let e=await fetch("/api/auth/verify-status",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t}),credentials:"include"}).catch(()=>null);if(e&&e.ok){let a=await e.json();y(a.hasPremium),j(a.noOfTrails||5)}}}catch(e){console.warn("Could not fetch user status:",e)}eb(!0)}},ej=async e=>{if(!h||h.type!==e)return void alert("Please select a file first");let a=new FileReader;a.onload=e=>{et(e.target?.result),Z(!0)},a.readAsText(h.file)},ev=async e=>{if(!h||h.type!==e)return void alert("Please select a file first");er(!0),C(a=>({...a,[e]:"Executing command...\n"}));try{let a=new FormData;a.append("file",h.file),a.append("type",e);let t="";if("c"===e){if(!(t=ey()))return void er(!1);switch(a.append("tool",$),$){case"Condition Satisfiability Analysis":a.append("bound",F);break;case"DSE based Mutation Analyser":a.append("value",O);break;case"Dynamic Symbolic Execution":a.append("toolValue","1");break;case"Dynamic Symbolic Execution with Pruning":a.append("toolValue","2");break;case"Advance Code Coverage Profiler":a.append("version",V),a.append("timebound",q);break;case"Mutation Testing Profiler":a.append("version",J),a.append("timebound",H)}}else"solidity"===e?(t=ew(),a.append("mode",R)):"java"===e?t=ek():"python"===e&&(t=eS());if(!t)return void er(!1);a.append("command",t);let l=await fetch("/api/execute",{method:"POST",body:a,credentials:"include"});if(!l.ok){let a=await l.json().catch(()=>({error:"Request failed"}));C(t=>({...t,[e]:t[e]+`❌ Error: ${a.error||"Unknown error"}
`})),er(!1);return}let s=await l.json();if(s.success){C(a=>({...a,[e]:a[e]+"✅ Command executed successfully!\n\n"+s.output}));let a=localStorage.getItem("email");if(!v&&a)try{let e=await fetch("/api/auth/consume-trail",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:a})});if(e.ok){let a=await e.json();j(a.noOfTrails)}}catch(e){console.error("Trail consumption error:",e)}s.files&&s.files.length>0&&P(a=>({...a,[e]:s.files}))}else C(a=>({...a,[e]:a[e]+"❌ Error: "+(s.error||"Unknown error")+"\n"}))}catch(t){let a=t instanceof Error?t.message:"Unknown error";console.error("Execution error:",t),C(t=>({...t,[e]:t[e]+"❌ Network Error: "+a+"\n"}))}finally{er(!1)}},ey=()=>{if(!$)return alert("Please select a tool first"),null;switch($){case"Condition Satisfiability Analysis":if(!F)return alert("Please enter an unwind bound value"),null;return`./cbmc_script.sh [FILE] ${F}`;case"DSE based Mutation Analyser":return`./kleema.sh [FILE] ${O}`;case"Dynamic Symbolic Execution":return"./klee_native.sh [FILE]";case"Dynamic Symbolic Execution with Pruning":return"./tracerx.sh [FILE]";case"Advance Code Coverage Profiler":if(!V||!q)return alert("Please enter version and time bound values"),null;return`./main-gProfiler.sh [FILE] ${V} ${q}`;case"Mutation Testing Profiler":if(!J||!H)return alert("Please enter version and time bound values"),null;return`./main-gProfiler.sh [FILE] ${J} ${H}`;default:return null}},ew=()=>`./final.sh [FILE] ${R}`,ek=()=>T?"./shellsc.sh [FILE]":(alert("Please select a tool first"),null),eS=()=>"./shellpy.sh [FILE]",eN=async e=>{if(!h)return void alert("Please select a file first");let a="";if("c"===e)switch($){case"Condition Satisfiability Analysis":a="CBMC";break;case"DSE based Mutation Analyser":a="KLEEMA";break;case"Dynamic Symbolic Execution":a="KLEE";break;case"Dynamic Symbolic Execution with Pruning":a="TX";break;case"Advance Code Coverage Profiler":a="gMCov";break;case"Mutation Testing Profiler":a="gMutant";break;default:alert("Please select a C tool first");return}else"solidity"===e?a="Solc":"java"===e?a="JAVA":"python"===e&&(a="python");if(!a)return void alert("Unable to determine output folder");let t=h.file.name,l=t.replace(/\.[^/.]+$/,"");try{let e=localStorage.getItem("token"),s=await fetch(`/api/download-zip/${a}?fileName=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${e}`}});if(!s.ok){let e=await s.json();alert(`Error: ${e.error||"Failed to download zip"}`);return}let n=await s.blob(),d=window.URL.createObjectURL(n),i=document.createElement("a");i.href=d,i.download=`${l}.zip`,i.click(),window.URL.revokeObjectURL(d),console.log(`✅ Downloaded ${l}.zip with output from ${t}`)}catch(e){console.error("Error downloading zip:",e),alert("Failed to download zip file")}},eC={c:{"Condition Satisfiability Analysis":[{name:"sample.c",content:`//This Program is Problem4-REACHABILITY-TRAINING-RERS18.c
#include <stdio.h>
#define BOUND 4
int kappa;

int input,output;
#include <assert.h>
#include <math.h>
#include <stdlib.h>

int cf = 1;
int a1631914830 = 4;
int a653455892 = 4;
int a875425738 = 7;

int calculate_output(int input) {
    if((a875425738 == 6 && (a1631914830 == 1 && cf==1))) {
        printf("POINT: 224\\n");
        cf = 0;
        printf("%d\\n", 24);
    }
}

int main() {
    int x = 5;
    calculate_output(x);
    return 0;
}
`},{name:"vowel.c",content:`// C program to check if a character is a vowel or consonant
#include <stdio.h>

int main()
{
    char ch = 'A';

    // Checking if the character ch is a vowel or not.
    if (ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E'
        || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O'
        || ch == 'u' || ch == 'U') {
        printf("The character %c is a vowel.\\n", ch);
    }
    else {
        printf("The character %c is a consonant.\\n", ch);
    }
    return 0;
}
`}],"DSE based Mutation Analyser":[{name:"Vp1-B2.c",content:`// Vp1-B2 Sample Program
#include<stdio.h>
#include <klee/klee.h>
#include <assert.h>

int main() {
    int x;
    klee_make_symbolic(&x, sizeof(int), "x");

    if (x > 10) {
        if (x < 5) {
            printf("Impossible path\\n");
        }
    }
    return 0;
}
`},{name:"Wtest8-B2.c",content:`// Wtest8-B2 Sample Program
#include<stdio.h>
#include <klee/klee.h>
#include <assert.h>

int main() {
    int a, b;
    klee_make_symbolic(&a, sizeof(int), "a");
    klee_make_symbolic(&b, sizeof(int), "b");

    if (a > b) {
        printf("a is greater\\n");
    } else {
        printf("b is greater or equal\\n");
    }
    return 0;
}
`}],"Dynamic Symbolic Execution":[{name:"Vp1-B2.c",content:`// Vp1-B2 for KLEE
#include<stdio.h>
#include <klee/klee.h>

int main() {
    int x;
    klee_make_symbolic(&x, sizeof(int), "x");

    if (x > 10) {
        printf("x > 10\\n");
    } else {
        printf("x <= 10\\n");
    }
    return 0;
}
`},{name:"Wtest8-B2.c",content:`// Wtest8-B2 for KLEE
#include<stdio.h>
#include <klee/klee.h>

int main() {
    int a, b;
    klee_make_symbolic(&a, sizeof(int), "a");
    klee_make_symbolic(&b, sizeof(int), "b");

    int result = a + b;
    if (result == 100) {
        printf("Sum is 100\\n");
    }
    return 0;
}
`}],"Dynamic Symbolic Execution with Pruning":[{name:"Vp1-B2.c",content:`// Vp1-B2 for TracerX
#include<stdio.h>
#include <klee/klee.h>

int main() {
    int x;
    klee_make_symbolic(&x, sizeof(int), "x");

    if (x > 0) {
        if (x < -5) {
            printf("Unreachable\\n");
        }
    }
    return 0;
}
`},{name:"Wtest8-B2.c",content:`// Wtest8-B2 for TracerX
#include<stdio.h>
#include <klee/klee.h>

int main() {
    int x;
    klee_make_symbolic(&x, sizeof(int), "x");

    if (x > 5) printf("Branch 1\\n");
    if (x < 3) printf("Branch 2\\n");

    return 0;
}
`}],"Advance Code Coverage Profiler":[{name:"PS-Wtest10-B2.c",content:`// PS-Wtest10-B2 Sample
#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    printf("Fib(10) = %d\\n", fibonacci(10));
    return 0;
}
`},{name:"PS-Wtest9-B2.c",content:`// PS-Wtest9-B2 Sample
#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    printf("Factorial: %d\\n", factorial(n));
    return 0;
}
`}],"Mutation Testing Profiler":[{name:"PS-Wtest10-B2.c",content:`// PS-Wtest10-B2 for Mutation
#include <stdio.h>
#include <assert.h>

int max(int a, int b) {
    if (a > b) return a;
    return b;
}

int main() {
    assert(max(5, 10) == 10);
    assert(max(20, 10) == 20);
    printf("Tests passed!\\n");
    return 0;
}
`},{name:"PS-Wtest9-B2.c",content:`// PS-Wtest9-B2 for Mutation
#include <stdio.h>
#include <assert.h>

int isEven(int n) {
    return (n % 2 == 0);
}

int main() {
    assert(isEven(2) == 1);
    assert(isEven(3) == 0);
    printf("Tests passed!\\n");
    return 0;
}
`}]},java:{JBMC:[{name:"Demo.java",content:`public class Demo {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;

        if (x > 0 && y > 5) {
            System.out.println("Valid");
        }

        while (x < y || y > 0) {
            x++;
        }
    }
}
`}]},python:{"Condition Coverage Fuzzing":[{name:"eight_queen.py",content:`def is_safe(board, row, col):
    for i in range(row):
        if board[i] == col or abs(board[i] - col) == abs(i - row):
            return False
    return True

def solve_n_queens(n, row=0, board=None):
    if board is None:
        board = [-1] * n

    if row == n:
        return [board[:]]

    solutions = []
    for col in range(n):
        if is_safe(board, row, col):
            board[row] = col
            solutions.extend(solve_n_queens(n, row + 1, board))

    return solutions

if __name__ == "__main__":
    solutions = solve_n_queens(4)
    print(f"Found {len(solutions)} solutions for 4-queens")
`}]},solidity:{VeriSol:[{name:"RIAS.sol",content:`pragma solidity >=0.5.0 <0.9.0;

contract RIAS {
    uint256 public totalSupply;
    mapping(address => uint256) public balances;

    constructor(uint256 initialSupply) public {
        totalSupply = initialSupply;
        balances[msg.sender] = initialSupply;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        return true;
    }
}
`}]}};return(0,a.jsxs)(a.Fragment,{children:[!em&&(0,a.jsx)("div",{className:"fixed inset-0 bg-slate-950 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-gray-400",children:"Loading..."})]})}),(0,a.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df min-h-screen ${!k?"bg-slate-900":"dark"===w?"bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950":"bg-gradient-to-br from-slate-50 via-white to-slate-100"} font-['Geist',system-ui,sans-serif] ${!em?"opacity-0":"opacity-100"} transition-opacity duration-300`,children:[k&&"dark"===w&&(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df fixed inset-0 overflow-hidden pointer-events-none",children:[(0,a.jsx)("div",{className:"jsx-40bdc4d36dd3a4df absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),(0,a.jsx)("div",{style:{animationDelay:"1s"},className:"jsx-40bdc4d36dd3a4df absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"}),(0,a.jsx)("div",{style:{animationDelay:"2s"},className:"jsx-40bdc4d36dd3a4df absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"})]}),(0,a.jsx)(d.default,{}),k&&(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df relative z-10",children:[(0,a.jsx)(r.default,{languages:[{id:"c",name:"C",color:"from-blue-500 to-cyan-500"},{id:"java",name:"Java",color:"from-orange-500 to-red-500"},{id:"python",name:"Python",color:"from-emerald-500 to-teal-500"},{id:"solidity",name:"Solidity",color:"from-purple-500 to-pink-500"}],currentTab:b,onTabChange:e=>{x(e)}}),(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 flex-1 overflow-hidden",children:[(0,a.jsxs)("div",{style:{maxHeight:"calc(85vh - 100px)"},className:"jsx-40bdc4d36dd3a4df space-y-1 overflow-auto md:order-1 order-1",children:[(0,a.jsxs)("div",{id:"file-upload",className:`jsx-40bdc4d36dd3a4df rounded-xl shadow-sm border p-2 transition-all ${"dark"===w?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:[(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex items-center mb-5",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-file-upload text-blue-500 mr-3 text-xl"}),(0,a.jsx)("h3",{className:`jsx-40bdc4d36dd3a4df text-md font-bold ${"dark"===w?"text-slate-100":"text-gray-900"}`,children:"File Selection"})]}),(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df space-y-2",children:[(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex gap-3",children:[(0,a.jsx)("input",{type:"text",value:h?.type===b?h.file.name:"",readOnly:!0,placeholder:`Select ${b} file...`,className:`jsx-40bdc4d36dd3a4df flex-1 px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400":"bg-white border-slate-300 text-black placeholder-slate-500"}`}),(0,a.jsxs)("button",{onClick:()=>{let e;(e=ex[b]?.current)&&e.click()},className:"jsx-40bdc4d36dd3a4df bg-blue-600 text-white px-1 py-1 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-folder-open mr-2"}),"Browse"]})]}),(0,a.jsx)("input",{ref:ex[b],type:"file",accept:"solidity"===b?".sol":"java"===b?".java":"python"===b?".py":".c",onChange:e=>{let a;(a=e.target?.files?.[0])&&p({type:b,file:a})},className:"jsx-40bdc4d36dd3a4df hidden"}),(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex gap-3",children:[(0,a.jsxs)("button",{onClick:()=>ej(b),className:"jsx-40bdc4d36dd3a4df flex-1 bg-green-600 text-white px-1 py-1 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-eye mr-2"}),"View File"]}),(0,a.jsx)("button",{onClick:()=>ev(b),disabled:ei,id:"execute-btn",className:"jsx-40bdc4d36dd3a4df flex-1 bg-purple-600 text-white px-1 py-1 rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",children:ei?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-spinner fa-spin mr-2"}),"Running..."]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-play mr-2"}),"Execute"]})})]})]})]}),(0,a.jsxs)("div",{id:"tool-config-section",className:`jsx-40bdc4d36dd3a4df rounded-xl shadow-sm border p-2 transition-all ${"dark"===w?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:[(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex items-center mb-2",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-tools text-blue-500 mr-3 text-xl"}),(0,a.jsx)("h3",{className:`jsx-40bdc4d36dd3a4df text-md font-bold ${"dark"===w?"text-slate-100":"text-gray-900"}`,children:"Tool Configuration"})]}),(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df space-y-2",children:[(0,a.jsxs)("div",{id:"tool-select",className:"jsx-40bdc4d36dd3a4df",children:[(0,a.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Security Tool:"}),(0,a.jsxs)("select",{value:"c"===b?$:"java"===b?T:"python"===b?B:_,onChange:e=>{"c"===b?M(e.target.value):"java"===b?A(e.target.value):"python"===b?I(e.target.value):D(e.target.value)},className:`jsx-40bdc4d36dd3a4df w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-700 border-slate-600 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[(0,a.jsx)("option",{value:"",className:"jsx-40bdc4d36dd3a4df",children:"Select a tool"}),"c"===b&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("option",{value:"Condition Satisfiability Analysis",className:"jsx-40bdc4d36dd3a4df",children:"Condition Satisfiability Analysis"}),(0,a.jsx)("option",{value:"DSE based Mutation Analyser",className:"jsx-40bdc4d36dd3a4df",children:"DSE based Mutation Analyser"}),(0,a.jsx)("option",{value:"Dynamic Symbolic Execution",className:"jsx-40bdc4d36dd3a4df",children:"Dynamic Symbolic Execution"}),(0,a.jsx)("option",{value:"Dynamic Symbolic Execution with Pruning",className:"jsx-40bdc4d36dd3a4df",children:"Dynamic Symbolic Execution with Pruning"}),(0,a.jsx)("option",{value:"Advance Code Coverage Profiler",className:"jsx-40bdc4d36dd3a4df",children:"Advance Code Coverage Profiler"}),(0,a.jsx)("option",{value:"Mutation Testing Profiler",className:"jsx-40bdc4d36dd3a4df",children:"Mutation Testing Profiler"})]}),"java"===b&&(0,a.jsx)("option",{value:"JBMC",className:"jsx-40bdc4d36dd3a4df",children:"JBMC - Java Bounded Model Checker"}),"python"===b&&(0,a.jsx)("option",{value:"Condition Coverage Fuzzing",className:"jsx-40bdc4d36dd3a4df",children:"Condition Coverage Fuzzing"}),"solidity"===b&&(0,a.jsx)("option",{value:"VeriSol",className:"jsx-40bdc4d36dd3a4df",children:"VeriSol - Smart Contract Verifier"})]})]}),(0,a.jsxs)("button",{onClick:()=>(e=>{let a="";if("c"===e?a=$:"java"===e?a=T:"python"===e?a=B:"solidity"===e&&(a=_),!a)return void alert("Please select a tool first");let t=eC[e]?.[a];if(!t||0===t.length)return void alert("No sample programs available for this tool");if(1===t.length){let a=t[0];p({type:e,file:new File([new Blob([a.content],{type:"text/plain"})],a.name,{type:"text/plain"})}),alert(`Sample code loaded! File: ${a.name}
You can now execute the command.`)}else es(t),ed(a),ee(!0)})(b),className:"jsx-40bdc4d36dd3a4df w-full bg-orange-600 text-white px-1 py-1 rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-file-code mr-2"}),"Load Sample Code"]}),"c"===b&&"Condition Satisfiability Analysis"===$&&(0,a.jsxs)("div",{id:"tool-params",className:`jsx-40bdc4d36dd3a4df p-1 rounded-lg border transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,a.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Unwind Bound:"}),(0,a.jsx)("input",{type:"number",value:F,onChange:e=>L(e.target.value),placeholder:"Enter unwind bound value",className:`jsx-40bdc4d36dd3a4df w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100 placeholder-slate-400":"bg-white border-slate-300 text-black placeholder-slate-500"}`})]}),"c"===b&&"DSE based Mutation Analyser"===$&&(0,a.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-4 rounded-lg border transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,a.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Tool Value:"}),(0,a.jsxs)("select",{value:O,onChange:e=>U(e.target.value),className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[(0,a.jsx)("option",{value:"1",className:"jsx-40bdc4d36dd3a4df",children:"1"}),(0,a.jsx)("option",{value:"2",className:"jsx-40bdc4d36dd3a4df",children:"2"}),(0,a.jsx)("option",{value:"3",className:"jsx-40bdc4d36dd3a4df",children:"3"})]})]}),"c"===b&&("Advance Code Coverage Profiler"===$||"Mutation Testing Profiler"===$)&&(0,a.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-4 rounded-lg border space-y-3 transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df",children:[(0,a.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Version:"}),(0,a.jsx)("select",{value:"Advance Code Coverage Profiler"===$?V:J,onChange:e=>"Advance Code Coverage Profiler"===$?W(e.target.value):X(e.target.value),className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[1,2,3,4,5].map(e=>(0,a.jsx)("option",{value:e,className:"jsx-40bdc4d36dd3a4df",children:e},e))})]}),(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df",children:[(0,a.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Time Bound (seconds):"}),(0,a.jsx)("input",{type:"number",value:"Advance Code Coverage Profiler"===$?q:H,onChange:e=>"Advance Code Coverage Profiler"===$?K(e.target.value):Y(e.target.value),placeholder:"Enter time bound",className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100 placeholder-slate-400":"bg-white border-slate-300 text-black placeholder-slate-500"}`})]})]}),"solidity"===b&&"VeriSol"===_&&(0,a.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-4 rounded-lg border transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,a.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Verification Mode:"}),(0,a.jsxs)("select",{value:R,onChange:e=>z(e.target.value),className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[(0,a.jsx)("option",{value:"bmc",className:"jsx-40bdc4d36dd3a4df",children:"Bounded Model Checker"}),(0,a.jsx)("option",{value:"chc",className:"jsx-40bdc4d36dd3a4df",children:"Constrained Horn Clauses"})]})]})]})]})]}),(0,a.jsxs)("div",{id:"terminal-output",style:{height:"calc(96vh - 100px)"},className:`jsx-40bdc4d36dd3a4df rounded-xl shadow-sm border overflow-scroll flex flex-col transition-all md:order-2 order-2 ${"dark"===w?"bg-slate-900 border-slate-700":"bg-white border-slate-200"}`,children:[(0,a.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-3 md:p-4 border-b flex justify-between items-center flex-shrink-0 flex-col md:flex-row gap-3 md:gap-0 ${"dark"===w?"border-slate-700":"border-slate-200"}`,children:[(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex items-center",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-terminal text-green-500 mr-3 text-lg md:text-xl"}),(0,a.jsx)("h3",{className:`jsx-40bdc4d36dd3a4df text-lg md:text-xl font-bold ${"dark"===w?"text-slate-100":"text-gray-900"}`,children:"Terminal Output"})]}),(0,a.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex space-x-2 md:space-x-3 w-full md:w-auto flex-wrap md:flex-nowrap",children:[(0,a.jsxs)("button",{onClick:()=>(e=>{let a=N[e];if(!a.trim())return void alert("No terminal output to download");let t=new Blob([a],{type:"text/plain"}),l=window.URL.createObjectURL(t),s=document.createElement("a");s.href=l,s.download=`terminal-output-${e}-${new Date().toISOString().slice(0,10)}.txt`,s.click(),window.URL.revokeObjectURL(l)})(b),className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-blue-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-download mr-1 md:mr-2"}),(0,a.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"Download"})]}),(0,a.jsxs)("button",{onClick:()=>{let e;!(e=N[b]).trim()?alert("No output to visualize. Execute a tool first."):(ef(((e,a)=>{let t=[];if(e.includes("MC/DC Report")){let a=e.match(/Total no. of feasible MC\/DC sequences = (\d+)/),l=e.match(/Total no. of MC\/DC sequences = (\d+)/),s=parseInt(a?.[1]||"0"),n=parseInt(l?.[1]||"0"),d=n-s;n>0?(t.push({name:"Feasible Sequences",value:s,fill:"#3b82f6"}),d>0&&t.push({name:"Infeasible Sequences",value:d,fill:"#ef4444"})):t.push({name:"No MC/DC Data",value:1,fill:"#9ca3af"})}else if(e.includes("Mutation Report")){let a=e.match(/Total no. of Killed Mutants = (\d+)/),l=e.match(/Total no. of Mutants = (\d+)/),s=parseInt(a?.[1]||"0"),n=parseInt(l?.[1]||"0"),d=n-s;n>0?(t.push({name:"Killed Mutants",value:s,fill:"#10b981"}),d>0&&t.push({name:"Survived Mutants",value:d,fill:"#f59e0b"})):t.push({name:"No Mutation Data",value:1,fill:"#9ca3af"})}else if(e.includes("Final Result Report from CBMC")||e.includes("Reachable paths")){let a=e.match(/Total number of Reachable paths or valid test cases\s*=:\s*(\d+)/),l=e.match(/Total number of Unreachable paths or invalid test cases\s*=:\s*(\d+)/),s=parseInt(a?.[1]||"0"),n=parseInt(l?.[1]||"0");s+n>0?(t.push({name:"Reachable/Valid Paths",value:s,fill:"#10b981"}),n>0&&t.push({name:"Unreachable/Invalid Paths",value:n,fill:"#ef4444"})):t.push({name:"No Path Data",value:1,fill:"#9ca3af"})}else if(e.includes("KLEEMA")||e.match(/Mutation.*analysis|DSE.*mutation/i)){let a=e.match(/Number of mutants\s*=?\s*(\d+)/i),l=e.match(/Mutants killed|Dead mutants\s*=?\s*(\d+)/i),s=parseInt(a?.[1]||"0"),n=parseInt(l?.[1]||"0"),d=s-n;s>0?(t.push({name:"Mutants Killed",value:n,fill:"#10b981"}),d>0&&t.push({name:"Mutants Survived",value:d,fill:"#f59e0b"})):t.push({name:"No KLEEMA Data",value:1,fill:"#9ca3af"})}else if(e.includes("TracerX")||e.includes("dynamic symbolic execution")){let a=e.match(/constraints?\s*=?\s*(\d+)/i),l=e.match(/branch\w*\s*=?\s*(\d+)/i),s=parseInt(a?.[1]||"0"),n=parseInt(l?.[1]||"0");s>0||n>0?(s>0&&t.push({name:"Constraints Explored",value:s,fill:"#3b82f6"}),n>0&&t.push({name:"Branches Covered",value:n,fill:"#8b5cf6"})):t.push({name:"Execution Complete",value:1,fill:"#3b82f6"})}else t.push({name:"✅ Execution Complete",value:1,fill:"#10b981"});return t})(e,0)),ec(!0))},className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-purple-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-chart-pie mr-1 md:mr-2"}),(0,a.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"Visualize"})]}),(0,a.jsxs)("button",{onClick:()=>eN(b),className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-green-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-file-archive mr-1 md:mr-2"}),(0,a.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"ZIP"})]}),(0,a.jsxs)("button",{onClick:()=>{C(e=>({...e,[b]:""}))},className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-gray-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,a.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-trash mr-1 md:mr-2"}),(0,a.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"Clear"})]})]})]}),(0,a.jsx)("div",{className:"jsx-40bdc4d36dd3a4df p-6",children:(0,a.jsx)("div",{style:{height:"700px"},className:`jsx-40bdc4d36dd3a4df rounded-lg border shadow-inner overflow-hidden transition-all ${"dark"===w?"bg-slate-950 border-slate-700":"bg-slate-50 border-slate-300"}`,children:(0,a.jsx)("div",{className:"jsx-40bdc4d36dd3a4df p-4 h-full overflow-y-auto",children:(0,a.jsx)("pre",{className:`jsx-40bdc4d36dd3a4df font-mono text-sm whitespace-pre-wrap leading-relaxed ${"dark"===w?"text-green-400":"text-green-700"}`,children:N[b]||"Terminal output will appear here...\n\nReady to execute security analysis tools."})})})})]})]})]}),(0,a.jsx)(o.default,{isOpen:G,fileContent:ea,onClose:()=>{Z(!1),et("")}}),(0,a.jsx)(c.default,{isOpen:Q,samples:el,title:en,onSelect:e=>{p({type:b,file:new File([new Blob([e.content],{type:"text/plain"})],e.name,{type:"text/plain"})}),ee(!1)},onClose:()=>ee(!1)}),(0,a.jsx)(u.default,{isOpen:eo,chartData:eu,onClose:()=>ec(!1),onDownload:()=>{let e=document.getElementById("visualization-chart-container"),a=e?.querySelector("svg");if(!a)return void alert("Chart not found");let t=a.cloneNode(!0),l=a.getBBox?a.getBBox():{width:500,height:400},s=Math.ceil(l.width||500),n=Math.ceil(l.height||400),d=new XMLSerializer().serializeToString(t),i=document.createElement("canvas"),r=i.getContext("2d"),o=new Image;o.onload=()=>{i.width=s,i.height=n,r&&(r.fillStyle="white",r.fillRect(0,0,s,n),r.drawImage(o,0,0));let e=document.createElement("a");e.href=i.toDataURL("image/png"),e.download=`chart-visualization-${new Date().toISOString().slice(0,10)}.png`,e.click()},o.onerror=()=>{alert("Error converting chart to image. The SVG may contain cross-origin resources.")},o.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(d)))}}),(0,a.jsx)(t.default,{id:"40bdc4d36dd3a4df",children:"@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}"})]})]})}function m(){let e,t=(0,l.c)(1);return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsx)(f,{}),t[0]=e):e=t[0],e}e.s(["default",()=>m])}]);