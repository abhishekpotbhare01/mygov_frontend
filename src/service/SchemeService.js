import axios from "axios";
import Swal from "sweetalert2";
const SchemeClient = axios.create({
  baseURL: "http://localhost:8080/scheme",
  headers: {
    "Content-Type": "application/json",
  },
});

SchemeClient.interceptors.request.use(config => {
  const token = sessionStorage.getItem('jwttoken'); // Get the JWT token from localStorage or sessionStorage

  if (token && !config.url.includes('/user/login') && !config.url.includes('/user/register')) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

const GetAllSchemes = async () => {
  try {
    const response = await SchemeClient.get("/");

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      Swal.fire({
        title: 'Unauthorized',
        text: 'You are not authorized to access this resource. Please log in.',
        icon: 'error',
        confirmButtonText: 'Login',
        customClass: {
          popup: 'custom-popup-class',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate('/admin-login');
          window.location.href = '/user/login';
        }
      });
    }
    console.error("Error while Retriving All Schemes:", error);
    throw error;

  }
};

const getAllSchemeId = async (userid) => {
  try {

    const resp = await SchemeClient.get("/userId/" + parseInt(userid));
    return resp.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      Swal.fire({
        title: 'Unauthorized',
        text: 'You are not authorized to access this resource. Please log in.',
        icon: 'error',
        confirmButtonText: 'Login',
        customClass: {
          popup: 'custom-popup-class',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate('/admin-login');
          window.location.href = '/user/login';
        }
      });
    }

    console.log("error while getting scheme id data!!!", error);
    throw error;

  }

};
export default { GetAllSchemes, getAllSchemeId };
