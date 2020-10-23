$(document).ready(function() {
  $("#form").submit(function(event){

  const answer1 = $("input:radio[name=q1]:checked").val();
  const answer2 = $("input:radio[name=q2]:checked").val();
  const answer3 = $("input:radio[name=q3]:checked").val();
  const answer4 = $("input:radio[name=q4]:checked").val();
  const answer5 = $("input:radio[name=q5]:checked").val();

  const name = $("#name").val();
  const upper = name.split(" ");
  for (let i = 0; i < upper.length; i++) {
    upper[i] = upper[i][0].toUpperCase() + upper[i].substr(1);
  }
  let final = upper.join(" ");

  if (answer1 === '1' && answer2 === '4' && answer3 === '7' && answer4 === '10' && answer5 === '13') {
    $("#ruby").fadeOut();
    $("#french").fadeOut();
    $("#swift").fadeOut();
    $("#trythis").fadeOut();
    $("#image").fadeOut();
    $("#java").fadeIn();

  } else if (answer1 === '2' && answer2 === '5' && answer3 === '8' && answer4 === '11' && answer5 === '14') {
    $("#java").fadeOut();
    $("#french").fadeOut();
    $("#swift").fadeOut();
    $("#trythis").fadeOut();
    $("#ruby").fadeIn();

  } else if (answer1 === '3' && answer2 === '6' && answer3 === '9' && answer4 === '12' && answer5 === '15') {
    $("#ruby").fadeOut();
    $("#french").fadeOut();
    $("#java").fadeOut();
    $("#trythis").fadeOut();
    $("#swift").fadeIn();

  } else if (answer1 === '2' && answer2 === '4' && answer3 === '9' && answer4 === '10' && answer5 === '13') {
    $("#ruby").fadeOut();
    $("#swift").fadeOut();
    $("#java").fadeOut();
    $("#trythis").fadeOut();
    $("#french").fadeIn();

  } else {
    $("#ruby").fadeOut();
    $("#java").fadeOut();
    $("#swift").fadeOut();
    $("#french").fadeOut();
    $("#trythis").fadeIn();
  }

  $(".firstName").text(final);
  $("#result").show();
  
  event.preventDefault();
  });
});
















/* tried to add numeric value
let results = $("#results");
  let score = 0;
  if (answer1 == "dd") {
    score += 2
  } else {
    score += 1
  }

  if(score >= 2){
    results.show("qw");
  } else {
    results.show("fg");
  }
  

/* tried another numeric value no luck
  function add(answer1, answer2, answer3, answer4, answer5) {
    return answer1 + answer2 + answer3 + answer4 + answer4;
  }
  let answers = add(answer1, answer2, answer3, answer4, answer5)

  if ( answers <=8 ) {
  $("#result").text("vanilla");
  } else if ( answers <=29) {
    $("#result").text("chocolate");
  } else if ( answers <=33) {
    $("#result").text("strawberry");
  } else if ( answers <=43) {
    $("#result").text("peach");
  } else if ( answers <=55) {
    $("#result").text("melon");
  }


/* tried to have image appear if no value entered
  if (name !== undefined) {
    $("#image").fadeIn();
  } else {
    $("#image").fadeOut();
  }


/* should highlight name input form with red if name isnt enetered
if ( name !== undefined && answer1 !== undefined && answer2 !== undefined && answer3 !== undefined && answer4 !== undefined && answer5 !== undefined) {
  $(".form-control").addClass("red") 
  $("#image").show();
} else {
  $(".form-control").removeClass("red");
  $("#image").hide();
}


/* should alert if name isnt entered
$("#name").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#btn").click();
    }
  });
    $("#btn").click(function() {
      alert("Enter your name");
    });
*/