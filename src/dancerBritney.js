var Britney = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class = "dancer" src = "img/Britney.gif">');
  this.setPosition(top,left);
  this.$node.addClass('Britney');
}

Britney.prototype = Object.create(Dancer.prototype);
Britney.prototype.constructor = Britney;
Britney.prototype.oldStep = Dancer.prototype.step;
Britney.prototype.step = function(){
  this.oldStep();
  var $node = this.$node;
  var dropHeight = $('body').height() * Math.random();
  if (window.buttonClicked === false){
    $node.animate({top: dropHeight}, 500, function(){
      $node.animate({left: dropHeight * Math.random()}, 500 * Math.random());
    });
  }

}
