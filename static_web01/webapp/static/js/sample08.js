/* 
    # html에 인라인방식으로 onclick 대신 이벤트 함수 사용하는 방법

        - 기본적으로 이벤트 함수는 등록된 순서대로 이벤트 함수가 실행됨.
        - .addEventListener("click", 메서드명) 또는 
            익명함수는 .addEventListener("clcick", function(매개변수){실행로직}); 의 방법과 
          .onclick = 메스드명; 또는 익명함수로 .onclick = function() {실행로직;} 방법이 있음.
        - .remove 활용하여 이벤트 함수 제거 가능.

        # .addEventListener() 여러개의 이벤트 함수를 등록 할 수 있음.
        - var div = document.getElementById("id_div");
        - div.addEventListener("click", 메서드명); : 표준방식
        - div.removeEventListener("click", 메서드명); : 이벤트 함수 삭제

        # .onclick 방식은 1개의 이벤트 함수만 등록 가능.
        - var input = document.getElementById("id_input");
        - input.onclick = 메서드명; 주로 익명함수를 사용함.
        - input.removeAttribute("onclick"); : 이벤트 함수 삭제(인터넷에서 찾아봄..)

        # 차이점
        - onclick 은 HTML 안에 인라인방식과 js 에 사용가능하며, addEventListener는 js안에서 사용해야함
        - onclick 은 1개만 덮어써지는 방식으로 최종 한 개만 실행가능하며, addEventListener는 무한정 실행가능.
        - onclick 은 익스플로러도 지원해주나 addEventListener는 익스플로러 8이하는 지원 안해줌
        
        참고로 addEventListener가 최신 문법임.
*/


/* js에서는 window.onload라고 씀 html에서는 그냥 onload 로드가 끝나고 이벤트를 만들어야 에러가 없음. */
/*
window.onload = function() {
    var div = document.getElementById("id_div");
    var input = document.getElementById("id_input");
    var select = document.getElementById("id_select");

    // focus : 입력 활성화 
    input.addEventListener("focus", function(){console.log("focus 이벤트 발생!!")});
    input.onfocus = function(){console.log("focus 이벤트 발생!!")};

    // blur : 입력 활성화에서 빠져나옴
    input.addEventListener("blur", function(){console.log("blur 이벤트 발생!!")});

    // input : 입력하는대로 이벤트 발생
    input.addEventListener("input", function(){console.log("input 이벤트 발생!!")});

    // 마우스가 해당영역 위에 있을 때 이벤트 발생
    div.addEventListener("mouseenter", function(){console.log("마우스가 요소 위에 올려져 있을 때")});
    input.addEventListener("mouseenter", function(){console.log("마우스가 요소 위에 올려져 있을 때")});

    // 마우스가 해당영역을 벗어날 때 이벤트 발생
    div.addEventListener("mouseleave", function(){console.log("마우스가 요소에서 벗어날 때")});
    input.addEventListener("mouseleave", function(){console.log("마우스가 요소에서 벗어날 때")});

    // 해당영역을 마우스 클릭할 때 이벤트 발생
    div.addEventListener("click", function(){console.log("클릭을 할 때")});
    input.addEventListener("click", function(){console.log("클릭을 할 때")});

    // 해당영역을 마우스 더블 클릭할 때 이벤트 발생
    div.addEventListener("dblclick", function(){console.log("더블클릭을 할 때")});
    input.addEventListener("dblclick", function(){console.log("더블클릭을 할 때")});

    // 입력된 값이 변경되었을 때 이벤트 발생(input이나 select 같은 값)
    input.addEventListener("change", function(){console.log("값이 변경되었을 때")});
    select.addEventListener("change", function(){console.log("값이 변경되었을 때")});

      
    // 매개변수를 활용하여 이벤트 해당 객체 불러와서 값을 변경한다거나 등등 활용.
    // e 는 이름 바꿔도 되고 이렇게 설정하면  pointerEvent라고 해서 객체가 전달 됨. 
    // e.target를 통해 이벤트 대상이 되는 해당 객체를 불러올 수 있음. 
    div.addEventListener("click", function(e){console.log(e.target)});
    input.addEventListener("click", function(e){console.log(e.target)});
}
*/


window.onload = function() {
    var div = document.getElementById("id_div");
    var input = document.getElementById("id_input");
    var select = document.getElementById("id_select");

    input.addEventListener("focus", eventHandler);

    input.addEventListener("blur", eventHandler);

    input.addEventListener("input", eventHandler);

    div.addEventListener("mouseenter", eventHandler);
    input.addEventListener("mouseenter", eventHandler);


    div.addEventListener("mouseleave", eventHandler);
    input.addEventListener("mouseleave", eventHandler);


    div.addEventListener("click", eventHandler);
    input.addEventListener("click", eventHandler);


    div.addEventListener("dblclick", eventHandler);
    input.addEventListener("dblclick", eventHandler);

    input.addEventListener("change", eventHandler);
    select.addEventListener("change", eventHandler);
}
/* 이벤트의 타겟 대상을 확인하기 위한 함수 생성 */
function eventHandler(e) {
    switch(e.type) { // e.type은 객체의 이벤트 타입을 의미함 
        case "click" :
            console.log("클릭 이벤트 발생!!"); break;
        case "dblclick" :
            console.log("더블 클릭 이벤트 발생!!"); break;
        case "focus" :
            console.log("포커스 이벤트 발생!!"); break;
        case "blur" :
            console.log("블러 이벤트 발생"); break;
        case "input" :
            console.log("입력 이벤트 발생"); break;
        case "change" :
            console.log("값 변경 이벤트 발생"); break;
        case "mouseenter" :
            console.log("마우스엔터 이벤트 발생"); break;
        case "mouseleave" :
            console.log("마우스리브 이벤트 발생"); break;
    }
    console.log(e.target);
}
