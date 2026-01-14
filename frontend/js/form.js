import { validateForm } from "./validation.js";
import { submitContactForm } from "./api.js";

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    interest: form.interest.value,
    message: form.message.value,
  };

  const { isValid, errors } = validateForm(formData);

  if (!isValid) {
    console.log(errors); // temporary
    return;
  }

  try {
    form.classList.add("form-loading");

    await submitContactForm(formData);

    form.reset();
    alert("Message sent successfully");
  } catch (error) {
    alert(error.message);
  } finally {
    form.classList.remove("form-loading");
  }
});
