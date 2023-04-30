$(document).ready(function() {
    $("ul").eq(2).on("click", function(e) { active1(e); });
    $("ul").eq(0).children().children().on("click", function(e) { active2(e); });
    $("[name='username']").on("change", disabled);
});

function active1(e) {
    $("a").parent().parent("ul").eq(2).children().removeClass("active");
    $(e.target).parent("li").addClass("active");
    $(e.target).parent("li").prevAll().removeClass("active");
    $(e.target).parent("li").nextAll().removeClass("active"); 
    $("[name='btnSave1']").on("click", abled());
}
function active2(e) {
    $(e.target).removeClass("text-light");
    $(e.target).css("text-decoration", "underline");
    $(e.target).parent().nextAll().children().addClass("text-light");
    $(e.target).parent().prevAll().children().addClass("text-light"); 
    $(e.target).parent().nextAll().children().removeAttr("style", "text-decoration");
    $(e.target).parent().prevAll().children().removeAttr("style", "text-decoration");
}

function disabled() {
    if($("[name='username']").val() !== "") {
        $("[name='btnSave']").removeAttr("disabled");
    }else if($("[name='username']").val() === ""){
        $("[name='btnSave']").attr("disabled");
    }
}


/* 이벤트 이어서 풀고 이슈에 올리자 */