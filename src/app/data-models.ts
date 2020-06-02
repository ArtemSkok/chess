import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export enum PieceColor {
  white,
  black
}
export interface IBoardPiece {
  readonly icon: IconDefinition;
  color: PieceColor;
}
export enum BoardFieldColor {
  white,
  black
}
export interface IBoardField<T extends IBoardPiece = IBoardPiece> {
  row: number;
  column: string;
  color: BoardFieldColor;
  piece?: T;
}
export interface IBoardFieldsMatrix<T extends IBoardPiece = IBoardPiece> {
  [row: number]: {
    [column: string]: IBoardField<T>;
  };
}

export enum ChessPieceType {
  pawn,
  knight,
  rook,
  bishop,
  king,
  queen
}
export interface IChessPiece extends IBoardPiece {
  readonly type: ChessPieceType;
}
