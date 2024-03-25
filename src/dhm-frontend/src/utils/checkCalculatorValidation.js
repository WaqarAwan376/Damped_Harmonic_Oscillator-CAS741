export const checkCalculatorValidation = (data) => {
  if (!data.mass) {
    return { message: "Please enter the mass of the body", status: false };
  }
  if (parseFloat(data.mass) < 0) {
    return { message: "Mass cannot be a negative value", status: false };
  }
  if (!data.spring_constant) {
    return { message: "Please enter the spring constant", status: false };
  }
  if (!data.initial_displacement) {
    return { message: "Please enter the initial displacement", status: false };
  }
  if (!data.initial_velocity) {
    return { message: "Please enter the initial velocity", status: false };
  }

  return { status: true };
};
