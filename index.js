document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var grades = [];
    var credits = [];
    for (var i = 1; i <= 8; i++) {
      var gradeInput = document.getElementById("gra" + i);
      var creditInput = document.getElementById("cre" + i);
      grades.push(gradeInput.value);
      credits.push(parseInt(creditInput.value));
    }

    var sgpa = calculateSGPA(grades, credits);

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your SGPA is: " + sgpa.toFixed(2);
  });

  function calculateSGPA(grades, credits) {
    var totalCredits = 0;
    var totalGradePoints = 0;

    var gradePoints = {
      "O": 10,
      "A+": 9,
      "A": 8,
      "B+": 7,
      "B": 6,
      "C": 5,
      "P": 4,
      "F": 0
    };

    for (var i = 0; i < grades.length; i++) {
      var grade = grades[i].toUpperCase();
      var credit = credits[i];
      totalCredits += credit;
      totalGradePoints += gradePoints[grade] * credit;
    }

    var sgpa = totalGradePoints / totalCredits;
    return sgpa;
  }
});
