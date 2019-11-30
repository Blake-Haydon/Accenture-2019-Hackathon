let story1 = {
  steps: [
    ["character", "text_msg", "task_title", "task","info_msg"],
    ["task_title", "task","info_msg"],
    ["text_msg", "task","info_msg"],
    ["task","info_msg"],
    ["info_msg"],
    ["task","info_msg"],
    ["text_msg", "task","info_msg"],
    ["character", "text_msg", "task_title", "task","info_msg"],
    ["task"],
    ["task"],
    ["task","info_msg"],
    ["task"],
    ["text_msg", "task_title", "task","info_msg"]
  ],
  character: ["Gary Smith", "Barry Jones"],
  text_msg: ["Hey mate, can you pay me back the $10 for lunch yesterday?", "Oh yeah, you'll need my BSB and Account Number,<br>BSB: 999-999<br>Account Number: 9999 9999<br><br>Just use my name for the account name by the way", "Thanks mate, have recieved the $10!", "Hey can you send me $20 so I can buy our movie tickets for tomorrow. You can just use my mobile number (04 999 999) instead of my bank details!", "Cheers! I'll buy us the tickets!"],
  task_title: ["Make a payment to someone", "Use their bank details to make the $10 payment", "Use their mobile number to make a payment", "Payments complete"],
  task: ["Navigate to the payment screen.",
    "Select a new person to make a payment to.",
    "Choose 'Bank Account' and then enter the bank details supplied by your friend. Save their details to your address book so you don't need to re-enter their details later.",
    "Make the $10 payment using your 'Everyday Account' and give a relevant description of your choice.",
    "Confirm the details are correct and make the payment.",
    "You have made your first payment! Press to continue.",
    "Navigate to the payment screen.",
    "Select a new person to make a payment to.",
    "Choose 'Mobile Number' and then enter the number supplied by your friend. Save their details to your address book so you don't need to re-enter their details later.",
    "Make the $20 payment using your 'Personal Account' and give a relevant description of your choice.",
    "Confirm the details are correct and make the payment.",
    "You have successfully sent money to your friends!<br> and continue."
  ],
  info_msg: ["The home screen is a place where the main banking functions can be accessed",
  "This is your address book, with all of your saved banking contacts. These make it even faster to make payments to your friends without entering the details again.",
  "Paying someone can be done in many different ways. Each one works as a means to send money. <br> TIP: There are more ways to send money than those displayed here",
  "This screen allows you to enter in the bank details. <br> The account name is the name of your friends account. The neccessary details to make a payment are the BSB and Account Numbers. The BSB is a number that specifies which bank the account is from and the Account Number is the unique ID number of the bank account.",
  "Here is where you fill in the amount to pay your friend. Make sure to enter a description so that you and the recipient knows what the payment is for. You must also select which account you want to take the money from. <br> TIP: The app will stop you from sending more money than you have in the selected account",
  "This is the confirmation window that gives you a summary of the payment details. You can make sure all the details are correct before making the final transaction.",
  "This final page confirms that your payment has been successful",
  "Mobile numbers can be used to send money to others as well",
  "Different types of payments should be made from relevant accounts. The previous transaction to Gary was for food and was taken from your Everyday Account. This payment is for movie tickets so you'd want to take it from your Personal Account to differentiate it from your neccessary expenses.",
  "Both Bank Account details and Mobile Numbers can easily be used to make payments to others"
  ],
  screens: [
    '<div class = "phone" style = "background = #FA870D">'+
      '<div class="grid-itemacross">'+
        '<p style = " font-family: "Lato", sans-serif; font-size: 25px; text-align: left; font-weight: bold; padding: 5px;"> G-Bank </p>'+
      '<hr>'+
      '<img src = "../moneyImage.png" height = 150bpx width = 200px>'+
      '</div>'+
      '<div class="grid-item1">'+
        '<button class = "buttonSize"> Transfer Funds </button>'+
      </div>
      <div class="grid-item2">
        <button class = "buttonSize"> Pay Anyone </button>
      </div>
      <div class="grid-item3">
        <button class = "buttonSize"> History </button>
      </div>
      <div class="grid-item4">
        <button class = "buttonSize"> Help </button>
      </div>
      <div class="grid-item5">
        <button class = "buttonSize"> Cardless Cash </button>
      </div>
      <div class="grid-item6">
        <button class = "buttonSize"> Settings </button>
      </div>
      </div>
  ],
}
