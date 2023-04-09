import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import ScreeningEventService from "@src/services/ScreeningEventService";
import { IReq, IRes } from "./types/express/misc";
import {
  IScreeningEvent,
  IScreeningEventCreate,
} from "@src/models/ScreeningEvent";

// **** Functions **** //

/**
 * Get all screeningEvents.
 */
async function getAll(_: IReq, res: IRes) {
  const screeningEvents = await ScreeningEventService.getAll();
  return res.status(HttpStatusCodes.OK).json({ screeningEvents });
}

/**
 * Get one screeningEvent.
 */
async function getOne(req: IReq, res: IRes) {
  const id = req.params.id;
  const screeningEvent = await ScreeningEventService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ screeningEvent });
}

/**
 * Add one screeningEvent.
 */
async function add(
  req: IReq<{ screeningEvent: IScreeningEventCreate }>,
  res: IRes
) {
  const { screeningEvent } = req.body;
  await ScreeningEventService.addOne(screeningEvent);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one screeningEvent.
 */
async function update(
  req: IReq<{ screeningEvent: IScreeningEvent }>,
  res: IRes
) {
  const { screeningEvent } = req.body;
  await ScreeningEventService.updateOne(screeningEvent);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one screeningEvent.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await ScreeningEventService.delete(id);
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
