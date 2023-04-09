import { IAuditorium, IAuditoriumCreate } from "@src/models/Auditorium";
import Joi from "joi";

const CommonSchema = {
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
};

const AuditoriumSchema = {
  title: Joi.string().min(3).max(50).required(),
  text: Joi.string().min(3).max(3000).allow(""),
  attributes: Joi.allow(""),
  projectors: Joi.allow(""),
  screen: Joi.string().min(3).max(100),
  seats: Joi.number().allow(null),
  sound: Joi.allow(""),
  images: Joi.allow(""),
  cinemaRef: Joi.string(),
  reportRefs: Joi.allow(""),
};

const AuditoriumCreateSchema = Joi.object({
  ...AuditoriumSchema,
});

const AuditoriumUpdateSchema = Joi.object({
  ...CommonSchema,
  ...AuditoriumSchema,
});
/**
 * Validate created report.
 */
async function validateCreateAuditorium(
  auditorium: IAuditoriumCreate
): Promise<any> {
  return AuditoriumCreateSchema.validateAsync(auditorium);
}

/**
 * Validate updated auditorium.
 */
async function validateUpdateAuditorium(auditorium: IAuditorium): Promise<any> {
  return AuditoriumUpdateSchema.validateAsync(auditorium);
}

// **** Export default **** //

export default {
  validateCreateAuditorium,
  validateUpdateAuditorium,
} as const;
