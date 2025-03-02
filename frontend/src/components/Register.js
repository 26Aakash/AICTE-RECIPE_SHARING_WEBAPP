import { registerUser } from "../utils/api";

const handleSubmit = async () => {
  try {
    const response = await registerUser({ name: "John", email: "john@example.com", password: "123456" });
    console.log("User registered:", response.data);
  } catch (error) {
    console.error("Error:", error.response?.data);
  }
};
