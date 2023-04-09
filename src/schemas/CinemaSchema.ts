import { ICinema, ICinemaCreate } from "@src/models/Cinema";
import Joi from "joi";

const CommonSchema = {
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
};

const CinemaSchema = {
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
};

const CinemaCreateSchema = Joi.object({
  ...CinemaSchema,
});

const CinemaUpdateSchema = Joi.object({
  ...CommonSchema,
  ...CinemaSchema,
});
/**
 * Validate created report.
 */
async function validateCreateCinema(cinema: ICinemaCreate): Promise<any> {
  return CinemaCreateSchema.validateAsync(cinema);
}

/**
 * Validate updated cinema.
 */
async function validateUpdateCinema(cinema: ICinema): Promise<any> {
  return CinemaUpdateSchema.validateAsync(cinema);
}

// **** Export default **** //

export default {
  validateCreateCinema,
  validateUpdateCinema,
} as const;
