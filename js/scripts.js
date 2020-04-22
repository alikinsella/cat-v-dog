$(document).ready(function() {
  $("button#feline").click(function() {
    $("ul#kitty").prepend("<li>Meow!</li>");
    $("ul#puppy").prepend("<li>Ruff! Ruff!</li>");
    $("ul#puppy").children("li").first().click(function() {
      $(this).remove();
    });    
  });

//   $("button#dog").click(function() {
//     $("ul#puppy").prepend("<li>Woof! Woof!</li>");
//     $("ul#kitty").prepend("<li>Hisssssss!</li>");
//   });
// });

// $('img#reproduce').click(function() {
//   $("ul#puppy").prepend("img");
// });

  $("button#canine").click(function() {
    $("ul#puppy").prepend("<li><img src='beatrice.jpeg'></li>");
    $("ul#kitty").prepend("<li>Hisssssss!</li>");
  });
});