/*  DOM(Document Object Model) 종류 
    id 속성의 값을 사용하여 엘리먼트 선택 -> document.getElementById
    name 속성의 값을 사용하여 엘리먼트 선택 -> document.getElementsByName
    태그명을 사용하여 엘리먼트 선택 -> document.getElementsByTagName
    class 속성의 값을 사용하여 엘리먼트 선택 -> document.getElementsByClassName

    CSS의 선택자를 활용하여 1개의 엘리먼트를 선택 -> document.querySelector
    CSS의 선택자를 활용하여 여러개의 엘리먼트를 선택 -> document.querySelectorAll
*/

/* console 창에 
    - var ulList = document.getElementsByTagName("ul"); 하면 ulList에 ul 배열이 담김.
    - ulList[0]; 0번째 인덱스 선택
    - ulList; 하면 몇 개의 ul이 있는지 확인 가능
    - foreach 활용 해서 console에 전부 출력하기
        for(ul of ulList){
            console.log(ul);
        }

    - var liList = document.getElementsByTagName("li");
    - liList[0]; 0번째 인덱스 선택
    - liList; 하면 몇 개의 li 있는지 확인 가능
    - foreach 활용 해서 console에 전부 출력하기
      for(li of liList){
        console.log(li);
      }

    - document.getElementsByClassName("top-menu"); 하면 class top-menu 선택
    - document.querySelector(".top-menu"); 하면 class top-menu 첫 번째 하나 선택
    - document.querySelector(".menu-item"); 하면 class .menu-item 첫 번째 하나 선택 
    - document.querySelectorAll(".menu-item"); 하면 class menu-item 전부 선택
    - document.querySelectorAll(".side-menu .menu-item"); 하면 side-menu 클래스의 .menu-item 클래스 전부 선택
    
    - document.getElementsByClassName("side-menu")[0].getElementsByClassName("menu-item"); 하면 side-menu 클래스의 .menu-item 클래스 전부 선택 
        : var ul 에 var ul = document.getElementsByClassName("side-menu")[0]; 잡고 
          그 다음에 ul.getElementsByClassName("menu-item"); 활용 하면 됨.
*/ 

function changeUpperLower() {
  //var listItems = document.getElementsByClassName("menu-item");
  var listItems = document.querySelectorAll(".menu-item");
  for(let item of listItems) {
      if(item.innerText === item.innerText.toUpperCase()){
        item.innerText = item.innerText.toLowerCase();
      }else {
        item.innerText = item.innerText.toUpperCase();
      }
  }
}