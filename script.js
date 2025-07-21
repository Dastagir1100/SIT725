function showGreeting() {
  
  var name = document.getElementById("nameInput").value;

  
  if (!name) {
    document.getElementById("greeting").textContent = "Please enter your name!";
    return;
  }

  
  document.getElementById("greeting").textContent = "Hello, " + name + "!";
}
