$(document).ready(function () {
    $("ul").eq(2).on("click", function(e) { active1(e); });
    $("ul").eq(3).on("click", function(e) { active2(e); });
    $("div > a").on("click", function(e) { active3(e); });
    $("ul").eq(0).children().children().on("click", function(e) { active4(e); });
    $("tbody > tr").hover(
        function(e) { 
          $(e.target).parent().css("background-color", "orange");
          $(e.target).parent().css("text-decoration", "underline");
        },
        function(e) { 
            $(e.target).parent().removeAttr("style", "background-color"); 
        }
      ); 
});

function active1(e) {
  $("a").parent().parent("ul").eq(2).children().removeClass("active");
   $("a").parent().parent("ul").eq(3).children().removeClass("active");
   $(e.target).parent("li").addClass("active");
   $(e.target).parent("li").prevAll().removeClass("active");
   $(e.target).parent("li").nextAll().removeClass("active");
    document.getElementsByName("title")[0].innerText = e.target.innerText;   
}
function active2(e) {
  $("a").parent().parent("ul").eq(2).children().removeClass("active");
   $("a").parent().parent("ul").eq(3).children().removeClass("active");
   $(e.target).parent("li").addClass("active");
   $(e.target).parent("li").prevAll().removeClass("active");
   $(e.target).parent("li").nextAll().removeClass("active");
    document.getElementsByName("title")[0].innerText = e.target.innerText;   
}
 function active3(e) {
    $(e.target).css("color", "blue");
    $(e.target).nextAll().css("color", "white");
    $(e.target).prevAll().css("color", "white");  
 }
 function active4(e) {
    $(e.target).removeClass("text-light");
    $(e.target).css("text-decoration", "underline");
    $(e.target).parent().nextAll().children().addClass("text-light");
    $(e.target).parent().prevAll().children().addClass("text-light"); 
    $(e.target).parent().nextAll().children().removeAttr("style", "text-decoration");
    $(e.target).parent().prevAll().children().removeAttr("style", "text-decoration");
 }
function changeValue(e) {
  var langSelect = document.getElementById("id-lang");

  /* 
    .options[langSelect.selectedIndex].value; : 선택된 옵션의 인덱스번호의 value 반환
    .options[langSelect.selectedIndex].text; : 선택된 옵션의 인덱스번호의 text 반환
  */
  //var selectValue = langSelect.options[langSelect.selectedIndex].value;
  var selectText = langSelect.options[langSelect.selectedIndex].text;
  
  if(selectText === '5개') {
    $("tbody > tr").eq(4).nextAll().css("display", "none");
    $("table").css("height", "305px");
  } else {
    $("tbody > tr").removeAttr("style");
    $("table").removeAttr("sytle","height");
  }
}
