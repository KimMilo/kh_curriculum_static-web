/** 문제 
 * 실시간 검사
 *      아이디는 6 ~ 12 자 사이의 값을 입력하였는지 실시간으로 검사하여 문제가 있는 경우
 *      붉은색 테두리와 에러메시지로 사용자에게 즉시 알릴 수 있도록 하고, 정상 입력인 경우
 *      초록색 테두리와 정상 메시지로 사용자에게 즉시 알릴 수 있도록 한다.
 * 
 *      패스워드는 4 ~ 12 자 사이의 값을 입력하였는지 실시간으로 검사하여 위의 아이디와 동일한
 *      처리를 하도록 한다.
 * 
 *      패스워드 확인은 기존에 입력한 패스워드와 동일한 값인지를 실시간으로 검사하여 위의 
 *      아이디와 동일한 처리를 하도록 한다.
 */

function userNameVaild(e) {
    var element = e.target;
    if(element.nextElementSibling !== null) {
        element.nextSibling.remove();
    }
    if(element.value.length >= 6 && element.value.length <= 12) {
        let div = document.createElement("div");
        div.innerText = "올바른 아이디 값입니다.";
        div.style.color = "green";
        element.after(div);
        element.style.borderColor = "green";
        element.setAttribute("is-valid", true);
    }else {
        let div = document.createElement("div");
        div.innerText = "아이디는 6 ~ 12 자를 입력해야 합니다.";
        div.style.color = "red";
        element.after(div);
        element.style.borderColor = "red";
        element.setAttribute("is-valid", false);
    }
}
function passwordValid(e) {
    var element = e.target;
    if(element.nextElementSibling !== null) {
        element.nextElementSibling.remove();
    }
    if(element.value.length >= 4 && element.value.length <= 12) {
        let div = document.createElement("div");
        div.innerText = "올바른 패스워드 값 입니다.";
        div.style.color = "green";
        element.after(div);
        element.style.borderColor = "green";
        element.setAttribute("is-valid", true);
    } else {
        let div = document.createElement("div");
        div.innerText = "패스워드는 4 ~ 12 자를 입력해야 합니다.";
        div.style.color = "red";
        element.after(div);
        element.style.borderColor = "red";
        element.setAttribute("is-valid", false);
    }
}
function passwordCheckValid(e, other) {
    var element = e.target;
    if(element.nextElementSibling !== null) {
        element.nextElementSibling.remove();
    }
    if(element.value !== other.value) {
        let div = document.createElement("div");
        div.innerText = "패스워드가 일치하지 않습니다.";
        div.style.color = "red";
        element.after(div);
        element.style.borderColor = "red";
        element.setAttribute("is-valid", false);
    } else {
        let div = document.createElement("div");
        div.innerText = "패스워드가 일치합니다.";
        div.style.color = "green";
        element.after(div);
        element.style.borderColor = "green";
        element.setAttribute("is-valid", true);
    }
}

/* 오류가 있으면 submit 안되게 설정한 함수 */
function validCheck(form) {
    var userNameValid = form.username.getAttribute("is-valid") === "true" ? true : false;
    var passwordValid = form.password.getAttribute("is-valid") === "true" ? true : false;;
    var passwordCheckValid = form.passwordCheck.getAttribute("is-valid") === "true" ? true : false;

    if(userNameValid && passwordValid && passwordCheckValid) {
        alert("true : " + userNameValid + "/" + passwordValid + "/" + passwordCheckValid);
        return true;
    } else {
        alert("false : " + userNameValid + "/" + passwordValid + "/" + passwordCheckValid);
        return false;
    }
}

window.onload = function () {
    var form = document.forms[0];
    form.username.addEventListener("input", userNameVaild);
    form.password.addEventListener("input", passwordValid);
    form.passwordCheck.addEventListener("input", function(e){ passwordCheckValid(e, form.password) });

}
