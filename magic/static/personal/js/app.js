//TODO
//1. create registration
//2. login
//3. change pokemon to developer names.
//4. add jquery sliding animation to eliminate unselected developers.

//iphone :active fix
document.addEventListener("touchstart", function() {},false);

//array swapper
Array.prototype.swap = function (i, j) {
  if (i > this.length || j > this.length) { return; }

  var temp = this[j]; //assign j into temp
  this[j] = this [i]; //assign i into j
  this[i] = temp; //assign temp into i

  return this;
}

//cool box thingy
var boxes = [];
var boxViews = [];

function Box () {
  var symbols = ["X", "Y", "Z", "A"];
  var index = Math.floor(symbols.length * Math.random());

  this.symbol = symbols[index];
}

function BoxView (box, i) {
  var thisView = this;

  this.box = box;
  this.el = $('<div class="box">');
  this.el.css('top', (3 - i) * 100);
  this.el.text(this.box.symbol);

  this.el.on('click', function (e) {
    $(this).animate({
      opacity: 0
    }, 100, function () {
      $(this).remove();

      var index = boxViews.indexOf(thisView);

      boxes.splice(index, 1);
      boxViews.splice(index, 1);

      for (var j = index; j < boxViews.length; j++) {
        boxViews[j].el.animate({
          top: "+=100px"
        }, 200)
      };
    })
  });
}

for (var i = 0; i < 4; i++) {
  var newBox = new Box();
  var newBoxView = new BoxView(newBox, i);

  boxes.push(newBox);
  boxViews.push(newBoxView);

  $('.column').append(newBoxView.el);
}
