import { Report } from "@src/models/report";
import Joi from "joi";

/**
 * Delete one report.
 */
async function validateReport(report: Report): Promise<any> {
  return ReportSchema.validateAsync(report);
}

export const ReportSchema = Joi.object({
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
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
});

// **** Export default **** //

export default {
  validateReport,
} as const;
