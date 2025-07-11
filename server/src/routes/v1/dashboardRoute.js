import express from "express";
import { StatusCodes } from "http-status-codes";
import { dashboardController } from "~/controllers/dashboardController";
import { authMiddleware } from "~/middlewares/authMiddleware";
import { rbac_middleware_1 } from "~/middlewares/rbac-Middleware-level-1";
import { rbac_middleware_2 } from "~/middlewares/rbac-Middleware-level-2";
import { MOCK_ROLES_LEVEL_1 } from "~/models/mock_database_level_1";

const Router = express.Router();

Router.route("/access").get(
  authMiddleware.isAuthorized,
  dashboardController.access
);

Router.route("/messages").get(
  authMiddleware.isAuthorized,
  // rbac_middleware_1.isValidPermission([
  //   MOCK_ROLES_LEVEL_1.ADMIN,
  //   MOCK_ROLES_LEVEL_1.MODERATOR,
  // ]),
  rbac_middleware_2.í
  (['read_messages']),
  (req, res) => {
    res
      .status(StatusCodes.OK)
      .json({ message: "Success to get API: /message" });
  }
);

//admin-tools only admin access
Router.route("/admin-tools").get(
  authMiddleware.isAuthorized,
  // rbac_middleware_1.isValidPermission([
  //   MOCK_ROLES_LEVEL_1.ADMIN,
  // ]),
  rbac_middleware_2.isValidPermission(['read_admin_tools']),
  (req, res) => {
    res
      .status(StatusCodes.OK)
      .json({ message: "Success to get API: /admin-tools" });
  }
);
export const dashboardRoute = Router;
