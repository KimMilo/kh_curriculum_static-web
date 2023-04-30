/* 
    form 요소 다루기
        - document.forms; form 배열에 담김.
        - var form = document.forms[0]; var form 에 forms의 0번째 인덱스 할당.
        - form; form 조회
        - form.username; username 선택
        - form.password; password 선택
        - form.gender; gender 선택

        - 아이디 / 패스워드 입력 및 gender 선택 후
          form.username.value; / form.password.value; / form.gender.value; 값 불러옴.

        # 체크박스
        - var form = document.forms[0]; form 선택
        - form.chkHobby; 체크박스 리스트 조회 (이 때, 체크한 것도 value 인덱스로 따로 조회해야지만 나옴.)
        - form.chkHobby[0].value; 0번째 체크박스의 값 조회
        - form.chkHobby[0].checked; 체크여부 true, false로 출력
        
        - 반복문 (for문과 if문) 활용하여 체크된 값 전부 조회하기
        
            for(let chk of form.chkHobby) {
                if(chk.checked) {
                    console.log(chk.value);
                }
            }
        - 만약 체크박스의 경우 name을 하나가 아닌 각각 설정(chkHobby1, chkHobby2, ...)하면,
          form.chkHobby1; 체크박스에 조회할 때 value도 하나기 때문에 같이 보여지게 조회됨.
        
        # 라디오 (체크박스와 달리 반복문 없어도 조회가능 - radio는 하나만 체크 가능하니까)
        - var form = document.forms[0];
        - form.rdoHobby; 라디오 list 선택 (이때에도 체크한 값이 있으면 value 나옴 하나만 선택하니까)
        - form.rdoHobby.value; 라디오 list의 체크한 값 조회 
*/

/* 유효성 검사용 함수 */
function validForm() {
    /* 
        패스워드가 동일하면 서버에 전송을 허용하고 동일하지 않으면 전송하지 못하게 한다.
        만약, 패스워드가 동일하지 않아서 서버에 전송을 하지 못하는 경우에는 
              해당 이유를 폼 화면에 출력하도록 한다.
    */
    // return false; // return false; 는 전송하지 않음. 
                     // (그 외 return 값이 없거나, return 값은 모두 전송 일반적으로 true사용)
    var form = document.forms[0];
    var pass1 = form.password.value;
    var pass2 = form.passwordCheck.value;

    if(pass1 !== pass2) {
        form.passwordCheck.value = ""; // 다시 입력할 수 있도록 value 값 공란 만들기.
        document.getElementById("passwordCheckError").innerText = "패스워드가 일치하지 않습니다. 다시 확인하세요.";
        return false;
    }
}