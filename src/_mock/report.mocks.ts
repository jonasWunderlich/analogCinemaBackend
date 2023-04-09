import { DeepPartial } from "@src/models/deep-partial";
import { IReport } from "@src/models/Report";
import { pickRandom, randomDate, sortByISODate } from "../utilities/mock-data";
import {
  MOCKED_CINEMA_IMAGES,
  MOCKED_REPORT_NAMES,
  MOCKED_REPORT_TEXTS,
} from "./constants";
import { randomUUID } from "crypto";

const REPORT_DEFAULT_VALUES: IReport = {
  id: "0",
  createdAt: "2020-10-30T09:32:19.196720000+0000",
  lastModifiedAt: "2020-11-30T10:32:19.196720000+0000",
  title: MOCKED_REPORT_NAMES[1],
  text: `Busey ipsum dolor sit amet. You ever roasted doughnuts?Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.
  When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.
  The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart.You ever roasted doughnuts?It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.Listen to the silence. And when the silence is deafening, you're in the center of your own universe.
  These kind of things only happen for the first time once.When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what you're hearing.
  I would like to give you a backstage pass to my imagination.You ever roasted doughnuts?The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart.I wrestled a bear once. A 750lbs black bear.`,
  date: randomDate(new Date(), new Date(2022, 9, 0)).toJSON(),
  images: ["bologna.jpg", "bologna2.jpg"],
};

/**
 * Create mocked Report.
 *
 * Simple creation of Report that only needs the most basic information.
 * All data is filled with REPORT_DEFAULT_VALUES and mock values.
 *
 * @param reportValues: Partial<IReport> data to overwrite default values
 *
 * @example mockReport({name: 'Hofbauer Kongress'})
 */
export function mockReport(reportValues: DeepPartial<IReport>): IReport {
  const id = randomUUID();
  const date = randomDate(new Date(), new Date(2023, 12, 0));
  const defaultValues: IReport = {
    id,
    createdAt: REPORT_DEFAULT_VALUES.createdAt,
    lastModifiedAt: REPORT_DEFAULT_VALUES.lastModifiedAt,
    title: pickRandom(MOCKED_REPORT_NAMES),
    text: pickRandom(MOCKED_REPORT_TEXTS),
    images: [pickRandom(MOCKED_CINEMA_IMAGES)],
    date: date.toJSON(),
  };
  return {
    ...defaultValues,
    ...reportValues,
  } as IReport;
}

/**
 * Create mocked list of Reports.
 *
 * Simple creation of Report list that only needs the most basic information.
 * All data is filled with REPORT_DEFAULT_VALUES and mock values.
 *
 * @param amount: Length of List
 * @param eventRef: reference to ScreeningEvent
 *
 * @example mockReports(10)
 */
export function mockReports(
  amount: number,
  reportValues: DeepPartial<IReport>
): IReport[] {
  const reports: IReport[] = [];
  for (let i = 0; i < amount; i++) {
    reports.push(mockReport({ ...reportValues }));
  }
  return reports.sort((a, b) => sortByISODate(a.date, b.date));
}
