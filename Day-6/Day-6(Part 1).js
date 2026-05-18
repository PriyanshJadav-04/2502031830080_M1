function validate(form) {
  let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phone = /^\d{10}$/;

  if (form.Name.value.trim() === "") {
    alert("Please Enter Your Name");
    return false;
  }
  if (!email.test(form.EMail.value)) {
    alert("Please enter a valid e-mail address.");
    return false;
  }
  if (form.Password.value.length < 6) {
    alert("Password should be at least 6 characters long.");
    return false;
  }
  if (!phone.test(form.Telephone.value)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }
  if (form.Subject.value === "") {
    alert("Please select your course.");
    return false;
  }

  return true;
}

let product = document.getElementById("product");
let qunatity = document.getElementById("quantity");
let amount = document.getElementById("amount");
let prize = document.getElementById("prize");

product.addEventListener("change", () => {
  prize.value = product.value;
});

amount.addEventListener("focus", () => {
  amount.value = product.value * qunatity.value;
});