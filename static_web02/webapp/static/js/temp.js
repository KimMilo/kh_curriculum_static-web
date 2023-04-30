$(document).ready(function() {
    $(".list-group").eq(0).find(".list-group-item").on("click", sideMenuActive);
    $(".pagination").find(".page-item").on("click", pagingActive);
}); 

function sideMenuActive(event) {
    $(event.target).siblings(".active").removeClass("active"); /*.siblings 모든 형제들 */
    $(event.target).addClass("active");
    $("section h4").text($(event.target).text());
}

function pagingActive(event) {
    /* currentTarget 과 target의 차이 
       target 를 해당 엘리먼트
       currentTarget은 이벤트가 동작(이벤트를 등록한)하는 엘리먼트.
       
       아래 예시로 설명하면, 이벤트 등록을 .page-item 에 했기 때문에
       target은 a태그 엘리먼트가 잡힐거고, currentTarget은 li태그 엘리먼트가 잡히게됨.
       */
    if(event.currentTarget == $(event.currentTarget).parent().children()[0]) {
        let active = $(event.currentTarget).siblings(".active");
        if(event.currentTarget != active.prev()[0]) {
            active.prev().addClass("active");
            active.removeClass("active");
        }
    } else if(event.currentTarget == $(event.currentTarget).parent().children().last()[0]) {
        let active = $(event.currentTarget).siblings(".active");
        if(event.currentTarget != active.next()[0]) {
            active.next().addClass("active");
            active.removeClass("active");
        }
    } else {
        $(event.currentTarget).siblings(".active").removeClass("active");
        $(event.currentTarget).addClass("active");
    }
}