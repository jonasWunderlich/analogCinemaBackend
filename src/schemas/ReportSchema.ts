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

  date: Joi.string().min(3).max(50),
  images: Joi.array(),

  eventRef: Joi.string().allow(""),
  projectionRef: Joi.string().allow(""),
  cinemaRef: Joi.string().allow(""),
  auditoriumRef: Joi.string().allow(""),
});

// **** Export default **** //

export default {
  validateReport,
} as const;
