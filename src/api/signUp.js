const { default: axios } = require("axios");

export const authenticateApi = (data) => {
console.log("🚀 ~ authenticateApi ~ data", data)
  axios
    .post("https://registertest.free.beeceptor.com/init", {
      uid: data.uid,
      email: data.email,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
