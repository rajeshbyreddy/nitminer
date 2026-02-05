module.exports=[85012,a=>{"use strict";var b=a.i(87924),c=a.i(31626),d=a.i(72131),e=a.i(50944),f=a.i(42974),g=a.i(13902),h=a.i(3197),i=a.i(69396),j=a.i(13840),k=a.i(99688);function l(){let[a,l]=(0,d.useState)(""),[m,n]=(0,d.useState)(""),[o,p]=(0,d.useState)("c"),[q,r]=(0,d.useState)(null),[s,t]=(0,d.useState)(5),[u,v]=(0,d.useState)(!1),{theme:w}=(0,g.useTheme)(),[x,y]=(0,d.useState)(!1),[z,A]=(0,d.useState)({c:"",java:"",python:"",solidity:""}),[B,C]=(0,d.useState)({c:[],java:[],python:[],solidity:[]}),[D,E]=(0,d.useState)(""),[F,G]=(0,d.useState)(""),[H,I]=(0,d.useState)("Condition Coverage Fuzzing"),[J,K]=(0,d.useState)("VeriSol"),[L,M]=(0,d.useState)("bmc"),[N,O]=(0,d.useState)("10"),[P,Q]=(0,d.useState)("1"),[R,S]=(0,d.useState)("4"),[T,U]=(0,d.useState)("3600"),[V,W]=(0,d.useState)("4"),[X,Y]=(0,d.useState)("3600"),[Z,$]=(0,d.useState)(!1),[_,aa]=(0,d.useState)(!1),[ab,ac]=(0,d.useState)(""),[ad,ae]=(0,d.useState)([]),[af,ag]=(0,d.useState)(""),[ah,ai]=(0,d.useState)(!1),[aj,ak]=(0,d.useState)(!1),[al,am]=(0,d.useState)([]),[an,ao]=(0,d.useState)(!1),ap={c:(0,d.useRef)(null),java:(0,d.useRef)(null),python:(0,d.useRef)(null),solidity:(0,d.useRef)(null)},aq=(0,e.useRouter)(),ar=(0,d.useRef)(!1);(0,d.useEffect)(()=>{y(!0)},[]),(0,d.useEffect)(()=>{ar.current||(ar.current=!0,as())},[]);let as=async()=>{let a=localStorage.getItem("token"),b=localStorage.getItem("email"),c=localStorage.getItem("email"),d=localStorage.getItem("user");if("true"!==localStorage.getItem("adminMode")){if(c&&l(c),d)try{let a=JSON.parse(d);a.firstName&&n(a.firstName)}catch(a){console.error("Error parsing user object:",a)}if(!a||!b){ao(!0),aq.push("/login");return}try{if(c){let a=await fetch("/api/auth/verify-status",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c}),credentials:"include"}).catch(()=>null);if(a&&a.ok){let b=await a.json();v(b.hasPremium),t(b.noOfTrails||5)}}}catch(a){console.warn("Could not fetch user status:",a)}ao(!0)}},at=async a=>{if(!q||q.type!==a)return void alert("Please select a file first");let b=new FileReader;b.onload=a=>{ac(a.target?.result),$(!0)},b.readAsText(q.file)},au=async a=>{if(!q||q.type!==a)return void alert("Please select a file first");ai(!0),A(b=>({...b,[a]:"Executing command...\n"}));try{let b=new FormData;b.append("file",q.file),b.append("type",a);let c="";if("c"===a){if(!(c=av()))return void ai(!1);switch(b.append("tool",D),D){case"Condition Satisfiability Analysis":b.append("bound",N);break;case"DSE based Mutation Analyser":b.append("value",P);break;case"Dynamic Symbolic Execution":b.append("toolValue","1");break;case"Dynamic Symbolic Execution with Pruning":b.append("toolValue","2");break;case"Advance Code Coverage Profiler":b.append("version",R),b.append("timebound",T);break;case"Mutation Testing Profiler":b.append("version",V),b.append("timebound",X)}}else"solidity"===a?(c=aw(),b.append("mode",L)):"java"===a?c=ax():"python"===a&&(c=ay());if(!c)return void ai(!1);b.append("command",c);let d=await fetch("/api/execute",{method:"POST",body:b,credentials:"include"});if(!d.ok){let b=await d.json().catch(()=>({error:"Request failed"}));A(c=>({...c,[a]:c[a]+`❌ Error: ${b.error||"Unknown error"}
`})),ai(!1);return}let e=await d.json();if(e.success){A(b=>({...b,[a]:b[a]+"✅ Command executed successfully!\n\n"+e.output}));let b=localStorage.getItem("email");if(!u&&b)try{let a=await fetch("/api/auth/consume-trail",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:b})});if(a.ok){let b=await a.json();t(b.noOfTrails)}}catch(a){console.error("Trail consumption error:",a)}e.files&&e.files.length>0&&C(b=>({...b,[a]:e.files}))}else A(b=>({...b,[a]:b[a]+"❌ Error: "+(e.error||"Unknown error")+"\n"}))}catch(c){let b=c instanceof Error?c.message:"Unknown error";console.error("Execution error:",c),A(c=>({...c,[a]:c[a]+"❌ Network Error: "+b+"\n"}))}finally{ai(!1)}},av=()=>{if(!D)return alert("Please select a tool first"),null;switch(D){case"Condition Satisfiability Analysis":if(!N)return alert("Please enter an unwind bound value"),null;return`./cbmc_script.sh [FILE] ${N}`;case"DSE based Mutation Analyser":return`./kleema.sh [FILE] ${P}`;case"Dynamic Symbolic Execution":return"./klee_native.sh [FILE]";case"Dynamic Symbolic Execution with Pruning":return"./tracerx.sh [FILE]";case"Advance Code Coverage Profiler":if(!R||!T)return alert("Please enter version and time bound values"),null;return`./main-gProfiler.sh [FILE] ${R} ${T}`;case"Mutation Testing Profiler":if(!V||!X)return alert("Please enter version and time bound values"),null;return`./main-gProfiler.sh [FILE] ${V} ${X}`;default:return null}},aw=()=>`./final.sh [FILE] ${L}`,ax=()=>F?"./shellsc.sh [FILE]":(alert("Please select a tool first"),null),ay=()=>"./shellpy.sh [FILE]",az=async a=>{if(!q)return void alert("Please select a file first");let b="";if("c"===a)switch(D){case"Condition Satisfiability Analysis":b="CBMC";break;case"DSE based Mutation Analyser":b="KLEEMA";break;case"Dynamic Symbolic Execution":b="KLEE";break;case"Dynamic Symbolic Execution with Pruning":b="TX";break;case"Advance Code Coverage Profiler":b="gMCov";break;case"Mutation Testing Profiler":b="gMutant";break;default:alert("Please select a C tool first");return}else"solidity"===a?b="Solc":"java"===a?b="JAVA":"python"===a&&(b="python");if(!b)return void alert("Unable to determine output folder");let c=q.file.name,d=c.replace(/\.[^/.]+$/,"");try{let a=localStorage.getItem("token"),e=await fetch(`/api/download-zip/${b}?fileName=${encodeURIComponent(c)}`,{headers:{Authorization:`Bearer ${a}`}});if(!e.ok){let a=await e.json();alert(`Error: ${a.error||"Failed to download zip"}`);return}let f=await e.blob(),g=window.URL.createObjectURL(f),h=document.createElement("a");h.href=g,h.download=`${d}.zip`,h.click(),window.URL.revokeObjectURL(g),console.log(`✅ Downloaded ${d}.zip with output from ${c}`)}catch(a){console.error("Error downloading zip:",a),alert("Failed to download zip file")}},aA={c:{"Condition Satisfiability Analysis":[{name:"sample.c",content:`//This Program is Problem4-REACHABILITY-TRAINING-RERS18.c
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
`}]}};return(0,b.jsxs)(b.Fragment,{children:[!an&&(0,b.jsx)("div",{className:"fixed inset-0 bg-slate-950 flex items-center justify-center z-50",children:(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"}),(0,b.jsx)("p",{className:"text-gray-400",children:"Loading..."})]})}),(0,b.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df min-h-screen ${!x?"bg-slate-900":"dark"===w?"bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950":"bg-gradient-to-br from-slate-50 via-white to-slate-100"} font-['Geist',system-ui,sans-serif] ${!an?"opacity-0":"opacity-100"} transition-opacity duration-300`,children:[x&&"dark"===w&&(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df fixed inset-0 overflow-hidden pointer-events-none",children:[(0,b.jsx)("div",{className:"jsx-40bdc4d36dd3a4df absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),(0,b.jsx)("div",{style:{animationDelay:"1s"},className:"jsx-40bdc4d36dd3a4df absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"}),(0,b.jsx)("div",{style:{animationDelay:"2s"},className:"jsx-40bdc4d36dd3a4df absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"})]}),(0,b.jsx)(f.default,{}),x&&(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df relative z-10",children:[(0,b.jsx)(h.default,{languages:[{id:"c",name:"C",color:"from-blue-500 to-cyan-500"},{id:"java",name:"Java",color:"from-orange-500 to-red-500"},{id:"python",name:"Python",color:"from-emerald-500 to-teal-500"},{id:"solidity",name:"Solidity",color:"from-purple-500 to-pink-500"}],currentTab:o,onTabChange:a=>{p(a)}}),(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 flex-1 overflow-hidden",children:[(0,b.jsxs)("div",{style:{maxHeight:"calc(85vh - 100px)"},className:"jsx-40bdc4d36dd3a4df space-y-1 overflow-auto md:order-1 order-1",children:[(0,b.jsxs)("div",{id:"file-upload",className:`jsx-40bdc4d36dd3a4df rounded-xl shadow-sm border p-2 transition-all ${"dark"===w?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:[(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex items-center mb-5",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-file-upload text-blue-500 mr-3 text-xl"}),(0,b.jsx)("h3",{className:`jsx-40bdc4d36dd3a4df text-md font-bold ${"dark"===w?"text-slate-100":"text-gray-900"}`,children:"File Selection"})]}),(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df space-y-2",children:[(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex gap-3",children:[(0,b.jsx)("input",{type:"text",value:q?.type===o?q.file.name:"",readOnly:!0,placeholder:`Select ${o} file...`,className:`jsx-40bdc4d36dd3a4df flex-1 px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400":"bg-white border-slate-300 text-black placeholder-slate-500"}`}),(0,b.jsxs)("button",{onClick:()=>{let a;(a=ap[o]?.current)&&a.click()},className:"jsx-40bdc4d36dd3a4df bg-blue-600 text-white px-1 py-1 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-folder-open mr-2"}),"Browse"]})]}),(0,b.jsx)("input",{ref:ap[o],type:"file",accept:"solidity"===o?".sol":"java"===o?".java":"python"===o?".py":".c",onChange:a=>{let b;(b=a.target?.files?.[0])&&r({type:o,file:b})},className:"jsx-40bdc4d36dd3a4df hidden"}),(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex gap-3",children:[(0,b.jsxs)("button",{onClick:()=>at(o),className:"jsx-40bdc4d36dd3a4df flex-1 bg-green-600 text-white px-1 py-1 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-eye mr-2"}),"View File"]}),(0,b.jsx)("button",{onClick:()=>au(o),disabled:ah,id:"execute-btn",className:"jsx-40bdc4d36dd3a4df flex-1 bg-purple-600 text-white px-1 py-1 rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",children:ah?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-spinner fa-spin mr-2"}),"Running..."]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-play mr-2"}),"Execute"]})})]})]})]}),(0,b.jsxs)("div",{id:"tool-config-section",className:`jsx-40bdc4d36dd3a4df rounded-xl shadow-sm border p-2 transition-all ${"dark"===w?"bg-slate-800 border-slate-700":"bg-white border-slate-200"}`,children:[(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex items-center mb-2",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-tools text-blue-500 mr-3 text-xl"}),(0,b.jsx)("h3",{className:`jsx-40bdc4d36dd3a4df text-md font-bold ${"dark"===w?"text-slate-100":"text-gray-900"}`,children:"Tool Configuration"})]}),(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df space-y-2",children:[(0,b.jsxs)("div",{id:"tool-select",className:"jsx-40bdc4d36dd3a4df",children:[(0,b.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Security Tool:"}),(0,b.jsxs)("select",{value:"c"===o?D:"java"===o?F:"python"===o?H:J,onChange:a=>{"c"===o?E(a.target.value):"java"===o?G(a.target.value):"python"===o?I(a.target.value):K(a.target.value)},className:`jsx-40bdc4d36dd3a4df w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-700 border-slate-600 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[(0,b.jsx)("option",{value:"",className:"jsx-40bdc4d36dd3a4df",children:"Select a tool"}),"c"===o&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("option",{value:"Condition Satisfiability Analysis",className:"jsx-40bdc4d36dd3a4df",children:"Condition Satisfiability Analysis"}),(0,b.jsx)("option",{value:"DSE based Mutation Analyser",className:"jsx-40bdc4d36dd3a4df",children:"DSE based Mutation Analyser"}),(0,b.jsx)("option",{value:"Dynamic Symbolic Execution",className:"jsx-40bdc4d36dd3a4df",children:"Dynamic Symbolic Execution"}),(0,b.jsx)("option",{value:"Dynamic Symbolic Execution with Pruning",className:"jsx-40bdc4d36dd3a4df",children:"Dynamic Symbolic Execution with Pruning"}),(0,b.jsx)("option",{value:"Advance Code Coverage Profiler",className:"jsx-40bdc4d36dd3a4df",children:"Advance Code Coverage Profiler"}),(0,b.jsx)("option",{value:"Mutation Testing Profiler",className:"jsx-40bdc4d36dd3a4df",children:"Mutation Testing Profiler"})]}),"java"===o&&(0,b.jsx)("option",{value:"JBMC",className:"jsx-40bdc4d36dd3a4df",children:"JBMC - Java Bounded Model Checker"}),"python"===o&&(0,b.jsx)("option",{value:"Condition Coverage Fuzzing",className:"jsx-40bdc4d36dd3a4df",children:"Condition Coverage Fuzzing"}),"solidity"===o&&(0,b.jsx)("option",{value:"VeriSol",className:"jsx-40bdc4d36dd3a4df",children:"VeriSol - Smart Contract Verifier"})]})]}),(0,b.jsxs)("button",{onClick:()=>(a=>{let b="";if("c"===a?b=D:"java"===a?b=F:"python"===a?b=H:"solidity"===a&&(b=J),!b)return void alert("Please select a tool first");let c=aA[a]?.[b];if(!c||0===c.length)return void alert("No sample programs available for this tool");if(1===c.length){let b=c[0];r({type:a,file:new File([new Blob([b.content],{type:"text/plain"})],b.name,{type:"text/plain"})}),alert(`Sample code loaded! File: ${b.name}
You can now execute the command.`)}else ae(c),ag(b),aa(!0)})(o),className:"jsx-40bdc4d36dd3a4df w-full bg-orange-600 text-white px-1 py-1 rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-file-code mr-2"}),"Load Sample Code"]}),"c"===o&&"Condition Satisfiability Analysis"===D&&(0,b.jsxs)("div",{id:"tool-params",className:`jsx-40bdc4d36dd3a4df p-1 rounded-lg border transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,b.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Unwind Bound:"}),(0,b.jsx)("input",{type:"number",value:N,onChange:a=>O(a.target.value),placeholder:"Enter unwind bound value",className:`jsx-40bdc4d36dd3a4df w-full px-1 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100 placeholder-slate-400":"bg-white border-slate-300 text-black placeholder-slate-500"}`})]}),"c"===o&&"DSE based Mutation Analyser"===D&&(0,b.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-4 rounded-lg border transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,b.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Tool Value:"}),(0,b.jsxs)("select",{value:P,onChange:a=>Q(a.target.value),className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[(0,b.jsx)("option",{value:"1",className:"jsx-40bdc4d36dd3a4df",children:"1"}),(0,b.jsx)("option",{value:"2",className:"jsx-40bdc4d36dd3a4df",children:"2"}),(0,b.jsx)("option",{value:"3",className:"jsx-40bdc4d36dd3a4df",children:"3"})]})]}),"c"===o&&("Advance Code Coverage Profiler"===D||"Mutation Testing Profiler"===D)&&(0,b.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-4 rounded-lg border space-y-3 transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df",children:[(0,b.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Version:"}),(0,b.jsx)("select",{value:"Advance Code Coverage Profiler"===D?R:V,onChange:a=>"Advance Code Coverage Profiler"===D?S(a.target.value):W(a.target.value),className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[1,2,3,4,5].map(a=>(0,b.jsx)("option",{value:a,className:"jsx-40bdc4d36dd3a4df",children:a},a))})]}),(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df",children:[(0,b.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Time Bound (seconds):"}),(0,b.jsx)("input",{type:"number",value:"Advance Code Coverage Profiler"===D?T:X,onChange:a=>"Advance Code Coverage Profiler"===D?U(a.target.value):Y(a.target.value),placeholder:"Enter time bound",className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100 placeholder-slate-400":"bg-white border-slate-300 text-black placeholder-slate-500"}`})]})]}),"solidity"===o&&"VeriSol"===J&&(0,b.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-4 rounded-lg border transition-all ${"dark"===w?"bg-slate-700 border-slate-600":"bg-blue-50 border-blue-200"}`,children:[(0,b.jsx)("label",{className:`jsx-40bdc4d36dd3a4df block text-sm font-medium mb-2 ${"dark"===w?"text-slate-300":"text-gray-700"}`,children:"Verification Mode:"}),(0,b.jsxs)("select",{value:L,onChange:a=>M(a.target.value),className:`jsx-40bdc4d36dd3a4df w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all ${"dark"===w?"bg-slate-600 border-slate-500 text-slate-100":"bg-white border-slate-300 text-black"}`,children:[(0,b.jsx)("option",{value:"bmc",className:"jsx-40bdc4d36dd3a4df",children:"Bounded Model Checker"}),(0,b.jsx)("option",{value:"chc",className:"jsx-40bdc4d36dd3a4df",children:"Constrained Horn Clauses"})]})]})]})]})]}),(0,b.jsxs)("div",{id:"terminal-output",style:{height:"calc(96vh - 100px)"},className:`jsx-40bdc4d36dd3a4df rounded-xl shadow-sm border overflow-scroll flex flex-col transition-all md:order-2 order-2 ${"dark"===w?"bg-slate-900 border-slate-700":"bg-white border-slate-200"}`,children:[(0,b.jsxs)("div",{className:`jsx-40bdc4d36dd3a4df p-3 md:p-4 border-b flex justify-between items-center flex-shrink-0 flex-col md:flex-row gap-3 md:gap-0 ${"dark"===w?"border-slate-700":"border-slate-200"}`,children:[(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex items-center",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-terminal text-green-500 mr-3 text-lg md:text-xl"}),(0,b.jsx)("h3",{className:`jsx-40bdc4d36dd3a4df text-lg md:text-xl font-bold ${"dark"===w?"text-slate-100":"text-gray-900"}`,children:"Terminal Output"})]}),(0,b.jsxs)("div",{className:"jsx-40bdc4d36dd3a4df flex space-x-2 md:space-x-3 w-full md:w-auto flex-wrap md:flex-nowrap",children:[(0,b.jsxs)("button",{onClick:()=>(a=>{let b=z[a];if(!b.trim())return void alert("No terminal output to download");let c=new Blob([b],{type:"text/plain"}),d=window.URL.createObjectURL(c),e=document.createElement("a");e.href=d,e.download=`terminal-output-${a}-${new Date().toISOString().slice(0,10)}.txt`,e.click(),window.URL.revokeObjectURL(d)})(o),className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-blue-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-download mr-1 md:mr-2"}),(0,b.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"Download"})]}),(0,b.jsxs)("button",{onClick:()=>{let a;!(a=z[o]).trim()?alert("No output to visualize. Execute a tool first."):(am(((a,b)=>{let c=[];if(a.includes("MC/DC Report")){let b=a.match(/Total no. of feasible MC\/DC sequences = (\d+)/),d=a.match(/Total no. of MC\/DC sequences = (\d+)/),e=parseInt(b?.[1]||"0"),f=parseInt(d?.[1]||"0"),g=f-e;f>0?(c.push({name:"Feasible Sequences",value:e,fill:"#3b82f6"}),g>0&&c.push({name:"Infeasible Sequences",value:g,fill:"#ef4444"})):c.push({name:"No MC/DC Data",value:1,fill:"#9ca3af"})}else if(a.includes("Mutation Report")){let b=a.match(/Total no. of Killed Mutants = (\d+)/),d=a.match(/Total no. of Mutants = (\d+)/),e=parseInt(b?.[1]||"0"),f=parseInt(d?.[1]||"0"),g=f-e;f>0?(c.push({name:"Killed Mutants",value:e,fill:"#10b981"}),g>0&&c.push({name:"Survived Mutants",value:g,fill:"#f59e0b"})):c.push({name:"No Mutation Data",value:1,fill:"#9ca3af"})}else if(a.includes("Final Result Report from CBMC")||a.includes("Reachable paths")){let b=a.match(/Total number of Reachable paths or valid test cases\s*=:\s*(\d+)/),d=a.match(/Total number of Unreachable paths or invalid test cases\s*=:\s*(\d+)/),e=parseInt(b?.[1]||"0"),f=parseInt(d?.[1]||"0");e+f>0?(c.push({name:"Reachable/Valid Paths",value:e,fill:"#10b981"}),f>0&&c.push({name:"Unreachable/Invalid Paths",value:f,fill:"#ef4444"})):c.push({name:"No Path Data",value:1,fill:"#9ca3af"})}else if(a.includes("KLEEMA")||a.match(/Mutation.*analysis|DSE.*mutation/i)){let b=a.match(/Number of mutants\s*=?\s*(\d+)/i),d=a.match(/Mutants killed|Dead mutants\s*=?\s*(\d+)/i),e=parseInt(b?.[1]||"0"),f=parseInt(d?.[1]||"0"),g=e-f;e>0?(c.push({name:"Mutants Killed",value:f,fill:"#10b981"}),g>0&&c.push({name:"Mutants Survived",value:g,fill:"#f59e0b"})):c.push({name:"No KLEEMA Data",value:1,fill:"#9ca3af"})}else if(a.includes("TracerX")||a.includes("dynamic symbolic execution")){let b=a.match(/constraints?\s*=?\s*(\d+)/i),d=a.match(/branch\w*\s*=?\s*(\d+)/i),e=parseInt(b?.[1]||"0"),f=parseInt(d?.[1]||"0");e>0||f>0?(e>0&&c.push({name:"Constraints Explored",value:e,fill:"#3b82f6"}),f>0&&c.push({name:"Branches Covered",value:f,fill:"#8b5cf6"})):c.push({name:"Execution Complete",value:1,fill:"#3b82f6"})}else c.push({name:"✅ Execution Complete",value:1,fill:"#10b981"});return c})(a,0)),ak(!0))},className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-purple-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-chart-pie mr-1 md:mr-2"}),(0,b.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"Visualize"})]}),(0,b.jsxs)("button",{onClick:()=>az(o),className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-green-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-file-archive mr-1 md:mr-2"}),(0,b.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"ZIP"})]}),(0,b.jsxs)("button",{onClick:()=>{A(a=>({...a,[o]:""}))},className:"jsx-40bdc4d36dd3a4df flex-1 md:flex-initial bg-gray-600 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-sm",children:[(0,b.jsx)("i",{className:"jsx-40bdc4d36dd3a4df fas fa-trash mr-1 md:mr-2"}),(0,b.jsx)("span",{className:"jsx-40bdc4d36dd3a4df hidden sm:inline",children:"Clear"})]})]})]}),(0,b.jsx)("div",{className:"jsx-40bdc4d36dd3a4df p-6",children:(0,b.jsx)("div",{style:{height:"700px"},className:`jsx-40bdc4d36dd3a4df rounded-lg border shadow-inner overflow-hidden transition-all ${"dark"===w?"bg-slate-950 border-slate-700":"bg-slate-50 border-slate-300"}`,children:(0,b.jsx)("div",{className:"jsx-40bdc4d36dd3a4df p-4 h-full overflow-y-auto",children:(0,b.jsx)("pre",{className:`jsx-40bdc4d36dd3a4df font-mono text-sm whitespace-pre-wrap leading-relaxed ${"dark"===w?"text-green-400":"text-green-700"}`,children:z[o]||"Terminal output will appear here...\n\nReady to execute security analysis tools."})})})})]})]})]}),(0,b.jsx)(i.default,{isOpen:Z,fileContent:ab,onClose:()=>{$(!1),ac("")}}),(0,b.jsx)(j.default,{isOpen:_,samples:ad,title:af,onSelect:a=>{r({type:o,file:new File([new Blob([a.content],{type:"text/plain"})],a.name,{type:"text/plain"})}),aa(!1)},onClose:()=>aa(!1)}),(0,b.jsx)(k.default,{isOpen:aj,chartData:al,onClose:()=>ak(!1),onDownload:()=>{let a=document.getElementById("visualization-chart-container"),b=a?.querySelector("svg");if(!b)return void alert("Chart not found");let c=b.cloneNode(!0),d=b.getBBox?b.getBBox():{width:500,height:400},e=Math.ceil(d.width||500),f=Math.ceil(d.height||400),g=new XMLSerializer().serializeToString(c),h=document.createElement("canvas"),i=h.getContext("2d"),j=new Image;j.onload=()=>{h.width=e,h.height=f,i&&(i.fillStyle="white",i.fillRect(0,0,e,f),i.drawImage(j,0,0));let a=document.createElement("a");a.href=h.toDataURL("image/png"),a.download=`chart-visualization-${new Date().toISOString().slice(0,10)}.png`,a.click()},j.onerror=()=>{alert("Error converting chart to image. The SVG may contain cross-origin resources.")},j.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(g)))}}),(0,b.jsx)(c.default,{id:"40bdc4d36dd3a4df",children:"@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}"})]})]})}function m(){return(0,b.jsx)(l,{})}a.s(["default",()=>m])}];

//# sourceMappingURL=src_app_tools_page_1d74ed02.js.map