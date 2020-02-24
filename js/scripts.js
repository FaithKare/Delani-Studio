



$(document).ready(function() {
  $(".design").click(function() {
    $("#design-hidden").toggle();
    $("#designp").toggle();
  });
});

$(document).ready(function() {
  $(".dev").click(function() {
    $("#dev-hidden").toggle();
    $("#devp").toggle();
  });
});

$(document).ready(function() {
  $(".prod").click(function() {
    $("#prod-hidden").toggle();
    $("#prodp").toggle();
  });
});

$('img.workdone').hover(function(){
      $(this).css('opacity', '0.2');
    },
    function(){
      $(this).css('opacity', '1');
    }
);

/* $('.img1').hover(function() {
        $(this).find('.text1').fadeIn(300);
      }, function() {
        $(this).find('.text1').fadeOut(100);
      })



/* Validation of contact form */
function validateForm() {

var x=document.forms["contactUs"]["name"].value;
if (x==null || x=="")
  {
  alert("Name must be filled out");
  return false;
  }

var y=document.forms["contactUs"]["email"].value;
if (y==null || y=="") {
  alert("Email must be filled out");
  return false;
  }

  var z=document.forms["contactUs"]["subject"].value;
  if (z==null || z=="") {
    alert("Please type your message");
    return false;
    }
}
