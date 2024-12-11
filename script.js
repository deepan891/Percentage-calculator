// Show form when an exam level is selected
document.getElementById('exam').addEventListener('change', function () {
    var examType = this.value;
    var marksForm = document.getElementById('marksForm');
    var result = document.getElementById('result');

    if (examType) {
        marksForm.style.display = 'block';
        result.style.display = 'none';
    } else {
        marksForm.style.display = 'none';
        result.style.display = 'none';
    }
});

// Function to calculate the percentage
function calculatePercentage() {
    var totalMarks = document.getElementById('totalMarks').value;
    var obtainedMarks = document.getElementById('obtainedMarks').value;

    if (totalMarks && obtainedMarks) {
        var percentage = (obtainedMarks / totalMarks) * 100;
        document.getElementById('percentage').innerText = percentage.toFixed(2);
        document.getElementById('result').style.display = 'block';
    } else {
        alert("Please enter both total and obtained marks.");
    }
}
