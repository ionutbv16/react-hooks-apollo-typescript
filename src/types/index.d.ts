export interface ICards {
  name: string;
  id: string;
  height?: number;
  hyperdriveRating?: number;
  winner?: boolean;
  type?: string;
}

export interface HistoryInfo {
  history: HistoryInfoItems;
}
export interface HistoryInfoItems {
  items: HistoryInfoItem[];
}

export interface HistoryInfoItem {
  date: string;
  game: any;
}

export interface ParamTypes {
  type: string
}

export interface SetIsWinner {
  index: number;
  winner: boolean;
}

export interface CardProps {
  name?: string;
  hyperdriverating?: number;
  height?: number;
  type?: string;
  winner?: boolean;
  id?: string;
 }