import {
  IScreeningEvent,
  IScreeningEventCreate,
} from "@src/models/ScreeningEvent";
import Joi from "joi";

const CommonSchema = {
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
};

const ScreeningEventSchema = {
  title: Joi.string().min(3).max(50).required(),
  start: Joi.string().min(3).max(50),
  end: Joi.string().min(3).max(50).allow(""),
  text: Joi.string().min(3).max(3000).allow(""),
  type: Joi.string().min(3).max(50),
  street: Joi.string().min(3).max(100).allow(""),
  city: Joi.string().min(2).max(100).allow(""),
  postcode: Joi.string().min(3).max(100).allow(""),
  mail: Joi.string().min(3).max(100).allow(""),
  phone: Joi.string().min(3).max(100).allow(""),
  linkHomepage: Joi.string().min(3).max(100).allow(""),
  linkProgram: Joi.string().min(3).max(100).allow(""),
  images: Joi.array(),
  auditoriumRefs: Joi.array(),
  cinemaRefs: Joi.array(),
  reportRefs: Joi.array(),
  projectionRefs: Joi.array(),
};

const ScreeningEventCreateSchema = Joi.object({
  ...ScreeningEventSchema,
});

const ScreeningEventUpdateSchema = Joi.object({
  ...CommonSchema,
  ...ScreeningEventSchema,
});

/**
 * Validate created report.
 */
async function validateCreateScreeningEvent(
  screeningEvent: IScreeningEventCreate
): Promise<any> {
  return ScreeningEventCreateSchema.validateAsync(screeningEvent);
}

/**
 * Validate updated screeningEvent.
 */
async function validateUpdateScreeningEvent(
  screeningEvent: IScreeningEvent
): Promise<any> {
  return ScreeningEventUpdateSchema.validateAsync(screeningEvent);
}

// **** Export default **** //

export default {
  validateCreateScreeningEvent,
  validateUpdateScreeningEvent,
} as const;
