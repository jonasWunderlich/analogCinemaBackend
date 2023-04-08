import { isNullOrUndefined } from './null-or-undefined';

export enum TableColType {
  BOOLEAN = 'BOOLEAN',
  STRING = 'UTF_8',
  DATE = 'DATE',
  TIMESTAMP = 'TIMESTAMP',
  TAG_SINGLE = 'TAG_SINGLE',
  TAG_MULTIPLE = 'TAG_MULTIPLE',
  NUMBER = 'NUMBER',
  DECIMAL = 'STRING',
  ICON = 'ICON',
}

export interface InputSelectOption {
  id: string | boolean | number;
  name: string;
}

export function createSelectOption(
  id: string,
  name: string
): InputSelectOption {
  return {
    id,
    name,
  };
}

export function compare(
  a: string,
  b: string,
  isAsc: boolean,
  type: TableColType
): number {
  let comparison = 0;
  if ((a === undefined && b === undefined) || (a === null && b === null)) {
    return 0;
  }
  if (a === undefined || a === null) {
    return isAsc ? -1 : 1;
  }
  if (b === undefined || b === null) {
    return isAsc ? 1 : -1;
  }
  switch (type) {
    case TableColType.DECIMAL:
      comparison = parseFloat(a) < parseFloat(b) ? -1 : 1;
      break;
    case TableColType.NUMBER:
      comparison = parseInt(a, 10) < parseInt(b, 10) ? -1 : 1;
      break;
    case TableColType.DATE:
      comparison = Date.parse(a) < Date.parse(b) ? -1 : 1;
      break;
    default:
      comparison = a.toString().localeCompare(b);
      break;
  }
  return comparison * (isAsc ? 1 : -1);
}

/**
 * Generates InputSelectOption array based on string values of an array
 * @param {string} prefix - The prefix used for the translation of the name
 * @param items - Array of strings to convert into InputSelectOption[]
 * @return {InputSelectOption[]}
 */
export function generateTranslatedSelectOptionsFromArray(
  prefix: string,
  items: string[]
): InputSelectOption[] {
  return items.map((item) => {
    return {
      id: item,
      name: `${prefix}.${item}`,
    };
  });
}

/**
 * Generates InputSelectOption array based on an enum
 * @param {string} prefix - The prefix used
 * @param e - Enum to convert into InputSelectOption[]
 * @return {InputSelectOption[]}
 */
export function generateSelectOptionsFromEnum(
  prefix: string,
  e: any
): InputSelectOption[] {
  return Object.keys(e).map((val) => {
    return {
      id: val,
      name: `${e[val]}`,
    };
  });
}

/**
 * Generates InputSelectOption array based on boolean values
 * translates true to "yes" and false to "no"
 */
export function generateSelectOptionsFromBoolean(): InputSelectOption[] {
  return [
    {
      id: true,
      name: 'yes',
    },
    {
      id: false,
      name: 'no',
    },
  ];
}

export function hasEmptyValue(val: number | string | boolean): boolean {
  return isNullOrUndefined(val) || val === '';
}
