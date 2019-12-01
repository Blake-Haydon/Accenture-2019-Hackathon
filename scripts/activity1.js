
function validate1()
{
  if ((document.getElementById('accountname').value).toLowerCase() === "gary smith")
  {
    if (document.getElementById('bsb').value === "999999")
    {
      if (document.getElementById('accountnumber').value === "99999999")
      {
        if (document.getElementById('save_address').checked === true)
        {
          next_step();
          next_screen();
        }
        else {
          updateWarning("It would help to check the save to address book");
        }
      }
      else {
        updateWarning("The Account Number should be 99999999");
      }
    }
    else {
      updateWarning("The BSB should be 999999");
    }
  }
}

function validate2()
{
  if (document.getElementById('amount').value == 10)
  {
    if (document.getElementById('description').value != "")
    {
      if (document.getElementById('accountname').value === "Everyday Account")
      {
        next_step();
        next_screen();
      }
      else {
        updateWarning("You should use the Everyday Account");
      }
    }
    else {
      updateWarning("There should be a description");
    }
  }
  else {
    updateWarning("The amount should be 10");
  }
}
