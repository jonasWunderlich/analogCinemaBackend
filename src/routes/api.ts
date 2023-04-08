import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "./constants/Paths";
import User from "@src/models/User";
import UserRoutes from "./UserRoutes";
import CinemaRoutes from "./CinemaRoutes";
import ReportRoutes from "./ReportRoutes";
import cinema from "@src/models/cinema";
import report from "@src/models/report";

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(["user", User.isUser]),
  UserRoutes.add
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(["user", User.isUser]),
  UserRoutes.update
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(["id", "number", "params"]),
  UserRoutes.delete
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);

// ** Add CinemaRouter ** //

const cinemaRouter = Router();

// Get all cinemas
cinemaRouter.get(Paths.Cinemas.Get, CinemaRoutes.getAll);

// Add one cinema
cinemaRouter.post(
  Paths.Cinemas.Add,
  validate(["cinema", cinema.isCinema]),
  CinemaRoutes.add
);

// Update one cinema
cinemaRouter.put(
  Paths.Cinemas.Update,
  validate(["cinema", cinema.isCinema]),
  CinemaRoutes.update
);

// Delete one cinema
cinemaRouter.delete(
  Paths.Cinemas.Delete,
  validate(["id", "number", "params"]),
  CinemaRoutes.delete
);

// Add UserRouter
apiRouter.use(Paths.Cinemas.Base, cinemaRouter);

// ** Add ReportRouter ** //

const reportRouter = Router();

// Get all reports
reportRouter.get(Paths.Reports.Get, ReportRoutes.getAll);

// Add one report
reportRouter.post(
  Paths.Reports.Add,
  validate(["report", report.isReport]),
  ReportRoutes.add
);

// Update one report
reportRouter.put(
  Paths.Reports.Update,
  validate(["report", report.isReport]),
  ReportRoutes.update
);

// Delete one report
reportRouter.delete(
  Paths.Reports.Delete,
  validate(["id", "number", "params"]),
  ReportRoutes.delete
);

// Add UserRouter
apiRouter.use(Paths.Reports.Base, reportRouter);

// **** Export default **** //

export default apiRouter;
