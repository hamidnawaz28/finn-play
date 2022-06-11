const { HTTP_STATUS } = require("./constants");

const successResponse = (data, httpStatusCode, successMessage = "") => {
  return {
    data: data,
    status: httpStatusCode ? httpStatusCode : HTTP_STATUS.OK,
    message: successMessage,
    success: true,
  };
};

const errorResponse = (httpStatusCode, errorMessage, data = null) => {
  return {
    data,
    status: httpStatusCode ? httpStatusCode : HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message: errorMessage
      ? errorMessage
      : "Internal server error. Please try again later.",
    success: false,
  };
};

const internalServerErrorResponse = (message = null) => {
  return errorResponse(
    HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message || "Internal server error.Please try again later."
  );
};

const constructResponse = (expressResponseObject, responseData) => {
  if (responseData.success) {
    return expressResponseObject.status(responseData.status).send({
      data: responseData.data,
      message: responseData.message,
      success: true,
    });
  } else {
    if (responseData.data) {
      return expressResponseObject.status(responseData.status).send({
        data: responseData.data,
        message: responseData.message,
        success: false,
      });
    }
    return expressResponseObject.status(responseData.status).send({
      message: responseData.message,
      success: false,
    });
  }
};

const findIndexInObject = (array, id) =>
  array.findIndex((item) => item.id == id);

const updateAnItemInObject = (array, index, data) => {
  let prevData = { ...array[index] };
  array[index] = { ...prevData, ...data };
  return array;
};

const updateAValueInAnItemOfObject = (array, index, key, value) => {
  let prevData = { ...array[index] };
  prevData = { ...prevData, [key]: value };
  array[index] = { ...prevData };
  return array;
};

module.exports = {
  successResponse,
  errorResponse,
  constructResponse,
  internalServerErrorResponse,
  findIndexInObject,
  updateAnItemInObject,
  updateAValueInAnItemOfObject,
};
