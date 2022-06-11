const ClientRepo = new (require("../data/repo/clients"))();

const { HTTP_STATUS } = require("../utils/constants");
const {
  successResponse,
  errorResponse,
  internalServerErrorResponse,
} = require("../utils/response-creater");

module.exports = class ResultService {
  async getAllClients(page = 1, pageSize = 10) {
    try {
      const skip = (page - 1) * pageSize;
      const limit = pageSize;

      const rows = await ClientRepo.allClients(skip, limit);
      if (rows === 0) {
        return errorResponse(HTTP_STATUS.NOT_FOUND, "Results not found.");
      }
      const count = await ClientRepo.getRowsCount();

      return successResponse({ results: rows, count: count }, HTTP_STATUS.OK);
    } catch (error) {
      return internalServerErrorResponse();
    }
  }

  async getClientDetails(clientId) {
    try {
      const clientDetails = await ClientRepo.getById(clientId);
      return successResponse(clientDetails, HTTP_STATUS.OK);
    } catch (error) {
      return internalServerErrorResponse();
    }
  }

  async addAClient(object = {}) {
    try {
      const addedObject = await this.repository.add(object);
      if (addedObject) {
        return successResponse({ id: addedObject.id }, HTTP_STATUS.CREATED);
      }
      return errorResponse(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        `An error occurred while adding ${this.modelName}. Please try again later.`
      );
    } catch (error) {
      return internalServerErrorResponse(
        `An error occurred while adding ${this.modelName}. Please try again later.`
      );
    }
  }

  async updateAClient(condition = {}, fieldsToUpdate = {}) {
    try {
      const objectToUpdate = await this.repository.getOne(condition);
      if (!objectToUpdate) {
        return errorResponse(
          HTTP_STATUS.NOT_FOUND,
          `${this.modelName} not found`
        );
      }
      const updatedObject = await this.repository.update(condition, {
        ...fieldsToUpdate,
        updatedAt: new Date(),
      });
      if (updatedObject) {
        return successResponse(updatedObject, HTTP_STATUS.OK);
      }
      return errorResponse(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        `An error occurred while updating ${this.modelName}. Please try again later.`
      );
    } catch (error) {
      return internalServerErrorResponse(
        `An error occurred while updating ${this.modelName}. Please try again later.`
      );
    }
  }

  async deleteAClient(id) {
    try {
      const objToDelete = await this.repository.getOne({ id });
      if (!objToDelete) {
        return errorResponse(
          HTTP_STATUS.NOT_FOUND,
          `${this.modelName} not found`
        );
      }
      const deletedObject = await this.repository.delete({ id });
      if (deletedObject) {
        return successResponse({ id: deletedObject.id }, HTTP_STATUS.OK);
      }
      return errorResponse(
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        `An error occurred while deleting ${this.modelName}. Please try again later.`
      );
    } catch (error) {
      return internalServerErrorResponse(
        `An error occurred while deleting ${this.modelName}. Please try again later.`
      );
    }
  }
};
