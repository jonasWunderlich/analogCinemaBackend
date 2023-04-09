import { Cinema } from "@src/models/cinema";
import Joi from "joi";

/**
 * Delete one cinema.
 */
async function validateCinema(cinema: Cinema): Promise<any> {
  return CinemaSchema.validateAsync(cinema);
}

export const CinemaSchema = Joi.object({
  id: Joi.string().min(3).max(40).required(),
  createdAt: Joi.string().min(3).max(40),
  lastModifiedAt: Joi.string().min(3).max(40),
  title: Joi.string().min(3).max(50).required(),
  geoCoordinates: Joi.array(),
  text: Joi.string().min(3).max(3000),
  street: Joi.string().min(3).max(100).allow(""),
  city: Joi.string().min(3).max(100).allow(""),
  postcode: Joi.string().min(3).max(100).allow(""),
  mail: Joi.string().email().min(3).max(100).allow(""),
  phone: Joi.string().min(3).max(100).allow(""),
  linkHomepage: Joi.string().uri().min(3).max(100).allow(""),
  linkProgram: Joi.string().uri().min(3).max(100).allow(""),
  linkOpeningHours: Joi.string().uri().min(3).max(100).allow(""),
  images: Joi.array(),
  auditoriumRefs: Joi.array(),
  projectionRefs: Joi.array(),
  reportRefs: Joi.array(),
  eventRefs: Joi.array(),
});

// **** Export default **** //

export default {
  validateCinema,
} as const;
