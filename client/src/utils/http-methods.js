import axios from "axios";

export const get = async (url) => {
  try {
    let res = null;
    res = await axios.get(url);
    return {
      success: res.data.success,
      data: res.data.data,
      message: res.data.message,
    };
  } catch (error) {
    return parseErrors(error.response);
  }
};

export const update = async (url, id, data) => {
  try {
    let res = null;
    res = await axios.put(`${url}/${id}`, data);
    return {
      success: res.data.success,
      data: res.data.data,
      message: res.data.message,
    };
  } catch (error) {
    return parseErrors(error.response);
  }
};

export const del = async (url, id) => {
  try {
    let res = null;
    res = await axios.delete(`${url}/${id}`);
    return {
      success: res.data.success,
      data: res.data.data,
      message: res.data.message,
    };
  } catch (error) {
    return parseErrors(error.response);
  }
};

const parseErrors = (errObj) => {
  try {
    let message = "";
    const { errors } = errObj.data;
    switch (errObj.status) {
      case 400:
        errors.map((obj, index) => {
          message = `${message + obj.param.toUpperCase()}: ${obj.msg}`;
          message = index === errors.length - 1 ? message : `${message} ,`;
          return message;
        });
        return {
          success: false,
          message,
        };
      case 401:
        return {
          success: false,
          message:
            errObj.data && errObj.data.message
              ? errObj.data.message
              : "You are not authorized. Please login",
        };
      case 403:
      case 404:
      case 409:
      case 422:
        return {
          success: false,
          message: errObj.data
            ? errObj.data.message
            : errObj.message
            ? errObj.message
            : "An error occured while processing your request.",
        };
      default:
        return {
          success: false,
          message: "An error occured while processing your request.",
        };
    }
  } catch (error) {
    return {
      success: false,
      message: "An error occured while processing your request.",
    };
  }
};
