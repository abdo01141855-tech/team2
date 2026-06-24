import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Config";
export const validateRegister = (firstName, lastName, email, password, agreed) => {
  if (!firstName || !lastName || !email || !password)
    return "Please fill in all fields.";

  if (!agreed)
    return "Please agree to the Terms and Privacy Policy.";

  if (password.length < 8)
    return "Password must be at least 8 characters.";

  return null;
};

export const handleRegister = async (
  firstName,
  lastName,
  email,
  password,
  agreed,
  setError,
  setLoading,
  navigate
) => {
  setError("");

  const validationError = validateRegister(
    firstName,
    lastName,
    email,
    password,
    agreed
  );

  if (validationError) {
    setError(validationError);
    return;
  }

  setLoading(true);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`,
    });

    navigate("/login");
  } catch (err) {
    switch (err.code) {
      case "auth/email-already-in-use":
        setError("This email is already in use.");
        break;

      case "auth/invalid-email":
        setError("Invalid email address.");
        break;

      case "auth/weak-password":
        setError("Password is too weak.");
        break;

      default:
        setError(err.message);
    }
  } finally {
    setLoading(false);
  }
};

export const handleGoogleRegister = async (setError) => {
  setError("");

  try {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
  } catch (err) {
    setError(err.message);
  }
};