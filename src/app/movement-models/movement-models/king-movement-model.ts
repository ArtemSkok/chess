import { IMovementModel } from '../movement-model.interface';
import { IFieldsMatrix, IField } from '../../models';
import { ChessPiece } from '../../chess-pieces';

export class KingMovementModel implements IMovementModel {
  getPotentialMoves(field: IField, fields: IFieldsMatrix, rows: number[], columns: string[]): IField[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: ChessPiece = field.chessPiece;
    const potentialMoves: IField[] = [];

    const topRow: number = rows[rows.indexOf(field.row) + 1];
    const bottomRow: number = rows[rows.indexOf(field.row) - 1];
    const leftColumn: string = columns[columns.indexOf(field.column) - 1];
    const rightColumn: string = columns[columns.indexOf(field.column) + 1];
    if (topRow) {
      const topField: IField = fields[topRow][field.column];
      if (!topField.chessPiece || topField.chessPiece.color !== piece.color) {
        potentialMoves.push(topField);
      }
    }
    if (bottomRow) {
      const bottomField: IField = fields[bottomRow][field.column];
      if (!bottomField.chessPiece || bottomField.chessPiece.color !== piece.color) {
        potentialMoves.push(bottomField);
      }
    }
    if (leftColumn) {
      const leftField: IField = fields[field.row][leftColumn];
      if (!leftField.chessPiece || leftField.chessPiece.color !== piece.color) {
        potentialMoves.push(leftField);
      }
    }
    if (rightColumn) {
      const rightField: IField = fields[field.row][rightColumn];
      if (!rightField.chessPiece || rightField.chessPiece.color !== piece.color) {
        potentialMoves.push(rightField);
      }
    }
    if (topRow && rightColumn) {
      const topRightField: IField = fields[topRow][rightColumn];
      if (!topRightField.chessPiece || topRightField.chessPiece.color !== piece.color) {
        potentialMoves.push(topRightField);
      }
    }
    if (bottomRow && rightColumn) {
      const bottomRightField: IField = fields[bottomRow][rightColumn];
      if (!bottomRightField.chessPiece || bottomRightField.chessPiece.color !== piece.color) {
        potentialMoves.push(bottomRightField);
      }
    }
    if (bottomRow && leftColumn) {
      const bottomLeftField: IField = fields[bottomRow][leftColumn];
      if (!bottomLeftField.chessPiece || bottomLeftField.chessPiece.color !== piece.color) {
        potentialMoves.push(bottomLeftField);
      }
    }
    if (topRow && leftColumn) {
      const topLeft: IField = fields[topRow][leftColumn];
      if (!topLeft.chessPiece || topLeft.chessPiece.color !== piece.color) {
        potentialMoves.push(topLeft);
      }
    }

    return potentialMoves;
  }
}
