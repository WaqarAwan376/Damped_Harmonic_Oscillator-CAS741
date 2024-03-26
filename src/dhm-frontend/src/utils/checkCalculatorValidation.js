export const checkCalculatorValidation = (data) => {
  if (!data.mass || parseFloat(data.mass) <= 0) {
    return { message: "Please enter a valid mass value.", status: false };
  } else if (!data.spring_constant || data.spring_constant < 0) {
    return {
      message: "Please enter a valid spring constant value.",
      status: false,
    };
  } else if (parseFloat(data.damping_coefficient) < 0) {
    return {
      message: "Please enter a valid damping coefficient value.",
      status: false,
    };
  } else if (
    !data.initial_displacement ||
    parseFloat(data.initial_displacement) <= 0
  ) {
    return { message: "Please enter the initial displacement", status: false };
  }

  return { status: true };
};
