import CinemaRepo from "@src/repos/CinemaRepo";
import CinemaSchema from "@src/schemas/CinemaSchema";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import Cinema, { ICinema, ICinemaCreate } from "@src/models/Cinema";

// **** Variables **** //

export const CINEMA_NOT_FOUND_ERR = "Cinema not found";
export const CINEMA_INVALID_ERR = "Cinema has invalid data";

// **** Functions **** //

/**
 * Get all cinemas.
 */
function getAll(): Promise<ICinema[]> {
  return CinemaRepo.getAll();
}

/**
 * Add one cinema.
 */
async function addOne(cinema: ICinemaCreate): Promise<void> {
  const validate = (await CinemaSchema.validateCreateCinema(
    cinema
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(HttpStatusCodes.BAD_REQUEST, CINEMA_INVALID_ERR);
  }
  return CinemaRepo.add(Cinema.new(cinema));
}

/**
 * Update one cinema.
 */
async function updateOne(cinema: ICinema): Promise<void> {
  const persists = await CinemaRepo.persists(cinema.id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, CINEMA_NOT_FOUND_ERR);
  }
  const validate = (await CinemaSchema.validateUpdateCinema(
    cinema
  )) as Promise<void>;
  if (!validate) {
    throw new RouteError(HttpStatusCodes.BAD_REQUEST, CINEMA_INVALID_ERR);
  }
  // Return cinema
  return CinemaRepo.update(cinema);
}

/**
 * Delete a cinema by their id.
 */
async function _delete(id: string): Promise<void> {
  const persists = await CinemaRepo.persists(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, CINEMA_NOT_FOUND_ERR);
  }
  // Delete cinema
  return CinemaRepo.delete(id);
}

// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
