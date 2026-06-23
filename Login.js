
export const validateLogin = (email, password) => {
  if (!email || !password) return "Please fill in all fields.";
  return null;
};
export const handleLogin = async (email, password, setError, setLoading, navigate) => {
  setError("");
  const validationError = validateLogin(email, password);
  if (validationError) return setError(validationError);

  setLoading(true);
  try {
    // هنا هتحط الـ API أو Auth بتاعك
    console.log("Login:", email);
    navigate("/"); // بعد الـ login هيروح للـ home
  // eslint-disable-next-line no-unused-vars
  } catch (err) {
    setError("Invalid email or password.");
  } finally {
    setLoading(false);
  }
};

export const handleGoogleLogin = async (setError) => {
  setError("");
  try {
    // هنا هتحط Google Auth
    console.log("Google login");
  } catch (err) {
    setError(err.message);
  }
};