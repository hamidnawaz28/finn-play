const express = require("express");
const app = express();
const session = require("express-session");
var bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
var cors = require("cors");
const FILE_PATH = "./data/initial.json";
const initialData = require(FILE_PATH);
const { HTTP_STATUS, ROLES } = require("./utils/constants");
require("dotenv").config();
const { SERVER_PORT = 5000, SESSION_SECRET, COOKIE_AGE = 60000 } = process.env;

const {
  successResponse,
  errorResponse,
  constructResponse,
  findIndexInObject,
  updateAnItemInObject,
  updateAValueInAnItemOfObject,
} = require("./utils/response-creater");

let { games, providers, groups } = initialData;
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: Number(COOKIE_AGE), //valid for 10 mints only
    },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [
  {
    id: 1,
    email: "player@finnplay.com",
    role: "player",
    password: "player@123",
    sessionId: "",
  },
  {
    id: 2,
    email: "admin@finnplay.com",
    role: "admin",
    password: "admin@123",
    sessionId: "",
  },
];

const authenticateRole =
  (...roles) =>
  (req, res, next) => {
    const sessionId = req.session.id;
    const findUser = users.find((user) => user.sessionId == sessionId);
    if (findUser) {
      const userRole = findUser.role;
      const haveAccess = roles.includes(userRole);
      if (haveAccess) next();
    } else {
      constructResponse(
        res,
        errorResponse(HTTP_STATUS.UNAUTHORIZED, "Unauthorized role!")
      );
    }
  };

app.use(express.static(path.join(path.resolve("../client/build"))));

const authenticate = (req, res, next) => {
  if (req.session.sessionId) {
    next();
  } else {
    constructResponse(
      res,
      errorResponse(HTTP_STATUS.UNAUTHORIZED, "Unauthorized!")
    );
  }
};

app.get("/api/sign-in", (req, res) => {
  const { email, password } = req.query;
  // const { email, password } = req.body;
  const userIndex = users.findIndex(
    (user) => user.email == email && user.password == password
  );
  if (userIndex != -1) {
    req.session.sessionId = req.session.id;
    users = updateAValueInAnItemOfObject(
      users,
      userIndex,
      "sessionId",
      req.session.id
    );
    const userRole = users[userIndex].role;
    constructResponse(
      res,
      successResponse(
        { role: userRole },
        HTTP_STATUS.OK,
        "Successfully logged in!"
      )
    );
  } else {
    constructResponse(
      res,
      errorResponse(
        HTTP_STATUS.BAD_REQUEST,
        "Failed to sign in or invalid credentials!"
      )
    );
  }
});

app.get("/api/sign-out", async (req, res) => {
  const destroy = req.session.destroy();
  if (destroy) {
    constructResponse(
      res,
      successResponse({}, HTTP_STATUS.OK, "Successfully log out!")
    );
  } else {
    constructResponse(
      res,
      errorResponse(HTTP_STATUS.BAD_REQUEST, "Failed to log out!")
    );
  }
});

const validateGroup = (req, res, next) => {
  const groupId = Number(req.params.groupId);
  const itemIndex = findIndexInObject(groups, groupId);
  if (itemIndex == -1) {
    constructResponse(
      res,
      errorResponse(HTTP_STATUS.BAD_REQUEST, "Group Not Found!")
    );
  }
  next();
};

const validateGames = (req, res, next) => {
  const addedGames = req.body?.games || [];
  const allValid = addedGames.every((gameId) =>
    games.some((game) => game.id == gameId)
  );
  if (allValid) {
    next();
  }
  constructResponse(
    res,
    errorResponse(HTTP_STATUS.BAD_REQUEST, "Games Not Found!")
  );
};

app.get(
  "/api/grouped-games",
  // authenticate,
  // authenticateRole(ROLES.ADMIN),
  (req, res) => {
    let groupedGamesIds = [];
    groups.forEach((group) => {
      groupedGamesIds = [
        ...groupedGamesIds,
        ...group.games.map((game) => ({
          gameId: game,
          groupId: group.id,
          groupName: group.name,
        })),
      ];
    });

    groupedGamesIds = groupedGamesIds.map((game) => {
      const gamesoBJ = games.find((gameData) => gameData.id == game.gameId);
      return {
        groupId: game.groupId,
        groupName: game.groupName,
        ...gamesoBJ,
      };
    });

    constructResponse(
      res,
      successResponse(
        groupedGamesIds,
        HTTP_STATUS.OK,
        "Successfully got the data!"
      )
    );
  }
);

app.delete("/api/group/:groupId", validateGroup, (req, res) => {
  const groupId = Number(req.params.groupId);
  groups = groups.filter((group) => group.id != groupId);
  constructResponse(
    res,
    successResponse({}, HTTP_STATUS.OK, "Successfully deleted!")
  );
});

app.put("/api/group/:groupId", validateGroup, validateGames, (req, res) => {
  const groupId = req.params.groupId;
  const itemIndex = findIndexInObject(groups, groupId);
  groups = updateAnItemInObject(groups, itemIndex, req.body);
  constructResponse(
    res,
    successResponse(
      { ...groups[itemIndex] },
      HTTP_STATUS.OK,
      "Successfull Updated!"
    )
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve("../client/build/index.html")));
});

const server = app.listen(SERVER_PORT, () => {
  console.log(`Server successfully running on port ${SERVER_PORT}`);
});

module.exports = server;
