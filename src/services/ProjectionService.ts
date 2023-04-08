import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { Projection } from "@src/models/projection";
import ProjectionRepo from "@src/repos/ProjectionRepo";

// **** Variables **** //

export const SCREENING_EVENT_NOT_FOUND_ERR = "Projection not found";

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
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
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
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
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
