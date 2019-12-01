
let story1 = {
  steps: [
    ["character", "text_msg", "task_title", "task","info_msg"],
    ["task_title", "task","info_msg"],
    ["text_msg", "task","info_msg"],
    /*["info_msg"],
    ["task","info_msg"],
    ["task","info_msg"],
    ["text_msg", "task","info_msg"],
    ["character", "text_msg", "task_title", "task","info_msg"],
    ["task"],
    ["task"],
    ["task","info_msg"],
    ["task"],
    ["text_msg", "task_title", "task","info_msg"]*/
    ["task","info_msg"],
    ["task","info_msg"],
    ["text_msg","task","info_msg"]
  ],
  character: ["Gary Smith"
  //,"Barry Jones"
  ],
  text_msg: ["Hey mate, can you pay me back the $10 for lunch yesterday?",
   "Oh yeah, you'll need my BSB and Account Number,<br>BSB: 999-999<br>Account Number: 9999 9999<br><br>Just use my name for the account name by the way",
   "Thanks mate, have recieved the $10!"
   //,"Hey can you send me $20 so I can buy our movie tickets for tomorrow. You can just use my mobile number (04 999 999) instead of my bank details!",
   //"Cheers! I'll buy us the tickets!"
  ],
  task_title: ["Make a payment to someone",
  "Use their bank details to make the $10 payment",
  //"Use their mobile number to make a payment",
  "Payments complete"],
  task: ["Navigate to the payment screen.",
    "Select a new person to make a payment to.",
    "Enter the bank details supplied by your friend. Save their details to your address book so you don't need to re-enter their details later.",
    "Make the $10 payment using your 'Everyday Account' and give a relevant description of your choice.",
    "Confirm the details are correct and make the payment.",
    /*"You have made your first payment! Press to continue.",
    "Navigate to the payment screen.",
    "Select a new person to make a payment to.",
    "Choose 'Mobile Number' and then enter the number supplied by your friend. Save their details to your address book so you don't need to re-enter their details later.",
    "Make the $20 payment using your 'Personal Account' and give a relevant description of your choice.",
    "Confirm the details are correct and make the payment.",*/
    "You have successfully sent money to your friend!<br> Press to continue to main menu."
  ],
  info_msg: ["The home screen is a place where the main banking functions can be accessed",
  "This is your address book, with all of your saved banking contacts. These make it even faster to make payments to your friends without entering the details again.",
  //"Paying someone can be done in many different ways. Each one works as a means to send money. <br> TIP: There are more ways to send money than those displayed here",
  "This screen allows you to enter in the bank details. <br> The account name is the name of your friends account. The neccessary details to make a payment are the BSB and Account Numbers. The BSB is a number that specifies which bank the account is from and the Account Number is the unique ID number of the bank account.",
  "Here is where you fill in the amount to pay your friend. Make sure to enter a description so that you and the recipient knows what the payment is for. You must also select which account you want to take the money from. <br> TIP: The app will stop you from sending more money than you have in the selected account",
  "This is the confirmation window that gives you a summary of the payment details. You can make sure all the details are correct before making the final transaction.",
  "This final page confirms that your payment has been successful"
  /*,"Mobile numbers can be used to send money to others as well",
  "Different types of payments should be made from relevant accounts. The previous transaction to Gary was for food and was taken from your Everyday Account. This payment is for movie tickets so you'd want to take it from your Personal Account to differentiate it from your neccessary expenses.",
  "Both Bank Account details and Mobile Numbers can easily be used to make payments to others"*/
  ],
  screens: [
    '<link rel="stylesheet" type="text/css" href="../css/phoneTemplate1_style.css">'+
    '<div class = "phone" style = "background = #FA870D">'+
      '<div class="grid-itemacross">'+
        '<p style = " font-family: Lato, sans-serif; font-size: 25px; text-align: left; font-weight: bold; padding: 5px;"> G-Bank </p>'+
      '<hr>'+
      '<img src = "../moneyImage.png" height = 150bpx width = 200px>'+
      '</div>'+
      '<div class="grid-item1">'+
        '<button class = "buttonSize"> Transfer Funds </button>'+
      '</div>'+
      '<div class="grid-item2">'+
        '<button class = "buttonSize" onclick="next_screen();next_step();"> Pay Anyone </button>'+
      '</div>'+
      '<div class="grid-item3">'+
        '<button class = "buttonSize"> History </button>'+
      '</div>'+
      '<div class="grid-item4">'+
        '<button class = "buttonSize"> Help </button>'+
      '</div>'+
      '<div class="grid-item5">'+
        '<button class = "buttonSize"> Cardless Cash </button>'+
      '</div>'+
      '<div class="grid-item6">'+
        '<button class = "buttonSize"> Settings </button>'+
      '</div>'+
      '</div>',
// Second Screen
    '<link rel="stylesheet" type="text/css" href="../css/phoneTemplate3_style.css">'+
      '<div class = "phone" style = "background = #FA870D">'+
        '<div class="grid-itemacross">'+
          '<br>'+
          '<p style = " font-family: Lato, sans-serif; font-size: 25px; text-align: left; font-weight: bold; padding: 10px;"> G-Bank </p>'+
          '<hr>'+
        '</div>'+
        '<div class = "grid-item4">'+
        '<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">'+
          '<label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">'+
            '<i class="material-icons">search</i>'+
          '</label>'+
          '<div class="mdl-textfield__expandable-holder">'+
            '<input class="mdl-textfield__input" type="text" id="sample6">'+
            '<label class="mdl-textfield__label" for="sample-expandable">Account Name</label>'+
          '</div>'+
        '</div>'+
      '</div>'+
        '<div class = "grid-item3">'+
          '<ul class="demo-list-two mdl-list" style = "width: 100% !important;">'+
            '<li class="mdl-list__item mdl-list__item--two-line">'+
              '<div class="mdlFontP">'+
              '<span class="mdl-list__item-primary-content">'+
                '<i class="material-icons mdl-list__item-avatar">person</i>'+
                '<span style = "display: flex !important;">Chetan Narayan</span>'+
                '<span style = "font-size: 8px !important;"class="mdl-list__item-sub-title">BSB:543154 Acc: 45353532</span>'+
              '</span>'+
            '</div>'+
              '<span style = "margin-left: auto !important;" class="mdl-list__item-secondary-content">'+
                '<a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>'+
              '</span>'+
            '</li>'+
            '<li class="mdl-list__item mdl-list__item--two-line">'+
              '<div class="mdlFontP">'+
              '<span class="mdl-list__item-primary-content">'+
                '<i class="material-icons mdl-list__item-avatar">person</i>'+
                '<span style = "display: inline-flex !important;">Tristan Clarky</span>'+
                '<span style = "font-size: 8px !important;"class="mdl-list__item-sub-title">BSB:543154 Acc: 45353532</span>'+
              '</span>'+
            '</div>'+
              '<span style = "margin-left: auto !important;" class="mdl-list__item-secondary-content">'+
                '<a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>'+
              '</span>'+
            '</li>'+
            '<li class="mdl-list__item mdl-list__item--two-line">'+
              '<div class="mdlFontP">'+
              '<span class="mdl-list__item-primary-content">'+
                '<i class="material-icons mdl-list__item-avatar">person</i>'+
                '<span style = "display: flex !important;">Blake Haydon</span>'+
                '<span style = "font-size: 8px !important;"class="mdl-list__item-sub-title">BSB:543154 Acc: 45353532</span>'+
              '</span>'+
            '</div>'+
              '<span style = "margin-left: auto !important;" class="mdl-list__item-secondary-content">'+
                '<a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>'+
              '</span>'+
            '</li>'+
          '</ul>'+
        '</div>'+
          '<div class ="grid-item2">'+
          '<div style = "width: 50%; float:left">'+
            '<button class = "buttonClass">Return</button>'+
              '</div>'+
              '<div style = "width: 50%; float:right">'+
                '<button class = "buttonClass" onclick="next_screen();next_step();">Add New</button>'+
                  '</div>'+
                '</div>'+
      '</div>',

      '<link rel="stylesheet" type="text/css" href="../css/phoneTemplate2_style.css">'+
      '<div class = "phone" style = "background = #FA870D">'+
        '<div class="grid-itemacross">'+
          '<br>'+
          '<p style = " font-family: Lato, sans-serif; font-size: 25px; text-align: left; font-weight: bold; padding: 10px;"> G-Bank </p>'+
          '<hr>'+
        '</div>'+
        '<div class = "grid-item1">'+
          '<form>'+
            '<div style = "width: 95%;"class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
              '<input class="mdl-textfield__input" type="text" id="accountname">'+
       '<label class="mdl-textfield__label" for="accountNumber">Account Name</label>'+
            '</div>'+
            '<div style = "width: 95%;"class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
              '<input class="mdl-textfield__input" type="text" id="bsb">'+
       '<label class="mdl-textfield__label" for="accountNumber">BSB:</label>'+
            '</div>'+
            '<div style = "width: 95%;"class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
              '<input class="mdl-textfield__input" type="text" id="accountnumber">'+
       '<label class="mdl-textfield__label" for="accountNumber">Account Number:</label>'+
            '</div>'+
            '<label style = " font-family: Lato, sans-serif;" > Save to account address book</label>'+
            '<input type = "checkbox" id="save_address" value="save_it"></input>'+
          '</form>'+
          '<div style = "width:50%; float: left;">'+
            '<button class = "buttonClass">Return</button>'+
            '</div>'+
            '<div style = "width:50%; float: right;">'+
              '<button class = "buttonClass" onclick="validate1();">Next</button>'+
              '</div>'+
        '</div>'+
      '</div>',

      '<link rel="stylesheet" type="text/css" href="../css/phoneTemplate4_style.css">'+
      '<div class = "phone" style = "background = #FA870D">'+
        '<div class="grid-itemacross">'+
          '<br>'+
          '<p style = " font-family: Lato, sans-serif; font-size: 25px; text-align: left; font-weight: bold; padding: 10px;"> G-Bank </p>'+
          '<hr>'+
        '</div>'+
        '<div style = " font-family: Lato, sans-serif;"class= "grid-item1">'+
          '<br>'+
          '<p>From Account:</p>'+
          '<select id="accountname">'+
          '<option value="Personal Account">Personal Account</option>'+
          '<option value="Everyday Account">Everyday Account</option>'+
          '<option value="Savings Account">Savings Account</option>'+
          '</select>'+
        '</div>'+
        '<div class = "grid-item3">'+
          '<form>'+
            '<div style = "width: 95%;"class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
              '<input class="mdl-textfield__input" type="text" id="amount">'+
       '<label class="mdl-textfield__label" for="amount">Amount:</label>'+
            '</div>'+
            '<div style = "width: 95%;"class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
              '<input class="mdl-textfield__input" type="text" id="description">'+
       '<label class="mdl-textfield__label" for="description">Description</label>'+
            '</div>'+
          '</form>'+
        '</div>'+
          '<div class ="grid-item2">'+
          '<div style = "width: 50%; float:left">'+
            '<button class = "buttonClass">Return</button>'+
              '</div>'+
              '<div style = "width: 50%; float:right">'+
                '<button class = "buttonClass" onclick = "validate2();">Next</button>'+
                  '</div>'+
                '</div>'+
      '</div>',

      '<link rel="stylesheet" type="text/css" href="../css/phoneTemplate5_style.css">'+
      '<div class = "phone" style = "background = #FA870D">'+
        '<div class="grid-itemacross">'+
          '<br>'+
          '<p style = " font-family: Lato, sans-serif; font-size: 25px; text-align: left; font-weight: bold; padding: 10px;"> G-Bank </p>'+
          '<hr>'+
        '</div>'+
        '<div style = " font-family: Lato, sans-serif;"class= "grid-item1">'+
          '<br>'+
          '<label>Pay To: Gary Smith</label>'+
          '<br><br>'+
          '<label>From: Everyday Account</label>'+
          '<br><br>'+
          '<label>Amount: $10.00</label>'+
          '<br><br>'+
          '<label>Description:Lunch</label>'+
          '<br><br><hr>'+
          '<b> Proceed?</b>'+
        '</div>'+
          '<div class ="grid-item3">'+
          '<div style = "width: 50%; float:left">'+
            '<button class = "buttonClass">Return</button>'+
              '</div>'+
              '<div style = "width: 50%; float:right">'+
                '<button class = "buttonClass" onclick = "next_screen();next_step();">Confirm</button>'+
                  '</div>'+
                '</div>'+
      '</div>',

      '<link rel="stylesheet" type="text/css" href="../css/phoneTemplate6_style.css">'+
      '<div class = "phone" style = "background = #FA870D">'+
        '<div class="grid-itemacross">'+
          '<br>'+
          '<p style = " font-family: Lato, sans-serif; font-size: 25px; text-align: left; font-weight: bold; padding: 10px;"> G-Bank </p>'+
          '<hr>'+
        '</div>'+
        '<div style = " font-family: Lato, sans-serif;"class= "grid-item1">'+
          '<br>'+
          '<label>Pay To:</label>'+
          '<br><br>'+
          '<label>From:</label>'+
          '<br><br>'+
          '<label>Amount:</label>'+
          '<br><br>'+
          '<label>Description:</label>'+
          '<br><hr>'+
          '<img src = "../tick.png" style = "height: 15%">'+
        '</div>'+
          '<div class ="grid-item3">'+
              '<div style = "width: 100%; float:center">'+
                '<button class = "buttonClass" onclick = "next_step();">Done</button>'+
                  '</div>'+
                '</div>'+
      '</div>'
  ],
}
