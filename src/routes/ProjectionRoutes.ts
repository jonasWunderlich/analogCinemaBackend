import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import { IReq, IRes } from "./types/express/misc";
import { IProjection, IProjectionCreate } from "@src/models/Projection";
import ProjectionService from "@src/services/ProjectionService";

// **** Functions **** //

/**
 * Get all projections.
 */
async function getAll(_: IReq, res: IRes) {
  const projections = await ProjectionService.getAll();
  return res.status(HttpStatusCodes.OK).json({ projections });
}

/**
 * Get one projections.
 */
async function getOne(req: IReq, res: IRes) {
  const id = req.params.id;
  const projection = await ProjectionService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ projection });
}

/**
 * Add one projection.
 */
async function add(req: IReq<{ projection: IProjectionCreate }>, res: IRes) {
  const { projection } = req.body;
  await ProjectionService.addOne(projection);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one projection.
 */
async function update(req: IReq<{ projection: IProjection }>, res: IRes) {
  const { projection } = req.body;
  await ProjectionService.updateOne(projection);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one projection.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await ProjectionService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  getOne,
  add,
  update,
  delete: delete_,
} as const;
