import { ChessPiece } from './chess-pieces';

export enum FieldColor {
  white,
  black
}

export interface IField {
  row: number;
  column: string;
  color: FieldColor;
  chessPiece?: ChessPiece;
}

export interface IFieldsMatrix {
  [row: number]: {
    [column: string]: IField;
  };
}

export enum ChessPieceColor {
  white,
  black
}
