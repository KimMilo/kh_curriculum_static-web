/** 문제
 *      jQuery 를 활용하여 링크주소와 주소이름을 등록하면
 *      목록에 추가될 수 있도록 하세요.
 */ 
$(document).ready(function() {
  $("form > button").on("click", addBookmark); // 이벤트 등록
});

function addBookmark(event) {
  var url = $(event.target.form.url).val();
  var name = $(event.target.form.name).val();

  var aTag = $("<a></a>").attr("href", 'https://' + url).text(name);
  var liTag = $("<li></li>");
  liTag.append(aTag);
  $(".bookmark-list").append(liTag);
  $(event.target.form).children("input").val("");
}