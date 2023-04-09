import { IProjection, IProjectionCreate } from "@src/models/Projection";
import Joi from "joi";

const CommonSchema = {
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
};

const ProjectionSchema = {
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
};

const ProjectionCreateSchema = Joi.object({
  ...ProjectionSchema,
});

const ProjectionUpdateSchema = Joi.object({
  ...CommonSchema,
  ...ProjectionSchema,
});

/**
 * Validate created report.
 */
async function validateCreateProjection(
  projection: IProjectionCreate
): Promise<any> {
  return ProjectionCreateSchema.validateAsync(projection);
}

/**
 * Validate updated projection.
 */
async function validateUpdateProjection(projection: IProjection): Promise<any> {
  return ProjectionUpdateSchema.validateAsync(projection);
}

// **** Export default **** //

export default {
  validateCreateProjection,
  validateUpdateProjection,
} as const;
