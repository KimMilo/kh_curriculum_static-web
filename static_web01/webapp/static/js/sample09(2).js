window.onload = function() {
    form = document.forms[0];
    createMonthOption();
    form.username.addEventListener("blur", function(e) { requiredValid(e); });
    form.username.addEventListener("change", function(e) { lengthValid(e, 5, 20); });

    /* name이 동일하면 배열에 담기기 때문에 인덱스 활요 */
    form.password[0].addEventListener("blur", function(e) { requiredValid(e); });
    form.password[0].addEventListener("change", function(e) { lengthValid(e, 8, 16); });
    form.password[1].addEventListener("blur", function(e) { requiredValid(e); });
    form.password[1].addEventListener("change", function(e) { lengthValid(e, 8, 16); });

    //form.authbutton.addEventListener("click", function() { createAuthNumber() });
};

function createAuthNumber() {
    var num = (Math.random() * 9000 + 1000).toFixed(0);
    alert(num);
    form.authNumber.disabled = false;
    form.authNumber.addEventListener("change", function(e) {
        if(e.target.value == num) {
            alert("인증 번호가 일치합니다.");
            form.submitButton.disabled = false;
        } else {
            alert("인증 번호가 일치하지 않습니다.");
            form.submitButton.disabled = true;
        }
    });
}

function createMonthOption() {
    for(let m = 1; m <= 12; m++) {
        let option = document.createElement("option");
        option.innerText = m + "월";
        option.value = m;
        form.month.append(option);
    }
}

function requiredValid(event) {
    var inputElement = event.target;
    if(inputElement.value === "") {
        errorMessage(inputElement, "필수 입력 입니다.");
    }
}

function lengthValid(event, min, max) {
    var inputElement = event.target;
    if(inputElement.value.length < min || inputElement.value.length > max) {
        errorMessage(inputElement, min + "~" + max + "자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
    } else {
        validMessage(inputElement, "정상입니다.");
    }
}

/* 부트스트랩에서는 
        is-invalid - invalid-feedback 클래스로 빨간 글자 색상과 빨간테두리 넣어줌. 
        is-valid - valid-feedback 클래스로 초록 글자 색상과 초록테두리 넣어줌 

    - classList.contains 는 해당 클래스가 있는지 체크하는 것임.
      에러메시지를 중복해서 나오지 않게 하려고 활용한 것. 
*/

/* invalid 메시지 나오게 하는 함수 */
function errorMessage(element, message) {
    var divError = document.createElement("div");
    if(element.parentElement.lastElementChild.classList.contains("invalid-feedback") ||
       element.parentElement.lastElementChild.classList.contains("valid-feedback")) {
        divError = element.parentElement.lastElementChild;
    }
    divError.innerText = message;
    divError.className = "invalid-feedback";
    element.parentElement.append(divError); 
    // 기존 객체가 이미 같은 위치에 있다면, append하면 새로 생성되는게 아니라 이미 있으니까 그대로 있음.
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
}

/* valid 메시지 나오게 하는 함수 */
function validMessage(element, message) {
    var divValid = document.createElement("div");
    if(element.parentElement.lastElementChild.classList.contains("invalid-feedback") ||
       element.parentElement.lastElementChild.classList.contains("valid-feedback")) {
        divValid = element.parentElement.lastElementChild;
    }
    divValid.innerText = message;
    divValid.className = "valid-feedback";
    element.parentElement.append(divValid);
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
}