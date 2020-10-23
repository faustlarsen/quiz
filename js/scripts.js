$(document).ready(function() {
  $("#form").submit(function(event){
    
  const answer1 = $("input:radio[name=q1]:checked").val();
  const answer2 = $("input:radio[name=q2]:checked").val();
  const answer3 = $("input:radio[name=q3]:checked").val();
  const answer4 = $("input:radio[name=q4]:checked").val();
  const answer5 = $("input:radio[name=q5]:checked").val();
  const name = $("#name").val();

/* tried to upper case first letters of two names. Only first works"*/
  const upper = name.split(" ");
  for (let i = 0; i < upper.length; i++) {
    upper[i] = upper[i][0].toUpperCase() + upper[i].substr(1);
  }
  let final = upper.join(" ");

/* this works to cap first letter of one name (string) only 
  const upper = name.slice(0,1).toUpperCase();
  const lower = name.slice(1,name.length).toLowerCase();
  const finalName = upper + lower;
*/

  if (answer1 === '1' && answer2 === '4' && answer3 === '7' && answer4 === '10' && answer5 === '13') {
    $("#ruby").hide();
    $("#french").hide();
    $("#swift").hide();
    $("#trythis").hide();
    $("#image").hide();
    $("#java").show();

  } else if (answer1 === '2' && answer2 === '5' && answer3 === '8' && answer4 === '11' && answer5 === '14') {
    $("#java").hide();
    $("#french").hide();
    $("#swift").hide();
    $("#trythis").hide();
    $("#ruby").show();

  } else if (answer1 === '3' && answer2 === '6' && answer3 === '9' && answer4 === '12' && answer5 === '15') {
    $("#ruby").hide();
    $("#french").hide();
    $("#java").hide();
    $("#trythis").hide();
    $("#swift").show();

  } else if (answer1 === '2' && answer2 === '4' && answer3 === '9' && answer4 === '10' && answer5 === '13') {
    $("#ruby").hide();
    $("#swift").hide();
    $("#java").hide();
    $("#trythis").hide();
    $("#french").show();

  } else {
    $("#ruby").hide();
    $("#java").hide();
    $("#swift").hide();
    $("#french").hide();
    $("#trythis").show();
  }
  

  /* red doesnt disappear
  if ( name !== undefined && answer1 !== undefined && answer2 !== undefined && answer3 !== undefined && answer4 !== undefined && answer5 !== undefined) {
    $(".form-control").addClass("red") 
    $("#image").show();
  } else {
    $(".form-control").removeClass("red");
    $("#image").hide();
  }
  */

  $(".firstName").text(final);
  $("#result").show();
  
  event.preventDefault();
  });
});




