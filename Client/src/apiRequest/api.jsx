import axios from "axios";

const BaseURL = "http://localhost:5050/api";

export async function getAllBlogs() {
  let res = await axios.get(BaseURL + "/getAllBlogs");
  if (res.status === 200) {
    return res.data.result.data;
  } else {
    return [];
  }
}

export async function getTeamMember() {
  let res = await axios.get(BaseURL + "/getTeamMember");
  if (res.status === 200) {
    return res.data.result.data;
  } else {
    return [];
  }
}

export async function getService() {
  let res = await axios.get(BaseURL + "/getService");
  if (res.status === 200) {
    return res.data.result.data;
  } else {
    return [];
  }
}
