
function activitySelected(link_ID)
{
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


generateActivity('Pay back a friend for food', "1", "💳");

// there are no links to the other pages (just for show)
generateActivity('Get payments from work', "2", "💰");
generateActivity('Pay back a home loan', "3", "🤑");
generateActivity('Make a super contribution', "4", "💵");
generateActivity('Apply for a home loan', "5", "🏦");
generateActivity('Open a new bank account', "6", "💱");
generateActivity('Trade stocks on the ASX', "7", "💹");
generateActivity('Find a savings account', "8","💰");
generateActivity('Use a business account to pay a client', "9", "🏦");
