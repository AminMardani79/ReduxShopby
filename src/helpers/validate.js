export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Enter your email";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Your email is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Enter your password";
  } else if (data.password.length < 6) {
    errors.password = "Password should be atleast 6 characters or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name) {
      errors.name = "Enter your name";
    } else {
      delete errors.name;
    }
    if (data.password && !data.confirmPassword) {
      errors.confirmPassword = "Enter your confirm password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Please accept our regulations";
    }
  }
  return errors;
};
