/* 
    # javascript를 통한 style 속성 등 부여하기.
        - var div = document.createElement("div");
        - div.innerText = "div 영역";
        - document.body.append(div);
            # div에 스타일 속성 부여
        - div.style.color = "red"; 
        - div.style.backgroundColor = "gray";  
        ( 마이크로 엣지 브라우저에서는 bacground 및 backgroundColor 하면 background로 적용가능.)
        - div.style.paddingTop = "12px";
            # div에 id 및 class 속성 부여
        - div.id = "id_div";
        - div.className = "div-class";  : div.className = "div-class other-class..." 여러개도 한 번에 가능
        - div.classList;    : 클래스 전체 조회
            # add 나 toggle 활용
        - div.classList.add("other-class"); : 클래스 추가하기
        - div.classList.remove("div-class"); : 기존 클래스 삭제하기
        - div.classList.toggle("div-class"); : 토글 이용해서 있으면 삭제, 없으면 추가

        - var input = document.createElement("input"); : input 태그 생성
        - document.body.append(input); : body 에 추가
        - input.type = "text";  : input 에 type 텍스트 추가 (type 변경하려면 다시 type 넣으면 됨.)
        - input.name = "input_name";    : input 에 name 추가
        - input.value = "value";    : input 에 value 추가
        - input.className = "input-class";  : input 에 class 추가
        - input.id = "input_id";    : input 에 id 추가
        - input.required = true;    : required true 는 필수입력 옵션 적용, false는 필수입력 옵션 없음
        - input.readOnly = true;    : readOnly true 는 읽기전용 옵션 적용, false는 읽기전용 옵션 없음
        - input.type = "checkbox";  : input type 체크박스
        - input.checked = true;     : checked true 면 체크, false 면 체크 x (input 에 checked가 들어가는건 아니고 지금 화면에서 체크유무 설정하는 것 같음.)
        
            # 부트스트랩 사용 시 setAttribute 와 getAttribute 활용해야함.
                (ex : data-bs-toggle 설정 등...)
        - input.setAttribute("otherAttribute", "attributeValue");  : 속성,속성값 설정
        - input.getAttribute("otherAttribute");         : 속성 적용(불러오기)

            # javascripte로 속성명 속성값 부여시 기본 틀
        일반적인 사용 시
        - 엘리먼트.속성명 = "속성값";   : 속성 설정
        - var x = 엘리먼트.속성명;      : 속성값 불러오기

        부트스트랩 사용 시
        - 엘리먼트.setAttribute("속성명", "속성값");    : 속성 설정
        - var x = 엘리먼트.getAttribute("속성명");      : 속성값 불러오기
*/

/** 문제
 * 아이디, 패스워드를 검사 후 오류가 발생하는 경우 
 * 사용자 입력 폼에 에러 메시지가 담긴 span 태그를
 * 추가 하고 입력 양식에는 테두리를 붉게 설정하여 
 * 사용자가 잘못된 입력이라는 것을 알 수 있게 하세요.
 * 
 * 아이디는 6자리 미만인 경우 오류가 발생하게 합니다.
 * 패스워드는 패스워드와 패스워드 확인이 동일하지 않을 때 
 * 오류가 발생하게 합니다.
 * 패스워드도 4자리 미만인 경우 오류가 발생하게 합니다.
 */

function validCheck(form) {
    var isValid = true;

    if(form.username.nextElementSibling !== null) {
        form.username.nextElementSibling.remove();
    }

    if (form.username.value.length < 6) {
        var error = createErrorMessage("아이디는 6자리 이상이어야 합니다.");
        form.username.after(error);
        errorInput(form.username);
        isValid = false;
    }

    if(form.password.nextElementSibling !== null) {
        form.password.nextElementSibling.remove();
    }
    if (form.password.value.length < 4) {
        var error = createErrorMessage("패스워드는 4자리 이상이어야 합니다.");
        form.password.after(error);
        errorInput(form.password);
        isValid = false;
    }

    if(form.passwordCheck.nextElementSibling !== null) {
        form.passwordCheck.nextElementSibling.remove();
    }
    if(form.password.value !== form.passwordCheck.value) {
        var error = createErrorMessage("패스워드를 다시 확인하세요.");
        form.passwordCheck.after(error);
        errorInput(form.passwordCheck);
        isValid = false;
    }
    return isValid;
}

function errorInput(element) {
    element.value = "";
    element.classList.add("is-invalid");
}

function createErrorMessage(message){
    var div = document.createElement("div");
    div.className = "invalid-feedback";
    div.innerText = message;
    return div;
}

