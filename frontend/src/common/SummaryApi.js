const backendUrl = process.env.REACT_APP_BACKEND_URL;

console.log("Backend Url", backendUrl);
const SummaryApi = {
  register: {
    url: `${backendUrl}/api/register`,
    method: "POST",
  },
  login: {
    url: `${backendUrl}/api/login`,
    method: "POST",
  },
  current_user: {
    url: `${backendUrl}/api/current_user`,
    method: "GET",
  }
};

export default SummaryApi;
