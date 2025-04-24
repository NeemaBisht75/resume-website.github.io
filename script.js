document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;
  document.getElementById('responseMessage').innerText = `Thank you, ${name}! Your feedback has been recorded.`;
  this.reset();
});
