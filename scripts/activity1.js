function updateWarning(warning_message)
{
  // update the warning message and show the message

  // display the warning box
  let warning_box = document.getElementById('warning_box');
  warning_box.style.opacity = 1;

  let message_box = document.getElementById('warning_message');
  message_box.innerHTML = warning_message;

  setTimeout(removeWarning, 10000);
}

function removeWarning()
{
  // warning is removed within 10 secs

  let warning_box = document.getElementById('warning_box');
  warning_box.style.opacity = 0;
}
