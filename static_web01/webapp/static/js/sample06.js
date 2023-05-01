/* 
    element를 원하는 위치에 추가하기
        - var list = document.getElementById("list"); : list에 id=list 저장
        - var li = document.createElement("li"); : li 엘리먼트 생성
        - li; : li 조회
        - li.innerText = "목록 추가"; : li 태그에 텍스트 노드 작성
        - li; : 다시 li조회하면 목록 추가 텍스트 들어가 있음.
        - list.append(li); : list의 마지막 자식으로 해당 li 추가
        - list; : list조회하면 목록 추가 li가 추가되어있음.
        - list.prepend(li); : 첫 번째 자식으로 추가됨.

        - var baseItem = list.children[1]; : list의 자식 중 1번 인덱스 자식엘리먼트 선택
        - var li = document.createElement("li"); : li 엘리먼트 생성
        - li.innerText = "목록2"; : li 태그에 텍스트 노드 작성
        - baseItem.after(li); : baseItem 기준으로 li를 바로 다음에 추가됨.
        - baseItem.before(li); : baseItem 기준으로 li를 바로 이전에 추가됨.

        # 정리
        기준 1 : 부모기준으로 부터 자식 추가 시 append는 맨 뒤, prepend는 맨 앞
        기준 2 : 형제기준으로 부터 형제에 추가 시 after는 아래, before는 위    
        
        # tobody 에 엘리먼트 추가하기
            - var tbody = document.getElementById("table").lastElementChild; : 테이블의 마지막 자식요소 선택
            - var tr = document.createElement("tr"); : tr 엘리먼트 생성
            - var td1 = document.createElement("td"); : td1 엘리먼트 생성
            - td1.innerText = 1; : td1에 innerText 작성
            - tr.append(td1); : tr 에 td1 추가(append)
            - var td2 = document.createElement("td"); : td2 엘리먼트 생성
            - td2.innerText = "제목 입니다."; : td2에 innerText 작성
            - tr.append(td2); : tr 에 맨 뒤에 td2 엘리먼트 추가
            - var td3 = document.createElement("td"); : td3 엘리먼트 생성
            - td3.innerText = "user1";
            - tr.append(td3); : tr 에 맨 뒤에 td3 엘리먼트 추가
            - var td4 = document.createElement("td"); : td4 엘리먼트 생성
            - td4.innerText = "2022-12-23"; 
            - tr.append(td4); : tr 에 맨 뒤에 td4 엘리먼트 추가
            - var td5 = document.createElement("td"); : td 5 엘리먼트 생성
            - td5.innerText = 0;
            - tr.append(td5); : tr 에 맨 뒤에 td5 엘리먼트 추가

            마지막으로 tbody.append(tr); 해서 tbody에 추가하면 끝.
*/


/**
 * document.createElement("tagName"); : 엘리먼트 객체 생성
 * 
 * 부모 엘리먼트를 기준으로 자식 엘리먼트를 추가
 *      부모.prepend(추가할엘리먼트) : 첫 번째 자식으로 추가
 *      부모.append(추가할엘리먼트) : 마지막 자식으로 추가
 * 
 * 형제 엘리먼트를 기준으로 같은 형제 엘리먼트로 추가
 *      형제.before(추가할엘리먼트) : 기준이 되는 형제 앞으로 추가
 *      형제.after(추가할엘리먼트) : 기준이 되는 형제 뒤로 추가
 */

function addItem(form) {
    /* 목록을 추가하는 함수 */
    
    /* # onclick="addItem(this.form);" form DOM 이용 및 select 기능으로 위치 설정 추가 */
    var item = form.item.value;
    var li = document.createElement("li");
    li.innerText = item;
    var list = document.getElementById("list");

    if(form.loc.value === 'first') {
        list.prepend(li);
    }else if(form.loc.value === 'last') {
        list.append(li);
    }
     
    form.item.value = "";
}

function addRow(form) {
    /* 
        테이블에 행을 추가하는 함수로 한 행에는 5열이 들어간다. 
        사용자 입력으로 제목과 작성자는 받을 수 있으며,
        번호는 (전체 행수 + 1)이 설정되게 하고(tbody의 행수만.)
        작성일은 new Date() 객체를 사용하여 현재 날짜를 구하여 쓰며,
        (월 추출 : .getMonth(); , 년도(4자리) 추출 : .getFullYear();, 날짜 추출 : .getDate();)
        조회수는 기본 0으로 설정한다.
    */
    var tbody = document.getElementById("table").lastElementChild;

    var now = new Date();

    var tr = createTableRow(5);
    tr.children[0].innerText = tbody.children.length + 1;
    tr.children[1].innerText = setAndClear(form.title);
    tr.children[2].innerText = setAndClear(form.writer);
    tr.children[3].innerText = [now.getFullYear(), (now.getMonth() + 1), now.getDate()].join("-");
    tr.children[4].innerText = 0;
    tbody.append(tr);

    
}
function setAndClear(inputElement) {
    var value = inputElement.value;
    inputElement.value = "";
    return value;
}

function createTableRow(columnCount) {
    var row = document.createElement("tr");
    for(let idx = 0; idx < columnCount; idx++) {
        let column = document.createElement("td");
        row.append(column);
    }
    return row;
}

/**
     * 동일한 패스워드를 사용하는지 검사 후 동일하지 않은 값을 입력한 경우
     * 패스워드 확인 입력 양식 옆에 "다시 입력하시오." 라는 메시지가 나오도록
     * 합니다. username 에서는 6자리 이상의 아이디가 아닌 경우 패스워드와 동일하게 
     * 아이디 입력 양식 옆에 "6자리 이상 입력하시오." 라는 메시지가 나오도록 합니다.
     */ 

function validCheck(form) {
    var isValid = true;
    if(form.username.nextElementSibling !== null) {
        form.username.nextElementSibling.remove();
    }
    if(form.username.value.length < 6) {
        spanErrorMessage(form.username, "6자리 이상 입력하시오.");
        form.username.value = "";
        isValid = false;
    }
    if(form.passwordCheck.nextElementSibling !== null) {
        form.passwordCheck.nextElementSibling.remove();
    }
    if(form.password.value !== form.passwordCheck.value) {
        spanErrorMessage(form.passwordCheck, "다시 입력하시오.");
        form.passwordCheck.value = "";
        isValid = false;
    }
    return isValid;
}

function spanErrorMessage(element, message) {
    let span = document.createElement("span");
    span.innerText = message;
    element.after(span);  
    return span;  
}

