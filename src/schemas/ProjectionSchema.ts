import { Projection } from "@src/models/projection";
import Joi from "joi";

/**
 * Delete one projection.
 */
async function validateProjection(projection: Projection): Promise<any> {
  return ProjectionSchema.validateAsync(projection);
}

export const ProjectionSchema = Joi.object({
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
  title: Joi.string().min(3).max(50).required(),
  text: Joi.string().min(3).max(3000),

  date: Joi.string().min(3).max(100),
  images: Joi.array(),

  tmdb: Joi.string().min(3).max(50).required(),
  black: Joi.boolean(),
  agent: Joi.string().min(3).max(100).allow(""),

  reportRefs: Joi.array(),
  cinemaRef: Joi.string().allow(""),
  eventRef: Joi.string().allow(""),
  auditoriumRef: Joi.string().allow(""),
});

// **** Export default **** //

export default {
  validateProjection,
} as const;
