let letterTemplate = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

$(document).ready(function() {
  $("#letter-form").submit(function(event) {
    event.preventDefault();

    const name = $("input#name").val();
    $("span.person").append(name);
    $("#letter-reply").show();

    /*
    $("#letter-reply").append(`
      <p class='letter-body'>
        Dear ${name}, <br/> ${letterTemplate}
      </p>
    `)
    */

  });

  $("#shout-form").submit(function(event) {
    event.preventDefault();

    const word = $(".some_word").val();
    $("#reply").append(word.toUpperCase());

  });


});