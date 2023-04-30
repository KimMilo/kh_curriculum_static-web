/*
    document.getElementsByTagName 등과 같은 메서드를 사용하여 특정 하나의 엘리먼트를 선택한 이 후
    부모 관계, 형제 관계에 해당하는 엘리먼트에 접근하기 위한 방법.
    
    # 자식에게 접근
        - .getElementsByTagName 과 같은 메서드를 다시 사용하여 부모 태그에 접근
        - 부모태그.firstElementChild / 부모태그.lastElementChild 속성을 사용하여 접근

    # 부모에게 접근
        - 자식태그.parentElement 속성을 사용하여 접근

    # 형제 관계 접근
        - 기준형제태그.previousElementSibling / 기준형제태그.nextElementSibling 속성을 사용하여 접근
*/


/*      ********* 사용예시 *********

    - 테이블 접근 : var element = document.getElementsByTagName("table")[0];
    - 테이블 조회 : element;
    - thead 접근 : var thead = element.getElementsByTagName("thead")[0];
    - thead 조회 : thead;
    - th 전부 접근 : var thTagList = thead.getElementsByTagName("th");
    - th 전부 조회 : thTagList;
    - th(인덱스 1번 th) 로부터 tr 접근(하위노드에서 상위노드 접근) : 
            * 인덱스 1번 th에 접근 : var th = thTagList[1];
            * 인덱스 1번 th 조회 : th;
            * 인덱스 1번 th의 상위노드(부모) 접근 : th.parentElement;
            * 인덱스 1번 th의 상위노드의 상위노드 접근 : th.parentElement.parentElement;
    - th 로부터 동일 위치(형제간) 접근 : 
            * 인덱스 1번 th에 접근 : var th = thTagList[1];
            * 인덱스 1번 th 조회 : th;
            * 인덱스 1번 th 의 이전 형제 element에 접근 : th.previousElementSibling;
            * 인덱스 1번 th 의 다음 형제 element에 접근 : th.nextElementSibling;
    - 인덱스 1번 th의 상위노드인 tr 접근 : var tr = th.parentElement;
            * tr의 첫 번째 자식 접근 : tr.firstElementChild;
            * tr의 마지막 자식 접근 : tr.lastElementChild;  
*/

function counting(element) { // element html의 this가 전달 됨.

    /* 조회수에 해당하는 값을 tr 태그 영역을 클릭할 때마다 +1 하도록 합니다. */
    var cnt = Number(element.lastElementChild.innerText); /* parseInt()도 가능 */
    element.lastElementChild.innerText = cnt + 1;
}