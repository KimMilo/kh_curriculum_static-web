$(document).ready(function() {
    $("button").each(function(index, element) {
        let e = $(element);
        if(e.text() === "저장") {
            $(element.form).find("input,select").on("change", function(e) { saveButtonEnable(e, element); });
        }
    });
});

function saveButtonEnable(event, target) {
    /* event는 saveButtonEnable이고 $(e.target)은 해당 이벤트의 타겟인 select, input 임 */
    let t = $(target);
    t.attr("disabled", false);
    t.removeClass("btn-outline-secondary");
    t.addClass("btn-outline-success");
}

function createAddressForm(element) {
    let e = $(element);
    let tagText = '<div id="addressForm" class="card border-0 mb-3"><div class="mb-2 text-end dropdown custom-dropdown"><a class="dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown"><span class="material-symbols-outlined">more_vert</span></a><ul class="dropdown-menu"><li><a class="dropdown-item text-danger fw-bold" role="button" onclick="removeAddressForm(this, \'#addressForm\');">삭제</a></li></ul></div><div class="row mb-2"><label class="col-2 col-form-label">주소 분류</label><div class="col-4"><select name="addressType" class="form-select"><option value="home" selected>집</option><option value="company">회사</option><option value="other">기타</option></select></div><label class="col-2 col-form-label">우편번호</label><div class="col-4"><input type="text" class="form-control" name="birthday" value=""></div></div><div class="row mb-2"><label class="col-2 col-form-label">주소</label><div class="col-10"><input type="text" class="form-control" name="address" value=""></div></div></div>'
    /* jQuery 에서는 태그들 문자열로 넣어주면 html로 작업해서 태그들 만들어줌 
       이 때, '' "" 겹치지 않게 사용해야 에러안나고 때에 따라 \ escape해서 활용할 것. */

    let addressForm = $(tagText);
    addressForm.find("input, select").on("change", function(e) { saveButtonEnable(e, element.nextElementSibling); });
    e.parent().before(addressForm);
}

function removeAddressForm(element, id) {
    let e = $(element);
    e.parents(id).remove();
}