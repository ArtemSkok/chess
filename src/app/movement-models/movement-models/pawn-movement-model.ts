import { IMovementModel } from '../movement-model.interface';
import { IFieldsMatrix, IField, ChessPieceColor } from '../../models';
import { ChessPiece } from '../../chess-pieces';

export class PawnMovementModel implements IMovementModel {
  getPotentialMoves(field: IField, fields: IFieldsMatrix, rows: number[], columns: string[]): IField[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: ChessPiece = field.chessPiece;
    const potentialMoves: IField[] = [];

    const direction: 1 | -1 = piece.color === ChessPieceColor.white ? 1 : -1;
    const nextRow: number = rows[rows.indexOf(field.row) + direction];
    if (nextRow) {
      const nextField: IField = nextRow ? fields[nextRow][field.column] : null;
      if (nextField && !nextField.chessPiece) {
        potentialMoves.push(nextField);
        const startRow: number =
          piece.color === ChessPieceColor.white
            ? rows[1]
            : rows[rows.length - 2];
        if (field.row === startRow) {
          const twoRowsForvardField = fields[field.row + 2 * direction][field.column];
          if (!twoRowsForvardField.chessPiece) {
            potentialMoves.push(twoRowsForvardField);
          }
        }
      }
    }
    const leftColumn: string = columns[columns.indexOf(field.column) - 1];
    if (nextRow && leftColumn) {
      const nextLeftField: IField = leftColumn ? fields[nextRow][leftColumn] : null;
      if (nextLeftField && nextLeftField.chessPiece && nextLeftField.chessPiece.color !== piece.color) {
        potentialMoves.push(nextLeftField);
      }
    }
    const rightColumn: string = columns[columns.indexOf(field.column) + 1];
    if (nextRow && rightColumn) {
      const nextRightField: IField = rightColumn ? fields[nextRow][rightColumn] : null;
      if (nextRightField && nextRightField.chessPiece && nextRightField.chessPiece.color !== piece.color) {
        potentialMoves.push(nextRightField);
      }
    }

    return potentialMoves;
  }
}
