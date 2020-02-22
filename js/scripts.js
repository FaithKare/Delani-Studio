

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
