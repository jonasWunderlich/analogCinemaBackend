import { DeepPartial } from "@src/models/deep-partial";
import { ScreeningEventType } from "@src/models/sceening-event-type";
import { IScreeningEvent } from "@src/models/ScreeningEvent";
import {
  addDays,
  CHAR_NUMBERS,
  mockCharString,
  mockNumber,
  pickRandom,
  randomDate,
  sortByISODate,
} from "../utilities/mock-data";
import {
  MOCKED_CINEMA_IMAGES,
  MOCKED_CITIES,
  MOCKED_EVENT_NAMES,
  MOCKED_EVENT_TEXTS,
  MOCKED_STREETS,
} from "./constants";
import { randomUUID } from "crypto";

const SCREENING_EVENT_DEFAULT_VALUES: IScreeningEvent = {
  id: "0",
  createdAt: "2020-10-30T09:32:19.196720000+0000",
  lastModifiedAt: "2020-11-30T10:32:19.196720000+0000",
  title: MOCKED_EVENT_NAMES[1],
  text: MOCKED_EVENT_TEXTS[1],
  start: randomDate(new Date(), new Date(2023, 6, 0)).toJSON(),
  end: randomDate(new Date(), new Date(2023, 12, 0)).toJSON(),
  street: "Spinnereistrasse 1",
  postcode: "04177",
  city: "Leipzig",
  mail: "kontakt@mockedcinema.de",
  phone: "+49123456789",
  linkHomepage: "https://www.kommkino.de/festival/hofbauer-kongress",
  linkProgram: "https://www.example.com",
  cinemaRefs: [],
  images: [pickRandom(MOCKED_CINEMA_IMAGES)],
};

/**
 * Create mocked ScreeningEvent.
 *
 * Simple creation of Event that only needs the most basic information.
 * All data is filled with SCREENING_EVENT_DEFAULT_VALUES and mock values.
 *
 * @param eventValues: Partial<ScreeningEvent> data to overwrite default values
 *
 * @example mockScreeningEvent({name: 'Hofbauer Kongress'})
 */
export function mockScreeningEvent(
  eventValues: DeepPartial<IScreeningEvent>
): IScreeningEvent {
  const id = randomUUID();
  const start = randomDate(new Date(), new Date(2023, 12, 0));
  const eventType = pickRandom([
    ScreeningEventType.FESTIVAL,
    ScreeningEventType.SERIES,
    ScreeningEventType.SINGLE,
  ]);
  const eventLength = mockNumber(1, 14);
  const defaultValues: IScreeningEvent = {
    id,
    createdAt: SCREENING_EVENT_DEFAULT_VALUES.createdAt,
    lastModifiedAt: SCREENING_EVENT_DEFAULT_VALUES.lastModifiedAt,
    title: pickRandom(MOCKED_EVENT_NAMES),
    type: eventType,
    text: pickRandom(MOCKED_EVENT_TEXTS),
    start: start.toJSON(),
    end:
      eventType !== ScreeningEventType.SINGLE
        ? addDays(start, eventLength).toJSON()
        : undefined,
    city: pickRandom(MOCKED_CITIES),
    street: `${pickRandom(MOCKED_STREETS)} ${mockNumber(1, 400)}`,
    postcode: mockCharString(5, CHAR_NUMBERS),
    linkHomepage: SCREENING_EVENT_DEFAULT_VALUES.linkHomepage,
    linkProgram: SCREENING_EVENT_DEFAULT_VALUES.linkProgram,
    mail: SCREENING_EVENT_DEFAULT_VALUES.mail,
    phone: SCREENING_EVENT_DEFAULT_VALUES.phone,
    images: [pickRandom(MOCKED_CINEMA_IMAGES)],
    cinemaRefs: [],
    projectionRefs: [],
    reportRefs: [],
    auditoriumRefs: [],
  };
  return {
    ...defaultValues,
    ...eventValues,
  } as IScreeningEvent;
}

/**
 * Create mocked list of ScreeningEvent.
 *
 * Simple creation of Event list that only needs the most basic information.
 * All data is filled with SCREENING_EVENT_DEFAULT_VALUES and mock values.
 *
 * @param amount: Length of List
 *
 * @example mockScreeningEvents(10)
 */
export function mockScreeningEvents(amount: number): IScreeningEvent[] {
  const events: IScreeningEvent[] = [];
  for (let i = 0; i < amount; i++) {
    events.push(mockScreeningEvent({}));
  }
  return events.sort((a, b) => sortByISODate(a.start, b.start));
}
