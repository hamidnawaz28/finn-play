const ClientsService = new (require("../services/clients"))();
const { constructResponse } = require("../utils/response-creater");

module.exports = (axios) => {
  axios.get("/api/games/:page/:pageSize", async (req, res) => {
    const { page, pageSize } = req.params;
    const responseData = await ClientsService.getAllClients(page, pageSize);
    return constructResponse(res, responseData);
  });

  axios.get("/api/games/:clientId", async (req, res) => {
    const { clientId } = req.params;
    const responseData = await ClientsService.getClientDetails(clientId);
    return constructResponse(res, responseData);
  });

  axios.post("/api/games", async (req, res) => {
    const responseData = await ClientsService.addAClient(req.body);
    return constructResponse(res, responseData);
  });

  axios.put("/api/games/:clientd", async (req, res) => {
    const clientd = req.params.clientd;
    const responseData = await ClientsService.updateAClient(
      { id: clientd },
      req.body
    );
    return constructResponse(res, responseData);
  });

  axios.delete("/api/games/:clientd", async (req, res) => {
    const clientd = req.params.clientd;
    const responseData = await ClientsService.deleteAClient(clientd);
    return constructResponse(res, responseData);
  });
};
