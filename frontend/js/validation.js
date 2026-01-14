export const validateForm = ({ name, email, interest, message }) => {
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name is required";
  }

  if (!email || !email.includes("@")) {
    errors.email = "Valid email is required";
  }

  if (!interest) {
    errors.interest = "Please select an interest";
  }

  if (!message || message.trim().length < 5) {
    errors.message = "Message is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
