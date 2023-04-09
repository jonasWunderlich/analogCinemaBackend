import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import Projection, {
  IProjection,
  IProjectionCreate,
} from "@src/models/Projection";
import ProjectionRepo from "@src/repos/ProjectionRepo";
import ProjectionSchema from "@src/schemas/ProjectionSchema";
import { SCREENING_EVENT_INVALID_ERR } from "./ScreeningEventService";

// **** Variables **** //

export const PROJECTION_NOT_FOUND_ERR = "Projection not found";
export const PROJECTION_INVALID_RR = "Projection not found";

// **** Functions **** //

/**
 * Get all projections.
 */
function getAll(): Promise<IProjection[]> {
  return ProjectionRepo.getAll();
}

/**
 * Get one projections.
 */
function getOne(id: string): Promise<IProjection | null> {
  return ProjectionRepo.getOne(id);
}

/**
 * Add one projection.
 */
async function addOne(projection: IProjectionCreate): Promise<void> {
  const validate = (await ProjectionSchema.validateCreateProjection(
    projection
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      SCREENING_EVENT_INVALID_ERR
    );
  }
  return ProjectionRepo.add(Projection.new(projection));
}

/**
 * Update one projection.
 */
async function updateOne(projection: IProjection): Promise<void> {
  const persists = await ProjectionRepo.persists(projection.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, PROJECTION_NOT_FOUND_ERR);
  }
  const validate = (await ProjectionSchema.validateUpdateProjection(
    projection
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(HttpStatusCodes.BAD_REQUEST, PROJECTION_INVALID_RR);
  }
  // Return projection
  return ProjectionRepo.update(projection);
}

/**
 * Delete a projection by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await ProjectionRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, PROJECTION_NOT_FOUND_ERR);
  }
  // Delete projection
  return ProjectionRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  addOne,
  updateOne,
  delete: _delete,
} as const;
