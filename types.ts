export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum GameState {
  INTRO = 'INTRO',
  PLAYING = 'PLAYING',
}
