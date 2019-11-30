
function activitySelected(activity_name)
{
  console.log('this works and is connected ' + activity_name);
}

function generateActivity(name, link)
{
  let activity = document.createElement( 'div' );
  activity.innerHTML =   '<button style="color: #ffffff" class="big-button" onclick="activitySelected(' + name + ');">' +
                            '<div style="display: center; padding: 10px 10px">' +
                              'Sending money to a friend?' +
                            '</div>' +
                          '</button>';
  activity.className = 'grid-item';

  container = document.getElementById('main-grid');
  container.appendChild(activity);
}


for (let i = 0; i < 16; i++)
{
  // generate random activities
  generateActivity(i, 'NO LINK, JUST FILLER');
}
