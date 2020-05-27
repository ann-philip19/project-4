//jshint esversion: 6

let controller = function() {

  if(localStorage.getItem("2doList") != null){
    $(".comments").html(localStorage.getItem("2doList"));
  }
  localStorage.clear();

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      //log the list of paragraph elements
      localStorage.setItem("2doList", $(".comments").html());
      console.log(localStorage.getItem("2doList"));
    }
  };

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

if("2doList" in localStorage){
  $(".comments").html(localStorage.getItem("2doList"));
  console.log(localStorage.getItem("2doList"));
}

$(document).ready(controller);
