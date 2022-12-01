$("#new-task-input").keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    e.preventDefault();

    $("#new-task-submit").click();
  }
});

$("#new-task-submit").on("click", addFn);

$("#new-task-form").submit(function (e) {
  e.preventDefault();
});

function addFn() {
  var text = $("#new-task-input").val();

  if (!text) {
    alert("Write something :-)");
    return;
  }

  $("#tasks").append(
    '<div class="task"><div class="content"><p> ' +
      text +
      ' </p></div><div class="actions"></input>' +
      '<button value="Edit" class="edit">EDIT</button><button class="delete">DELETE</button></div></div>'
  );
  $("#new-task-input").val("");
}

$(document).on("click", ".delete", function () {
  $(this).parentsUntil("ul").fadeOut();
  setTimeout(function () {
    $(this).parentsUntil("ul").remove();
  }, 700);
});

$(document).on("click", ".edit", function () {
  var buttonText = $(this);
  var text = $(this).closest("ul").find("p");
  if (buttonText.text() == "EDIT") {
    text.prop("contenteditable", true).focus();
    buttonText.text("SAVE");
  } else if (buttonText.text() == "SAVE") {
    text.prop("contenteditable", false);
    buttonText.text("EDIT");
  }
  text.keypress(function (e) {
    var key = e.which;
    if (key == 13) {
      text.blur();
      text.prop("contenteditable", false);
      buttonText.text("EDIT");
    }
  });
});

$(document).on("click", "p", function () {
  $(this).toggleClass("line-through");
});
