$(document).ready(function() {
  $("#form").submit(function(event){
   
  const answer1 = $("input:radio[name=q1]:checked").val();
  const answer2 = $("input:radio[name=q2]:checked").val();
  const answer3 = $("input:radio[name=q3]:checked").val();
  const answer4 = $("input:radio[name=q4]:checked").val();
  const answer5 = $("input:radio[name=q5]:checked").val();

  if (answer1 === '1') {
    $("#ruby").show();
    $("#java").hide();
    $("#french").hide();
    $("#swift").hide();

  } else {
    $("#ruby").hide();
    $("#french").show();
  }

  $("#result").show();
  
  event.preventDefault();
  });
});