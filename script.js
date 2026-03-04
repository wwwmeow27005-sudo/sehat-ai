function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseFloat(document.getElementById("feet").value);
    let inches = parseFloat(document.getElementById("inches").value);

    if (!weight || !feet) {
        document.getElementById("result").innerText = "Please enter valid values";
        return;
    }

    let heightInMeters = (feet * 0.3048) + (inches * 0.0254);
    let bmi = weight / (heightInMeters * heightInMeters);

    let message = "";

    if (bmi < 18.5) {
        message = "Underweight – You should eat more healthy food and protein.";
    } 
    else if (bmi >= 18.5 && bmi < 24.9) {
        message = "Normal weight – Great! Your BMI is in healthy range.";
    } 
    else if (bmi >= 25 && bmi < 29.9) {
        message = "Overweight – Try reducing junk food and exercise.";
    } 
    else {
        message = "Obese – Health risk. Consider consulting a health expert.";
    }

    let suggestion = "";

if (bmi < 18.5) {
    suggestion = "Eat protein: eggs, milk, lentils.";
}
else if (bmi >= 25) {
    suggestion = "Avoid junk food and walk daily.";
}
else {
    suggestion = "Keep balanced diet and exercise.";
}

document.getElementById("result").innerText =
"BMI: " + bmi.toFixed(2) + "\n" + message + "\nSuggestion: " + suggestion;

}
let suggestion = "";

if (bmi < 18.5) {
    suggestion = "Eat 2500+ calories with protein.";
}
else if (bmi >= 18.5 && bmi < 24.9) {
    suggestion = "2000-2200 calories is fine.";
}
else {
    suggestion = "Reduce calories and avoid junk food.";
}

document.getElementById("result").innerText =
"BMI: " + bmi.toFixed(2) + "\n" + message + "\nSuggestion: " + suggestion;
function clearFields() {
    document.getElementById("weight").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("result").innerText = "";
}
let history = localStorage.getItem("bmiHistory") || "";
history += "BMI: " + bmi.toFixed(2) + " - " + message + "<br>";
localStorage.setItem("bmiHistory", history);
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user && pass) {
        localStorage.setItem("user", user);
        alert("Login Successful");
    } else {
        alert("Enter details");
    }
}


document.getElementById("history").innerHTML = history;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Service Worker Registered"));
}


