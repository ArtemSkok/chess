import { IMovementModel } from '../movement-model.interface';
import { IFieldsMatrix, IField } from '../../models';
import { ChessPiece } from '../../chess-pieces';

export class KnightMovementModel implements IMovementModel {
  getPotentialMoves(field: IField, fields: IFieldsMatrix, rows: number[], columns: string[]): IField[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: ChessPiece = field.chessPiece;
    const potentialMoves: IField[] = [];

    const topRow1: number = rows[rows.indexOf(field.row) + 1];
    const topRow2: number = rows[rows.indexOf(field.row) + 2];
    const bottomRow1: number = rows[rows.indexOf(field.row) - 1];
    const bottomRow2: number = rows[rows.indexOf(field.row) - 2];

    const leftColumn1: string = columns[columns.indexOf(field.column) - 1];
    const leftColumn2: string = columns[columns.indexOf(field.column) - 2];
    const rightColumn1: string = columns[columns.indexOf(field.column) + 1];
    const rightColumn2: string = columns[columns.indexOf(field.column) + 2];

    if (topRow1 && leftColumn2) {
      const f: IField = fields[topRow1][leftColumn2];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow2 && leftColumn1) {
      const f: IField = fields[topRow2][leftColumn1];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow1 && rightColumn2) {
      const f: IField = fields[topRow1][rightColumn2];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow2 && rightColumn1) {
      const f: IField = fields[topRow2][rightColumn1];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow1 && leftColumn2) {
      const f: IField = fields[bottomRow1][leftColumn2];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow2 && leftColumn1) {
      const f: IField = fields[bottomRow2][leftColumn1];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow1 && rightColumn2) {
      const f: IField = fields[bottomRow1][rightColumn2];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow2 && rightColumn1) {
      const f: IField = fields[bottomRow2][rightColumn1];
      if (!f.chessPiece || f.chessPiece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }

    return potentialMoves;
  }
}

