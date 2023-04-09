import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { Projection } from "@src/models/projection";
import ProjectionRepo from "@src/repos/ProjectionRepo";
import ProjectionSchema from "@src/schemas/ProjectionSchema";

// **** Variables **** //

export const PROJECTION_NOT_FOUND_ERR = "Projection not found";
export const PROJECTION_INVALID_RR = "Projection not found";

// **** Functions **** //

/**
 * Get all projections.
 */
function getAll(): Promise<Projection[]> {
  return ProjectionRepo.getAll();
}

/**
 * Add one projection.
 */
function addOne(projection: Projection): Promise<void> {
  return ProjectionRepo.add(projection);
}

/**
 * Update one projection.
 */
async function updateOne(projection: Projection): Promise<void> {
  const persists = await ProjectionRepo.persists(projection.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, PROJECTION_NOT_FOUND_ERR);
  }
  const validate = (await ProjectionSchema.validateProjection(
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
  addOne,
  updateOne,
  delete: _delete,
} as const;
