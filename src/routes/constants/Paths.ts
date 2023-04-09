/**
 * Express router paths go here.
 */

import { Immutable } from "@src/other/types";

const Paths = {
  Base: "/api",
  Users: {
    Base: "/users",
    Get: "/all",
    GetOne: "/get/:id",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  ScreeningEvents: {
    Base: "/events",
    Get: "/all",
    GetOne: "/get/:id",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Cinemas: {
    Base: "/cinemas",
    Get: "/all",
    GetOne: "/get/:id",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Reports: {
    Base: "/reports",
    Get: "/all",
    GetOne: "/get/:id",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Projections: {
    Base: "/projections",
    Get: "/all",
    GetOne: "/get/:id",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Auditoriums: {
    Base: "/auditoriums",
    Get: "/all",
    GetOne: "/get/:id",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
