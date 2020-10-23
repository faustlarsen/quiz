$(document).ready(function() {
  $("#form").submit(function(event){
    
  const answer1 = $("input:radio[name=q1]:checked").val();
  const answer2 = $("input:radio[name=q2]:checked").val();
  const answer3 = $("input:radio[name=q3]:checked").val();
  const answer4 = $("input:radio[name=q4]:checked").val();
  const answer5 = $("input:radio[name=q5]:checked").val();
  const name = $("#name").val();

  if (answer1 === '1' && answer2 === '4' && answer3 === '7' && answer4 === '10' && answer5 === '13') {
    $("#ruby").hide();
    $("#french").hide();
    $("#swift").hide();$
    ("#java").show();

  } else if (answer1 === '2' && answer2 === '5' && answer3 === '8' && answer4 === '11' && answer5 === '14') {
    $("#java").hide();
    $("#french").hide();
    $("#swift").hide();
    $("#ruby").show();

  } else if (answer1 === '3' && answer2 === '6' && answer3 === '9' && answer4 === '12' && answer5 === '15') {
    $("#ruby").hide();
    $("#french").hide();
    $("#java").hide();
    $("#swift").show();

  } else {
    $("#ruby").hide();
    $("#java").hide();
    $("#swift").hide();
    $("#french").show();
  }
  
  if (name !== undefined) {
    $(".form-control").addClass("red");
  } else {
    $(".form-control").removeClass("red");
  }

  $(".firstName").text(name);
  $("#result").show();
  
  event.preventDefault();
  });
});




