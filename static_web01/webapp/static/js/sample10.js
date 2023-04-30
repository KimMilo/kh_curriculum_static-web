/*
    # 자바스크립트 js 기본 onload 함수 실행법
    window.onload = function() {
        "페이지 로드 후 실행할 로직 작성";
    }

    <위의 js 사용법을 jQuery를 활용하면>

    # 기본적인 사용법
    $(document).ready(function() {
        "페이지 로드 후 실행할 로직 작성";
    });

    # 조금 더 단축한 사용법
    $(function() {"페이지 로드 후 실행할 로직 작성";});

    --------------------------------------------------------------------
    
    # 기본적인 사용 형식
        - $(선택자).메서드명(속성명, 속성값);
        - $(선택자).메서드명(익명함수 또는 함수명);
        - 때에 따라, $(선택자).메서드명(); 또는 $(선택자).메서드명(값); 으로도 사용

    # 탐색관련 사용(run10.html table 활용)
        - $("th");  : th 태그 전부 선택 (배열로 선택됨.)
        - $("th")[0];   : 인덱스 0번 th 엘리먼트 접근
        - $("th")[1];   : 인덱스 1번 th 엘리먼트 접근

        ** 기존 배열의 인덱스 번호로 접근 하는 것보다 jQuery 사용 시에는 .first(), .last() .eq(인덱스번호) 
           등 활용이 더 좋음
           -> 그 이유는 인덱스로 접근할 때에는 엘리먼트 자체를 반환하여 이어서(.찍고) 
              jQuery를 사용할 수 없으며, 
              first, last, eq(인덱스번호) 등 사용 시에는 jQuery 객체로 반환하기 때문에 
              이어서(.찍고) jQuery 를 사용할 수 있기 때문. **
        - $("th").first(); : 첫 번째 th 접근
        - $("th").last();   : 마지막 th 접근 
        - $("th").eq(0);    : 인덱스 0번 th 접근
        - $("th").eq(1);    : 인덱스 1번 th 접근
        - $("th").eq(2);    : 인덱스 2번 th 접근
        
        - $("td,th");  : td, th 전부 선택
        - $("td,th").not("td");    : td, th 중 td가 아닌 th 전부 선택
        - $("td,th").not("th");    : td, th 중 th가 아닌 td 전부 선택
        - $("td").parent(); : td 의 부모 태그인 tr 전부 선택 
                              (parentElement는 tr 하나를 접근 하지만
                               jQuery .parent()는 해당 부모의 태그 전부를 접근함.)

        ** .parents() 와 .parentsUntil()의 차이는 () 값에 따라 차이가 일어남.
           .parents("태그명")은 부모 중 태그명에 접근하는것이고,
           .parentsUntil("태그명")은 부모 태그명 전까지의 부모 태그에 접근
        
        - $("td").parents(); : td 의 상위 부모 전부 선택(tr, tfoot, tr, tr, tbody, table, body, html)
        - $("td").parentsUntil();   : td의 상위 부모 전부 선택(tr, tfoot, tr, tr, tbody, table, body, html)
        - $("td").parents("table"); : td의 상위 부모들 중 table 선택
        - $("td").parentsUntil("table");   : td의 상위 부모인 table의 전 td 부모들 전부 선택(tr, tfoot, tr, tr, tbody)

        - $("table").children();    : table의 자식 태그를 전부 선택(thead, tbody, tfoot)
        - $("table").find("td");    : table에서 td 태그를 전부 선택



        # 이렇게 find("td")찾고 eq로 넘어가면 td가 가장 먼저 td에서 찾게 됨.
        - $("table").find("td").eq(3);  : table의 td 중 인덱스 3번 td 선택
        - $("table").find("td").eq(3).next();   : table의 td 중 인덱스 3번 td의 바로 다음 형제 td 선택
        - $("table").find("td").eq(3).prev();   : table의 td 중 인덱스 3번 td의 바로 이전 형제 td 선택

          참고로 $("table").find("td").eq(3).next()[0]; 하면 table의 td 중 인덱스 3번 td의 바로 다음 형제 td 의 엘리먼트 선택 가능.

        - $("table").find("td").eq(3).nextAll();    : table의 td 중 인덱스 3번 td의 다음 형제들인 td 전부선택                      
        - $("table").find("td").eq(3).prevAll();    : table의 td 중 인덱스 3번 td의 이전 형제들인 td 전부선택
        - $("table").find("td").eq(3).nextUntil("td");  : table의 td 중 인덱스 3번 td에서 다음 형제들 중 전달받은 형제 td 바로 이전까지의 td들을 선택
        - $("table").find("td").eq(3).prevUntil("td");   : table의 td 중 인덱스 3번 td에서 그 이전 형제들 중 전달받은 형제 td 바로 이전까지의 td들을 선택
        - $("table").find("thead").nextAll();   : table의 thead의 다음 형제들 전부 선택(tbody, tfoot)
        - $("table").find("thead").nextUntil("tfoot");  : table의 thead의 다음 형제들인 tfoot 전까지의 형제 선택(tbody);

        # .is(태그명) : 태그명의 존재여부를 boolean 타입으로 반환.
        - $("table").find("thead").nextAll().is("tfoot"); : 테이블의 thead의 다음 형제들에서 tfoot이 있는지? true 반환
        - $("table").find("thead").nextAll().is("h1");  : 테이블의 thead의 다음 형제들에서 h1이 있는지? false 반환

        # each 클래스
          $(선택자).each(함수(인덱스번호, 요소) { "적용할 실행로직"; });
          : 반복문처럼 사용할 수 있으며 선택자의 요소들을 반복하면서 실행로직을 수행

        참고로, index, element는 매개변수 이름으로 어떤명칭 사용해도 자유.

        - $("td").each(function(index, element) {
            console.log(index, element);
        });

        : td의 index번호와 element들을 반복해서 console에 출력

        - $("td").each(function(i, e) {
            e.style.color = "red";
          });
       
        : td의 모든 요소들에 글자 색상을 red로 스타일 적용

        # addClass 클래스
          $(선택자).addClass(클래스명);
          : 선택자에 클래스명을 추가

          $(선택자).addClass(함수(인덱스번호) { 실행로직; });
          : 선택자에 클래스명을 함수 로직으로 추가

        - $("td").addClass("class-name");
        : td 전부에 class-name 클래스 추가

        - $("td").addClass(function(index){
            if(index % 5 === 0) {
                return "class-name";
            }
         });
         : td 전부 중 index번호가 5의 배수인 td에 class-name 클래스 추가

         # removeClass 클래스
         $(선택자).removeClass(클래스명);
         : 선택자에서 해당 클래스명에 해당하는 클래스 제거
         $(선택자).removeClass(함수(인덱스번호) { 실행로직; })
         : 선택자에서 함수로직으로 클래스 제거

         - $("td").removeClass("class-name");
         : td에 class-name 클래스를 제거

         - $("td").removeClass(function(index){
            if(index % 5 === 0) {
                return "class-name";
            }
         });
         : td에서 인덱스번호가 5의 배수인 td에만 class-name 클래스 제거

         # toggleClass 클래스
          $(선택자).toggleClass(클래스명);
          $(선택자).toggleClass(함수(인덱스번호) { 실행로직; });
         : 있으면 제거 없으면 추가

         - $("td").toggleClass("class-name");
         : td 에서 class-name 클래스가 있으면 제거, 없으면 추가

         - $("td").toggleClass(function(index){
            if(index % 5 === 0) {
                return "class-name";
            }
         });
         : td에서 인덱스번호가 5의 배수인 td만 class-name 클래스가 있으면 제거, 없으면 추가


         # 클래스 외의 다른 속성 부여 (attr 활용)
           $(선택자).attr(속성명, 속성값); : 선택자에 속성명과 속성값 적용
           $(선택자).atrr(속성명);  : 선택자의 해당 속성명의 값 반환 (함수 적용 시 첫 번째 속성값만 나오는 듯-else는 안나옴)
           $(선택자).attr(속성명, 함수(인덱스번호) { 실행로직; }); : 선택자에 속성명 함수 실행로직으로 적용

         - $("td").attr("style", "color: red"); : td에 글자색상 red 적용
         - $("td").attr("style");   : 'color:red' 반환
         - $("td").attr("style", function(index) {
            if(index % 5 === 0) {
                return "background-color: gray; color: white;";
            } else {
                return "color: red;";
            }
          });
          : td에 인덱스번호가 5의 배수이면 배경 회색, 글자 흰색 아니면 글자 레드 적용

        $(선택자).removeAtrr(속성명);  : 선택자의 해당 속성명 제거

        - $("td").removeAttr("style");  : td의 style 속성명을 제거

        # jQuery 에서 style 적용방법
        $(선택자).css(속성명, 속성값) : 선택자에 스타일 속성명, 속성값 적용
        $(선택자).css(속성명, 함수(인덱스번호) { 실행로직; }); : 선택자에 스타일 속성 함수로직으로 적용

        - $("td").css("color", "red"); : td에 스타일 속성인 글자색상 레드 적용
        - $("td").css("background-color", "gray");  : td에 스타일 속성인 배경색 그레이 적용
        - $("td").css("background-color", function(index) {
            if(index % 5 === 0) {
                return "#F0F0F0";
            } else {
                return "gray";
            }
         });
         : td에 스타일 속성인 배경색을 인덱스번호가 5의 배수면 #F0F0F0 적용 아니면 gray 적용

         - .css를 사용할 경우 해당 td 태그에 style 태그가 생성되기 때문에
           $("td").removeAttr("style");  : td의 style 전부 제거가 가능함.

         - $("td").eq(0).css("background-color"); : td의 인덱스 0번 td의 배경색 속성값을 반환
         - $("td").eq(0).css("color");  : td의 인덱스 0번 td의 글자색 속성값을 반환

         # html 관련
         - $("th").html();  : th 중 가장 앞에 하나인 '번호' 반환(태그포함)
         - $("tr").html();  : tr 중 가장 앞에 하나 하나인 th들을 반환(태그포함)
         - $("th").text();  : th 의 모든 text를 반환(텍스트만)
         - $("tr").text();  : tr의 모든 text를 반환(텍스트만)
         - $("th").html("<a href='#'>1234</a>"); : th에 a태그 반영
         - $("th").text("<a href='#'>1234</a>"); : th에 태그가 아닌 단순 텍스트로 반영

         부분적으로 설정
         - $("th").html(function(index) {
            if(index % 5 === 1) {
                return "<a href='#'>제목</a>";
            }
         });
         : th 태그에서 인덱스번호를 5를 나누었을 때 1이면 a태그 value 제목 반영

         - $("th").html(function(index, value) {
                return "<a href='#'>" + value + "</a>";
         });
         : th 태그에 value(값)을 그대로 두고 a태그만 양쪽에 넣기

         - $("th").text(function(index, value) {
            if(index === 0){
                return "no." + value;
            }
         });
         : th 태그 번호는 그대로 앞에 no. 텍스트 추가하기

         - $("input[type=text]").val(); : 사용자 입력양식에 입력된 값 반환
         - $("input[type=text]").val("값 설정"); :사용자 입력양식에 값을 설정

         정리하면,
            - .html() 은 innerHTML
            - .text() 는 innerText
            - .val() 은 input의 value라고 생각하면 됨.

        
            # doument.createElement("태그명"); 와 생성된 태그를 jQuery로 넣는 방법
            - $("<input type='text'>"); : 텍스트타입 input 태그 생성
            - $("<div></div>"); : </div>는 생략은 가능하며, div 태그 생성
            - $("<div>").text("hello"); : div태그에 hello 텍스트 추가하여 생성
            - $("<div>").text("hello")[0]; : 상기 생성된 div 태그 엘리먼트 조회
            - $("<div>").text("hello").css("color", "red"); div태그에 hello 텍스트와 글자색 레드 스타일 속성 적용하여 생성
            - $("<div>").text("hello").css("color", "red")[0]; : 상기 생성된 div 태그 엘리먼트 조회
            - $("<input>")
                    .attr("type", "password")
                    .attr("placeholder", "비밀번호");
              : input 에 패스워드 타입과 placeholder 적용하여 생성
            - $("<input>")
                    .attr("type", "password")
                    .attr("placeholder", "비밀번호")[0];
              : 상기 input 태그 엘리먼트 조회

            - var item = $("<input>").attr("type", "password").attr("placeholder", "비밀번호")[0];
              $("div").append(item); : div에 마지막 자식요소로 item 추가
              $("div").prepend(item); : div에 첫번째 자식요소로 item 추가
              $("div").after(item); : div의 다음 형제요소로 item 추가
              $("div").before(item); : div의 이전 형제요소로 item 추가
              
            - $("<input>")
                    .attr("type", "password")
                    .attr("placeholder", "비밀번호")
                    .appendTo("div");
              : div에 마지막 자식요소로 input 추가
            - $("<input>")
                    .attr("type", "password")
                    .attr("placeholder", "비밀번호")
                    .prependTo("div");
              : div에 첫번째 자식요소로 input 추가
            - $("<input>")
                    .attr("type", "password")
                    .attr("placeholder", "비밀번호")
                    .insertAfter("div");
              : div의 다음 형제요소로 input 추가

            - $("<input>")
                    .attr("type", "password")
                    .attr("placeholder", "비밀번호")
                    .insertBefore("div");
              : div의 이전 형제요소로 input 추가

            - $("input[type=password]");  : 타입 password인 input 전부 선택
            - $("input[type=password]").remove();  : 타입 password인 input 전부 제거
            - $("input").remove("[type=password]");  : 타입 password인 input 전부 제거
            - $("input").eq(0).remove();  : 인덱스 0번 input 제거
*/  

/** 문제
 *      jQuery 를 활용하여 링크주소와 주소이름을 등록하면
 *      목록에 추가될 수 있도록 하세요.
 */
$(document).ready(function() {
    console.log($);
    /* jQuery 로 Event 활용하기 $("선택자").on("event명", 함수명); */
    //form = document.forms[0];
    //form.btn.addEventListener("click", addBookmark);
    
    /* ----------------- 이렇게 안하고 아래처럼 ---------------- */
    
    /* # 일반 함수 활용 */
    //$("form > button").on("click", addBookmark);

    /* # 익명함수 활용 */
    //$("form > button").on("click", function(e) { addBookmark(e); });

    /* # event 제거
     - .off("이벤트종류"); : 해당 이벤트 종류 모두 제거
     - .off("이벤트종류", "함수"); : 해당 이벤트 해당 함수 제거 */
    //$("form > button").off("click");

    /* # event 한 번만 동작 */
    //$("form > button").one("click", function(e) { addBookmark(e) });
    
    /* # event .hover : mouseenter와 mouseleave가 결합된 형태 .hover(mouseenter, mouseleave);*/
    /* button 에 hover event 적용하기
    $("form > button").hover(
      function(e) { //mouseenter부분
        $(e.target).css("border-color", "red");
      },
      function(e) { //mouseleave부분
        //$(e.target).removeAttr("style"); 
        //mouseleave 하면 style제거인데 mouseenter가 마우스 올릴 때만 동작해서 이거 대신 아래거로 바꿈.
        $(e.target).css("border-color", "black");
      }
    ); 
    */
    /* a 태그에 hover event 적용하기
    $("ul a").hover(
      function(e) { //mouseenter부분
        var href = $(e.target).attr("href");
        var name = $(e.target).text();
        $("form [name=url]").val(href);
        $("form [name=name]").val(name);
      },
      function(e) { //mouseleave부분
        $("form [name=url]").val("");
        $("form [name=name]").val("");
      }
    ); 
    */

    /* # jQuery event .toggle 더 이상 지원되지 않음 -> 대신 on 속성의 false와 true를 활용 */
    /* 버튼에 click 동작하면 red 테두리, 다시 동작하면 style 제거 만들기 */
    $("form > button").on("click",
      function(e) { 
        if($(e.target).attr("on") === "false"){
            $(e.target).css("border-color", "red");
            $(e.target).attr("on", "true");
        } else {
            $(e.target).removeAttr("style");
            $(e.target).attr("on", "false");
        }
      }
    );
}); 

/* # jQuery 사용 */
/*
function addBookmark() {
    var url = $("form").children().eq(0).val();
    var name = $("form").children().eq(1).val();
    var aTag = $("<a></a>").attr("href", 'https://' + url).text(name);
    var liTag = $("<li></li>");
    liTag.append(aTag);
    $(".bookmark-list").append(liTag);
    $("form").children("input").val("");
}*/

/* # 자바스크립트 DOM 객체 사용하면서 jQuery 사용 */
/*
function addBookmark(form) {
      // 일반 DOM 객체를 jQuery 객체로 변환하려면 $() 안에 넣으면됨.
      // 즉, onclick="addBookmark(this.form)" 후 함수 매개변수에 form을 받고
      // form를 그대로 사용하면서 jQuery 를 사용하기 위해 $()안에 넣어주면 같이 사용 가능함

    var url = $(form.url).val();
    var name = $(form.name).val();

    var aTag = $("<a></a>").attr("href", 'https://' + url).text(name);
    var liTag = $("<li></li>");
    liTag.append(aTag);
    $(".bookmark-list").append(liTag);
    $(form).children("input").val("");
}
*/

/* # jQuery 로 Event 활용 시 함수 */
function addBookmark(event) {
  var url = $(event.target.form.url).val();
  var name = $(event.target.form.name).val();

  var aTag = $("<a></a>").attr("href", 'https://' + url).text(name);
  var liTag = $("<li></li>");
  liTag.append(aTag);
  $(".bookmark-list").append(liTag);
  $(event.target.form).children("input").val("");
}