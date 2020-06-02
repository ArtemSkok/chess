import { IMovementModel } from '../movement-model.interface';
import { IBoardFieldsMatrix, IBoardField, IChessPiece } from '../../../data-models';

export class KingMovementModel implements IMovementModel<IChessPiece> {
  getPotentialMoves(
    field: IBoardField<IChessPiece>,
    fields: IBoardFieldsMatrix<IChessPiece>,
    rows: number[],
    columns: string[]): IBoardField<IChessPiece>[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: IChessPiece = field.piece;
    const potentialMoves: IBoardField<IChessPiece>[] = [];

    const topRow: number = rows[rows.indexOf(field.row) + 1];
    const bottomRow: number = rows[rows.indexOf(field.row) - 1];
    const leftColumn: string = columns[columns.indexOf(field.column) - 1];
    const rightColumn: string = columns[columns.indexOf(field.column) + 1];
    if (topRow) {
      const f: IBoardField<IChessPiece> = fields[topRow][field.column];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow) {
      const f: IBoardField<IChessPiece> = fields[bottomRow][field.column];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (leftColumn) {
      const f: IBoardField<IChessPiece> = fields[field.row][leftColumn];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (rightColumn) {
      const f: IBoardField<IChessPiece> = fields[field.row][rightColumn];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow && rightColumn) {
      const f: IBoardField<IChessPiece> = fields[topRow][rightColumn];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow && rightColumn) {
      const f: IBoardField<IChessPiece> = fields[bottomRow][rightColumn];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow && leftColumn) {
      const f: IBoardField<IChessPiece> = fields[bottomRow][leftColumn];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow && leftColumn) {
      const f: IBoardField<IChessPiece> = fields[topRow][leftColumn];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }

    return potentialMoves;
  }
}
