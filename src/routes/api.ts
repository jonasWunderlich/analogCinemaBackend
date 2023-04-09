import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "./constants/Paths";
import User from "@src/models/User";
import UserRoutes from "./UserRoutes";
import ReportRoutes from "./ReportRoutes";
import report from "@src/models/Report";
import projection from "@src/models/Projection";
import ProjectionRoutes from "./ProjectionRoutes";
import screeningEvent from "@src/models/ScreeningEvent";
import cinema from "@src/models/Cinema";
import CinemaRoutes from "./CinemaRoutes";
import ScreeningEventRoutes from "./ScreeningEventRoutes";
import AuditoriumRoutes from "./AuditoriumRoutes";
import Auditorium from "@src/models/Auditorium";

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);

// Get one user
userRouter.get(
  Paths.Users.GetOne,
  validate(["id", "number", "params"]),
  UserRoutes.getOne
);

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

// Get one cinema
cinemaRouter.get(
  Paths.Cinemas.GetOne,
  validate(["id", "string", "params"]),
  CinemaRoutes.getOne
);

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
  validate(["id", "string", "params"]),
  CinemaRoutes.delete
);

// Add CinemaRouter
apiRouter.use(Paths.Cinemas.Base, cinemaRouter);

// ** Add ReportRouter ** //

const reportRouter = Router();

// Get all reports
reportRouter.get(Paths.Reports.Get, ReportRoutes.getAll);

// Get one report
reportRouter.get(
  Paths.Reports.GetOne,
  validate(["id", "string", "params"]),
  ReportRoutes.getOne
);

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
  validate(["id", "string", "params"]),
  ReportRoutes.delete
);

// Add ReportsRouter
apiRouter.use(Paths.Reports.Base, reportRouter);

// ** Add ProjectionRouter ** //

const projectionRouter = Router();

// Get all projections
projectionRouter.get(Paths.Projections.Get, ProjectionRoutes.getAll);

// Get one projection
projectionRouter.get(
  Paths.Projections.GetOne,
  validate(["id", "string", "params"]),
  ProjectionRoutes.getOne
);

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
  validate(["id", "string", "params"]),
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

// Get one screeningEvent
screeningEventRouter.get(
  Paths.ScreeningEvents.GetOne,
  validate(["id", "string", "params"]),
  ScreeningEventRoutes.getOne
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
  validate(["id", "string", "params"]),
  ScreeningEventRoutes.delete
);

// Add ScreeningEventsRouter
apiRouter.use(Paths.ScreeningEvents.Base, screeningEventRouter);

// ** Add ScreeningEventRouter ** //

const auditoriumRouter = Router();

// Get all auditoriums
auditoriumRouter.get(Paths.Auditoriums.Get, AuditoriumRoutes.getAll);

// Get one auditorium
auditoriumRouter.get(
  Paths.Auditoriums.GetOne,
  validate(["id", "string", "params"]),
  AuditoriumRoutes.getOne
);

// Add one auditorium
auditoriumRouter.post(
  Paths.Auditoriums.Add,
  validate(["auditorium", Auditorium.isAuditorium]),
  AuditoriumRoutes.add
);

// Update one auditorium
auditoriumRouter.put(
  Paths.Auditoriums.Update,
  validate(["auditorium", Auditorium.isAuditorium]),
  AuditoriumRoutes.update
);

// Delete one auditorium
auditoriumRouter.delete(
  Paths.Auditoriums.Delete,
  validate(["id", "string", "params"]),
  AuditoriumRoutes.delete
);

// Add AuditoriumsRouter
apiRouter.use(Paths.Auditoriums.Base, auditoriumRouter);

// **** Export default **** //

export default apiRouter;
