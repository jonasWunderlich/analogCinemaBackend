import { ProjectionCharacter } from './projection-character';

export interface ProjectionCreate {
  title: string;
  text: string;
  date: string;
  tmdb?: string;
  character?: ProjectionCharacter[];
  black?: boolean;
  agent?: string;
}

export interface Projection extends ProjectionCreate {
  id: string;
  createdAt?: string;
  lastModifiedAt?: string;
  title: string;
  text: string;

  date: string;
  tmdb?: string;
  character?: ProjectionCharacter[];
  black?: boolean;
  agent?: string;

  cinemaRef?: string;
  reportRefs?: string[];
}
