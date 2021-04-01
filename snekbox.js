function activecanvas(canvasid) {
  var canvas = document.getElementById(canvasid);
  var ctx = canvas.getContext("2d");
  return ctx;
}

function drawgrid() {
  var x;
  var y;
	ctx.fillStyle = "#474747";
  for (x = 3; x < canvasDOM.width; x = x + canvasDOM.width / 20) {
    for (y = 3; y < canvasDOM.height; y = y + canvasDOM.height / 20) {
      ctx.fillRect(x + 4, y + 4, canvasDOM.width / 40, canvasDOM.height / 40);
    }
  }
}
var canvasDOM = document.querySelector('#canvas');
console.log(canvasDOM);
var ctx = activecanvas("canvas");
drawgrid();
