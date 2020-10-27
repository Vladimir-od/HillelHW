"use strcit";
function init() {
    if (localStorage.getItem("comments") == null) {
        $(".comments__none").show();
    } else {
        $(".comments__list").html(localStorage.getItem("comments"));
        $(".comments__none").hide();
    }
};
init();

function saveComments() {
    const content = $(".comments__list").html();
    localStorage.setItem("comments", content);
}
function addComment() {
    let name = $("input").val().trim(),
        text = $("textarea").val().trim(),
        date = moment().format('MMMM Do YYYY, h:mm:ss a');
    if (validateForm()) {

        $(".comments__list").append(`
            <div class="comments__item">
           
            <div class="comments__author">${name}</div>
            <div class="comments__text">${text}</div>
            <div class="comments__date">${date}
            <button class="comments__delete">Delete</button>
            </div>
           
        </div>
        `
        );
        $(".comments__none").hide();

        saveComments();
    } name = $("input").val("");
    text = $("textarea").val("");
}
function deleteComment(item) {
    item.remove();
    const items = $(".comments__item");
    saveComments();
    if (items.length == 0) {
        $(".comments__none").show();
        localStorage.removeItem("comments");
    }
}

$(".comments__add").on("click", addComment);

$("body").on("click", ".comments__delete", function () {
    const item = $(this).parents(".comments__item");
    deleteComment(item);
});


function validateForm() {
    const name = $("input").val().trim(),
        text = $("textarea").val().trim();
    if (name == null || name == "") {
        alert("Must type Name!");
        return false;
    }
    if (name.length < 3 || name.length > 50) {
        alert("Length of Name must be >3 and <50");
        return false;
    }
    if (text == null || text == "") {
        alert("Must type message");
        return false;
    }
    if (text.length < 2 || text.length > 300) {
        alert("Length of message must be >2 and <300");
        return false;
    }
    return true;
};