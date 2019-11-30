

function next_step(story,step_num)
{
  let total_steps = story.steps.length;
  if (total_steps <= step_num)
  {
    // go to main or completion screen
    let url = './activity_' + link_ID + '/main.innerHTML';
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
  let progress = (step_num/total_steps)*100; // percentage progress of steps
  document.querySelector('task_progress').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(progress);
  });
}
