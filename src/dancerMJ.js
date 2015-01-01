var MJ = function(top,left,timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.$node = $('<img class = "dancer" src = "img/MOONWALK.gif">');
  this.setPosition(top, left);
  this.$node.addClass('MJ');
};

MJ.prototype = Object.create(Dancer.prototype);
MJ.prototype.constructor = MJ;
MJ.prototype.oldStep = Dancer.prototype.step;
MJ.prototype.step = function(){
  this.oldStep();
  var $node = this.$node;
  var browserWidth = $('body').width();
  if(window.buttonClicked === false){
    if($node.position().left < browserWidth * 0.5){
      $node.animate({left: browserWidth * 0.9}, 3000, 'easeInSine');
    }else{
      $node.animate({left: 10}, 3000, 'easeInSine');
    }
  }
};
