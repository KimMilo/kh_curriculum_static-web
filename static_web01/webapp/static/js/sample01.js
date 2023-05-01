console.log("외부 자바스크립트 파일 실행");

function fn1() {
    document.getElementById("print_area").innerText = "함수가 실행되었습니다.";
}

/* 매개변수가 있는 함수 */
function fn2(x, y) {
    if(x === undefined){
        x = 1;
    }
    if(y === undefined){
        y = 0;
    }
    let tot = x + y;
    document.getElementById("print_area").innerText = "x + y 의 값은 " + tot + " 입니다.";
}

/* 
    매개변수에 기본값을 설정한 함수
    이 경우, 함수 실행 시 매개변수를 넣지 않아도 기본값이 넣어져서 NaN 출력 안됨.
*/
function fn3(x=0, y=0) {
    let tot = x + y;
    document.getElementById("print_area").innerText = "x + y 의 값은 " + tot + " 입니다.";
}

/* 
    가변 매개변수 함수 : 매개변수의 수가 0개 이상이 사용될 수 있는 함수 
    ...매개변수명을 넣으면 됨.
*/
function fn4(...x) {
    console.log(x); /* 가변 매개변수는 배열 형태인 것을 확인 할 수 있음. */
    let total = 0;
    let num = 0;
    for(let i = 0; i < x.length; i++){
        num = x[i];
        total += num;
    };
    document.getElementById("print_area").innerText = 
                                                    "가변 매개 변수로 다음의 값을 받았습니다. -> " + x + " | " +
                                                    "가변 매개 변수의 합은 -> " + total;
}

/* 익명 함수 : 함수를 만들 때 함수의 이름이 없이 만들어서 사용하는 함수 */
var fn5 = function() {
    document.getElementById("print_area").innerText = "익명함수가 실행되었습니다.";
    return 10; /* 리턴값은 콘솔창에 함수 실행하면 출력됨. */
}
 
/* 익명 함수 : 함수를 만들 때 함수의 이름이 없이 만들어서 사용하는 함수 + 매개변수 넣기 */
var fn6 = function(x, y) {
    console.log(x + y);
    document.getElementById("print_area").innerText = "익명함수가 실행되었습니다.";
}

/* 화살표 함수 : 익명 함수를 더 간략하게 만들어서 사용하기 위한 함수 
                function 없이 사용 가능 */
var fn7 = () => {
    document.getElementById("print_area").innerText = "화살표 함수가 실행되었습니다.";
}

/* 
    리턴 값이 있는 화살표 함수 
    => 뒤에 리턴 값을 넣으면 되며, 콘솔창에서 fn8(); 실행하면 리턴값 출력되고
    저장은 별도로 var res = fn8(); 이런식으로 저장하고, res; 출력하면 됨.    
*/
var fn8 = () => "Arrow Function";

/* 
    매개변수, 리턴값이 있는 화살표 함수   
    콘솔 창에 fn9(10, 20) 매개변수 넣어서 실행하면 리턴 값 출력 됨.
*/
var fn9 = (x, y) => x + y;