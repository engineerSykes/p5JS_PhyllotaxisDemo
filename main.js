var c = 10;
var n = 0;
var r = 0; //c * sqrt(n);
var newHue = 1;
var updateMe = 0;

var setup = function()
{
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw()
{
  r = c * sqrt(n);
  var angle = n * 137.5;

  var x = r * cos(angle) + width/2,
      y = r * sin(angle) + height/2,
      reset = sqrt(canvas.width * canvas.width +canvas.width * canvas.width) / 2;

  if (updateMe % 20 == 1)
    {
      updateNum(reset);
    }

  if(r >= reset)
    {
      background(0);
      newHue = 1;
      n = 0;
      r = c * sqrt(n);
    }else
    {
      fill(newHue * 6 % 256, 255, 255);
      ellipse(x, y, 20, 20);
    }
  newHue += 0.6;
  n += 0.5;
  updateMe++;

}

function updateNum(reset)
{
  document.getElementById("aside").innerHTML = "n = " + n.toFixed(4)
                                             + "<br> r = " + r.toFixed(4)
                                             + "<br> hue = " + newHue.toFixed(2)
                                             + "<br> Reset = " + reset.toFixed(0);

}
