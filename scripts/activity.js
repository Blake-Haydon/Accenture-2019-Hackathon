

function next_step(story,step_num)
{
  if (story.steps.length <= step_num)
  {
    // go to main or completion screen
    let url = './activity_' + link_ID + '/main.innerHTML'
    document.location.href = url;
  }
  else if (step_num < 0)
  {
    Error("step number should be positive");
  }
  for (let i = 0; i < story.steps[step_num].length, i++)
  {
    output_id = story.steps[step_num][i];
    outputArea = getElementById(output_id);
    outputArea.innerText = story[output_id];
  }
}
