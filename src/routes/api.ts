import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "./constants/Paths";
import User from "@src/models/User";
import UserRoutes from "./UserRoutes";
import CinemaRoutes from "./CinemaRoutes";
import ReportRoutes from "./ReportRoutes";
import cinema from "@src/models/cinema";
import report from "@src/models/report";
import projection from "@src/models/projection";
import ProjectionRoutes from "./ProjectionRoutes";
import ScreeningEventRoutes from "./ScreeningEventRoutes";
import screeningEvent from "@src/models/screening-event";

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

// Add CinemaRouter
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

// Add ReportsRouter
apiRouter.use(Paths.Reports.Base, reportRouter);

// ** Add ProjectionRouter ** //

const projectionRouter = Router();

// Get all projections
projectionRouter.get(Paths.Projections.Get, ProjectionRoutes.getAll);

// Add one projection
projectionRouter.post(
  Paths.Projections.Add,
  validate(["projection", projection.isProjection]),
  ProjectionRoutes.add
);

// Update one projection
projectionRouter.put(
  Paths.Projections.Update,
  validate(["projection", projection.isProjection]),
  ProjectionRoutes.update
);

// Delete one projection
projectionRouter.delete(
  Paths.Projections.Delete,
  validate(["id", "number", "params"]),
  ProjectionRoutes.delete
);

// Add ProjectionsRouter
apiRouter.use(Paths.Projections.Base, projectionRouter);

// ** Add ScreeningEventRouter ** //

const screeningEventRouter = Router();

// Get all screeningEvents
screeningEventRouter.get(
  Paths.ScreeningEvents.Get,
  ScreeningEventRoutes.getAll
);

// Add one screeningEvent
screeningEventRouter.post(
  Paths.ScreeningEvents.Add,
  validate(["screeningEvent", screeningEvent.isScreeningEvent]),
  ScreeningEventRoutes.add
);

// Update one screeningEvent
screeningEventRouter.put(
  Paths.ScreeningEvents.Update,
  validate(["screeningEvent", screeningEvent.isScreeningEvent]),
  ScreeningEventRoutes.update
);

// Delete one screeningEvent
screeningEventRouter.delete(
  Paths.ScreeningEvents.Delete,
  validate(["id", "number", "params"]),
  ScreeningEventRoutes.delete
);

// Add ScreeningEventsRouter
apiRouter.use(Paths.ScreeningEvents.Base, screeningEventRouter);

// **** Export default **** //

export default apiRouter;
