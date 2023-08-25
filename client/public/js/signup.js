// handles input from sign up form
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    const age = document.querySelector("age-signup").value.trim();
    const weight = document.querySelector("weight-signup").value.trim();
    const height = document.querySelector("height-signup").value.trim();

    if (username && email && password && age && weight && height) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, email, password, age, weight, height }),
        headers: { "Content-Type": "application/json" },
      });
  
      console.log(response);
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert(`Password must be at least 8 characters.`);
      }
    }
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);