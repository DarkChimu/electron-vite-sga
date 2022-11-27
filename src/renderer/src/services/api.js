import axios from "axios";

axios.defaults.baseURL = process.env.BACKEND_URL || "http://localhost:3333";
axios.defaults.headers.post["Content-Type"] = "application/json";

export async function createUser(params) {
  try {
    const { data } = await axios.post("/register", params);

    return data;
  } catch (error) {
    return { status: error.response.status, error: error.response.data.error };
  }
}

export async function loginUser(params) {
  try {
    const { data } = await axios.post("/login", params);

    return data;
  } catch (error) {
    console.log(error.response);
    return { status: error.response.status, error: error.response.data.error };
  }
}

export async function fetchProfile() {
  try {
    const { data } = await axios.get("/user/profile");
    return data;
  } catch (error) {
    return { status: error.response.status, error: error.response.data.error };
  }
}
