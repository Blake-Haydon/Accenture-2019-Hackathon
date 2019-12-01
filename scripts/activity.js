let story = story1;
let step_num = 0;
let screen_num = 0;
let story_index = {
  character: 0,
  text_msg: 0,
  task_title: 0,
  task: 0,
  info_msg: 0
};

next_screen();
next_step();

function next_step()
{
  let total_steps = story.steps.length;
  if (total_steps <= step_num)
  {
    // go to main or completion screen
    let url = '../index.html';
    document.location.href = url;
  }
  else if (step_num < 0)
  {
    Error("step number should be positive");
  }
  for (let i = 0; i < story.steps[step_num].length; i++)
  {
    output_id = story.steps[step_num][i];
    outputArea = document.getElementById(output_id);
    outputArea.innerHTML = story[output_id][story_index[output_id]];
    story_index[output_id]++;
  }
  let progress = ((step_num/(total_steps-1))*100); // percentage progress of steps
  //document.getElementById('task_progress').MaterialProgress.setProgress(progress);
  step_num++;
}

function next_screen()
{
  output_id = "screen_section";
  outputArea = document.getElementById(output_id);
  outputArea.innerHTML = story.screens[screen_num];
  screen_num++;
}

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
