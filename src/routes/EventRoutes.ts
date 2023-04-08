import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import ScreeningEventService from "@src/services/EventService";
import { IReq, IRes } from "./types/express/misc";
import { ScreeningEvent } from "@src/models/screening-event";

// **** Functions **** //

/**
 * Get all screeningEvents.
 */
async function getAll(_: IReq, res: IRes) {
  const screeningEvents = await ScreeningEventService.getAll();
  return res.status(HttpStatusCodes.OK).json({ screeningEvents });
}

/**
 * Add one screeningEvent.
 */
async function add(req: IReq<{ screeningEvent: ScreeningEvent }>, res: IRes) {
  const { screeningEvent } = req.body;
  await ScreeningEventService.addOne(screeningEvent);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one screeningEvent.
 */
async function update(
  req: IReq<{ screeningEvent: ScreeningEvent }>,
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
  add,
  update,
  delete: delete_,
} as const;
