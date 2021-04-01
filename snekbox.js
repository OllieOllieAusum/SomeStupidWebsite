function activecanvas(canvasid) {
  var canvas = document.getElementById(canvasid);
  var ctx = canvas.getContext("2d");
  return ctx;
}

function drawgrid() {
  var x;
  var y;
  for (x = 3; x < canvasDOM.width; x = x + canvasDOM.width / 20) {
    ctx.fillRect(x, 3, canvasDOM.width / 25, canvasDOM.height / 25);
    for (y = 3; y < canvasDOM.height; y = y + canvasDOM.height / 20) {

      ctx.fillRect(x, y, canvasDOM.width / 25, canvasDOM.height / 25);
      ctx.fillStyle = "#474747";
      ctx.fillRect(x + 4, y + 4, canvasDOM.width / 40, canvasDOM.height / 40);
      ctx.fillStyle = "#000000";
    }
  }
}
var canvasDOM = document.querySelector('#canvas');
console.log(canvasDOM);
var ctx = activecanvas("canvas");
drawgrid();
