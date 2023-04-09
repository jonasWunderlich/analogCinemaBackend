import { ScreeningEvent } from "@src/models/screening-event";
import Joi from "joi";

/**
 * Delete one screeningEvent.
 */
async function validateEvent(screeningEvent: ScreeningEvent): Promise<any> {
  return ScreeningEventSchema.validateAsync(screeningEvent);
}

export const ScreeningEventSchema = Joi.object({
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
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
});

// **** Export default **** //

export default {
  validateEvent,
} as const;
