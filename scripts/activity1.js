
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
      }
    }
  }
}

function validate2()
{
  if (document.getElementById('amount').value === "10")
  {
    if (document.getElementById('description').value != "")
    {
      if (document.getElementById('accountname').value === "Everyday Account")
      {
        next_step();
        next_screen();
      }
    }
  }
}
