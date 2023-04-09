import { IReport, IReportCreate } from "@src/models/Report";
import Joi from "joi";

const CommonSchema = {
  id: Joi.string().min(3).max(50).required(),
  createdAt: Joi.string().min(3).max(50),
  lastModifiedAt: Joi.string().min(3).max(50),
};

const ReportSchema = {
  title: Joi.string().min(3).max(50).required(),
  text: Joi.string().min(3).max(3000).allow(""),
  date: Joi.string().min(3).max(50),
  images: Joi.array(),
  eventRef: Joi.string().allow(""),
  projectionRef: Joi.string().allow(""),
  cinemaRef: Joi.string().allow(""),
  auditoriumRef: Joi.string().allow(""),
};

const ReportCreateSchema = Joi.object({
  ...ReportSchema,
});

const ReportUpdateSchema = Joi.object({
  ...CommonSchema,
  ...ReportSchema,
});
/**
 * Validate created report.
 */
async function validateCreateReport(report: IReportCreate): Promise<any> {
  return ReportCreateSchema.validateAsync(report);
}

/**
 * Validate updated report.
 */
async function validateUpdateReport(report: IReport): Promise<any> {
  return ReportUpdateSchema.validateAsync(report);
}

// **** Export default **** //

export default {
  validateCreateReport,
  validateUpdateReport,
} as const;
