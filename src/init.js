$(document).ready(function(){
  window.dancers = [];
  window.buttonClicked = false;
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  window.setInterval(function(){
    dancers = $('img.dancer');
    $('button').click(function(){
      window.buttonClicked = true;
      dancers.animate({left:0});
    });
    for (var i = 0; i < dancers.length; i++){
      for (var j = 0; j < i; j++){
        if (Math.sqrt(($(dancers[i]).position().left - $(dancers[j]).position().left) ^ 2 + ($(dancers[i]).position().top - $(dancers[j]).position().top) ^ 2) < 5){
          $(dancers[i]).remove();
          $(dancers[j]).remove();
        }
      }
    }
    $('.dancer').jrumble({
      x: 10,
      y: 10,
      rotation: 4
    });
    $('.dancer').hover(function(){
      $(this).trigger('startRumble');
    }, function(){
      $(this).trigger('stopRumble');
    });
  }, 500);

});

