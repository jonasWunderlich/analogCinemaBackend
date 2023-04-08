import { Report } from './report';

export const AUDITORIUM_ATTRIBUTES = [
  { id: 'climate', name: 'Klimaanlage' },
  { id: 'pair-seats', name: 'Pärchensitze' },
  { id: 'curved-screen', name: 'gekrümmte Leinwand' },
  { id: 'loge', name: 'Loge' },
  { id: 'leg-space', name: 'Beinfreiheit' },
  { id: 'piano', name: 'Klavier' },
  { id: 'bar', name: 'Bar im Kino' },
];

export const PROJECTOR_35_SINGLE = {
  id: '1x35mm',
  name: 'Nur ein 35mm Projektor',
};
export const PROJECTOR_35_DUAL = {
  id: '2x35mm',
  name: '35mm Überblendbetrieb',
};
export const PROJECTOR_DCP = {
  id: 'dcp',
  name: 'DCP',
};

export const PROJECTORS_OPTIONS = [
  { id: '70mm', name: '70mm Projektor :)' },
  PROJECTOR_35_SINGLE,
  PROJECTOR_35_DUAL,
  PROJECTOR_DCP,
  { id: 'bluray', name: 'Bluray' },
  { id: '16mm', name: '16mm' },
  { id: '8mm', name: '8mm' },
];

export const SOUND_MONO = { id: 'mono', name: 'Mono' };
export const SOUND_STEREO = { id: 'stereo', name: 'Stereo' };

export const SOUND_OPTIONS = [
  SOUND_MONO,
  SOUND_STEREO,
  { id: '5.1', name: '5.1' },
  { id: '7.1', name: '7.1' },
];

export interface AuditoriumCreate {
  title: string;
  attributes: string[];
  projectors: string[];
  screen: string;
  seats: number;
  sound: string[];
  text: string;
}

export interface Auditorium extends AuditoriumCreate {
  id: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;
  attributes: string[];
  projectors: string[];
  screen: string;
  seats: number;
  sound: string[];
  text: string;

  // TODO: Fix reference models
  cinemaRef?: string;
  reports?: Report[];
  reportRefs?: string[];
}
