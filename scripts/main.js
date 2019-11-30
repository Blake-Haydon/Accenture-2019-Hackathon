// for the main page
function activitySelected(link_ID)
{
  /* change the inteface to the disired activity */

  // filepath from a local machine
  let url = './activity_' + link_ID + '/main.html'
  document.location.href = url;

}

function generateActivity(name, link_ID, emoji)
{
  let activity = document.createElement( 'div' );
  activity.innerHTML =   '<button style="color: #ffffff" class="big-button" onclick="activitySelected('+link_ID+')"' +
                            '<div style="display: center; padding: 10px 10px">' +
                              name + ' <br>' +
                              '<h1>' + emoji + '</h1> ' +
                            '</div>' +
                          '</button>';
  activity.className = 'grid-item';

  container = document.getElementById('main-grid');
  container.appendChild(activity);
}
