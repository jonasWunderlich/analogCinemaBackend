import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import Auditorium, {
  IAuditorium,
  IAuditoriumCreate,
} from "@src/models/Auditorium";
import AuditoriumRepo from "@src/repos/AuditoriumRepo";
import AuditoriumSchema from "@src/schemas/AuditoriumSchema";
import { SCREENING_EVENT_INVALID_ERR } from "./ScreeningEventService";

// **** Variables **** //

export const SCREENING_EVENT_NOT_FOUND_ERR = "Auditorium not found";

// **** Functions **** //

/**
 * Get all auditoriums.
 */
function getAll(): Promise<IAuditorium[]> {
  return AuditoriumRepo.getAll();
}

/**
 * Add one auditorium.
 */
async function addOne(auditorium: IAuditoriumCreate): Promise<void> {
  const validate = (await AuditoriumSchema.validateCreateAuditorium(
    auditorium
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      SCREENING_EVENT_INVALID_ERR
    );
  }
  return AuditoriumRepo.add(Auditorium.new(auditorium));
}

/**
 * Update one auditorium.
 */
async function updateOne(auditorium: IAuditorium): Promise<void> {
  const persists = await AuditoriumRepo.persists(auditorium.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Return auditorium
  return AuditoriumRepo.update(auditorium);
}

/**
 * Delete a auditorium by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await AuditoriumRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SCREENING_EVENT_NOT_FOUND_ERR
    );
  }
  // Delete auditorium
  return AuditoriumRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
