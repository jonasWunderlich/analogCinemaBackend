export const CHAR_NUMBERS = '0123456789';
export const CHAR_FULL = 'abcdefghijklmnopqrstuvwxyz0123456789';

export function mockNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min)) + min;
}

export function mockFloatNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function mockCoordinates(): number[] {
  return [
    mockFloatNumber(6.3856524, 14.3733412),
    mockFloatNumber(47.2854497, 53.4669803),
  ];
}

export function pickRandom<T>(arr: Array<T>): T {
  return arr[mockNumber(0, arr.length-1)];
}

export function mockCharString(len: number, charset: string): string {
  let text = '';
  for (let i = 0; i < len; i++) {
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return text;
}

export function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function sortByDate(time1: Date, time2: Date): number {
  return new Date(time1).getTime() - new Date(time2).getTime();
}

export function sortByISODate(time1: string, time2: string): number {
  return new Date(time1).getTime() - new Date(time2).getTime();
}

export function getRandomSubarray<T>(arr: Array<T>, size: number): Array<T> {
  const shuffled = arr.slice(0);
  let i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}
