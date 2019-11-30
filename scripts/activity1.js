let story = story1;
let step_num = 0;
let story_index = {
  character: 0,
  text_msg: 0,
  task_title: 0,
  task: 0
};

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
