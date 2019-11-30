
function activitySelected(activity_name)
{
  console.log('this works and is connected ' + activity_name);
}

function generateActivity(name, link, emoji)
{
  let activity = document.createElement( 'div' );
  activity.innerHTML =   '<button style="color: #ffffff" class="big-button" onclick="activitySelected("' + name + '");">' +
                            '<div style="display: center; padding: 10px 10px">' +
                              name + ' <br>' +
                              '<h1>' + emoji + '</h1> ' +
                            '</div>' +
                          '</button>';
  activity.className = 'grid-item';

  container = document.getElementById('main-grid');
  container.appendChild(activity);
}


generateActivity('Pay back a friend for food', 'NO LINK, JUST FILLER', "💳");
generateActivity('Get payments from work', 'NO LINK, JUST FILLER', "💰");
generateActivity('Pay back a home loan', 'NO LINK, JUST FILLER', "🤑");
generateActivity('Make a super contribution', 'NO LINK, JUST FILLER', "💵");
generateActivity('Apply for a home loan', 'NO LINK, JUST FILLER', "🏦");
generateActivity('Open a new bank account', 'NO LINK, JUST FILLER', "💱");
generateActivity('Trade stocks on the ASX', 'NO LINK, JUST FILLER', "💹");

// more filler
generateActivity('Find a savings account', 'NO LINK, JUST FILLER',"💰");
generateActivity('Use a business account to pay a client', 'NO LINK, JUST FILLER', "🏦");


//
// let story = {
//   'step1': {
//     'name': "hello"
//     'objectives': "hello"
//     'info': "hello"
//   }
//
//   'step2': {
//     'name': "hello"
//     'objectives': "hello"
//     'info': "hello"
//   }
// }
