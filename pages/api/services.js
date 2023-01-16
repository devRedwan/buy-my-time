import axios from "axios";

export async function getServices() {
  const res = await axios.get("/api/services");
  return res.data;
}
