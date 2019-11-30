let displaying = false;
function moveAnimation()
{
  let element =  document.getElementById("myAnimation");
  let pos = 0;
  let posReal = 0;
  if (displaying)
  {
    displaying = false;
  }
  else
  {
    displaying = true;
  }
  let animationId = setInterval(frameStep,1)
  let divider = 1;
opacitySave = 0;
  function frameStep()
  {

    if (posReal == 200)
    {
      clearInterval(animationId);
    }
    else
    {
      opacitySave = 0.01 + opacitySave
      element.style.opacity = opacitySave
      posReal++
      pos = pos + (1/divider)
      divider = divider + 0.02;
        element.style.left = pos + 'px';
        element.style.right = pos + 'px';
      }
    }
}

function removeAnimation()
{
  let element =  document.getElementById("myAnimation");
  for (let i = 1; i < 1000; i++) {
    element.style.opacity = 1/(i)
  }
}
function displayInfo(textInfo,location)
{

let htmlCODE = "";
htmlCode += ""
}
