/* 
    # 정규표현식 
        - 참고 주소:     https://develop-im.tistory.com/21
                        https://hitomis.tistory.com/68
        - 사용 예시)
            
    function checkValidUserName(input) {
    var idCheck = /^[a-zA-Z0-9_-]{5,10}$/;  : 영문 대소문자, 숫자, 특수기호 '-', '_', 5 ~ 10자리
    return idCheck.test(input);
    }

    function checkValidPassword(input) {
    var passwordCheck = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[A-Za-z\d$@$!%*#?&^]{8,16}$/;
        : 영문 대문자 1개 이상, 영문 소문자 1개이상, 숫자 1개 이상, 특수문자 1개 이상, 8 ~ 16자리
    return passwordCheck.test(input);
}
*/


window.onload = function () {
    var form = document.forms[0];
    form.userid.addEventListener("input", userIdValid);
    form.password.addEventListener("input", passwordValid);
    form.passwordCheck.addEventListener("input", function(e) {passwordCheckValid(e, form.password)});
    form.userid.addEventListener("blur", userIdBlur);
    form.password.addEventListener("blur", passwordBlur);
    form.passwordCheck.addEventListener("blur", passwordCheckBlur);
    form.username.addEventListener("blur", userNameBlur);
    form.birthyear.addEventListener("blur", birthYearBlur);
    form.usergender.addEventListener("blur", userGenderBlur);
    form.phonenumber.addEventListener("blur", phoneNumberBlur);
}
function validCheck(form) {
    var userIdValid = form.userid.getAttribute("is-valid") === "true" ? true : false;
    var passwordValid = form.password.getAttribute("is-valid") === "true" ? true : false;
    var passwordCheckValid = form.passwordCheck.getAttribute("is-valid") === "true" ? true : false;
    
    if(userIdValid === true && passwordValid === true && passwordCheckValid === true) {
        return true;
    } else {
        return false;
    }
}

function checkValidUserName(input) {
    var idCheck = /^[a-zA-Z0-9_-]{5,10}$/; 
    
    return idCheck.test(input);
}
function checkValidPassword(input) {
    var passwordCheck = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&^])[A-Za-z\d$@$!%*#?&^]{8,16}$/;
    return passwordCheck.test(input);
}


function userIdValid(e) {
    var element = e.target;
    if(element.parentElement.parentElement.nextElementSibling !== null) {
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    if(element.value !== "test1" && checkValidUserName(element.value) === true) {
        let div = document.createElement("div");
        div.innerText = "멋진 아이디네요."
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "green";
        element.parentElement.parentElement.after(div);
        element.setAttribute("is-valid", true);

    } else if(element.value === "test1") {
        let div = document.createElement("div");
        div.innerText = "이미 사용중인 아이디거나 탈퇴한 아이디 입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
        element.setAttirbute("is-valid", false);
    } else if (checkValidUserName(element.value) === false) {
        let div = document.createElement("div");
        div.innerText = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용가능합니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
        element.setAttribute("is-valid", false);
    }
}
function passwordValid(e) {
    var element = e.target;
    if(element.parentElement.parentElement.nextElementSibling !== null) {
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    if(checkValidPassword(element.value) === true) {
        let div = document.createElement("div");
        div.innerText = "안전한 암호입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "green";
        element.parentElement.parentElement.after(div);
        element.setAttribute("is-valid", true);

    } else if(checkValidPassword(element.value) === false) {
        let div = document.createElement("div");
        div.innerText = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
        element.setAttirbute("is-valid", false);
    } 
}
function passwordCheckValid(e, other) {
    var element = e.target;
    if(element.parentElement.parentElement.nextElementSibling !== null) {
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    if(checkValidPassword(element.value) === true && element.value === other.value) {
        let div = document.createElement("div");
        div.innerText = "비밀번호가 일치합니다."
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "green";
        element.parentElement.parentElement.after(div);
        element.setAttribute("is-valid", true);

    } else if(element.value !== other.value) {
        let div = document.createElement("div");
        div.innerText = "비밀번호가 일치하지 않습니다.";
        div.style.color = "red";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        element.parentElement.parentElement.after(div);
        element.setAttirbute("is-valid", false);
    } 
}

function userIdBlur(e) {
    var element = e.target;
    if(element.value ==='' && element.parentElement.parentElement.nextElementSibling !== null) {
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    if(element.value === '') {
        var div = document.createElement("div");
        div.innerText = "필수 정보입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
    }
}
function passwordBlur(e) {
    var element = e.target;
    if(element.value ==='' && element.parentElement.parentElement.nextElementSibling !== null) {
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    if(element.value === '') {
        var div = document.createElement("div");
        div.innerText = "필수 정보입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
    }
}
function passwordCheckBlur(e) {
    var element = e.target;
    if(element.value ==='' && element.parentElement.parentElement.nextElementSibling !== null) {
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    if(element.value === '') {
        var div = document.createElement("div");
        div.innerText = "필수 정보입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
    }
}
function userNameBlur(e) {
    var element = e.target;
    if(element.value ==='' && element.parentElement.nextElementSibling !== null) {
        element.parentElement.nextElementSibling.remove();
    }
    if(element.value === '') {
        var div = document.createElement("div");
        div.innerText = "필수 정보입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.after(div);
    }
}
function birthYearBlur(e) {
    var element = e.target;
    if(element.parentElement.parentElement.nextElementSibling !== null){
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    var date = new Date();
    
    if(element.value === '') {
        var div = document.createElement("div");
        div.innerText = "태어난 년도 4자리를 정확하게 입력하세요.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
    } else if(element.value === "1922") {
        var div = document.createElement("div");
        div.innerText = "정말이세요?";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
    }
}
function userGenderBlur(e) {
    var element = e.target;
    if(element.parentElement.parentElement.nextElementSibling !== null){
        element.parentElement.parentElement.nextElementSibling.remove();
    }
    
    if(element.value === 'gender') {
        var div = document.createElement("div");
        div.innerText = "필수 정보입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.parentElement.after(div);
    } 
}
function phoneNumberBlur(e) {
    var element = e.target;
    if(element.parentElement.nextElementSibling !== null) {
        element.parentElement.nextElementSibling.remove();
    }
    if(element.value === '') {
        var div = document.createElement("div");
        div.innerText = "필수 정보입니다.";
        div.style.fontSize = "14px";
        div.style.marginBottom = "10px";
        div.style.color = "red";
        element.parentElement.after(div);
    }
}