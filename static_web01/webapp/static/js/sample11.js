/**
 * 문제 
 *      목록 up를 클릭하면 위로 down를 클릭하면 아래로 내려가게 만들기
 */

$(document).ready(function() {
    $("span").each(function(index, element) {
        if($(element).text() === "up") {
            $(element).on("click", up);
        } else if($(element).text() === "down") {
            $(element).on("click", down);
        }
    })
});
function up(event) {
    $(event.target).parent().prev().before($(event.target).parent());
}
function down(event) {
    $(event.target).parent().next().after($(event.target).parent());
}