function clears()
{
var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
context.clearRect(0,0,canvas.width,canvas.height);
}