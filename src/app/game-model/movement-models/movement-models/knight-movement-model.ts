import { IMovementModel } from '../movement-model.interface';
import { IBoardFieldsMatrix, IBoardField, IChessPiece } from '../../../data-models';

export class KnightMovementModel implements IMovementModel<IChessPiece> {
  getPotentialMoves(
    field: IBoardField<IChessPiece>,
    fields: IBoardFieldsMatrix<IChessPiece>,
    rows: number[],
    columns: string[]
  ): IBoardField<IChessPiece>[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: IChessPiece = field.piece;
    const potentialMoves: IBoardField<IChessPiece>[] = [];

    const topRow1: number = rows[rows.indexOf(field.row) + 1];
    const topRow2: number = rows[rows.indexOf(field.row) + 2];
    const bottomRow1: number = rows[rows.indexOf(field.row) - 1];
    const bottomRow2: number = rows[rows.indexOf(field.row) - 2];

    const leftColumn1: string = columns[columns.indexOf(field.column) - 1];
    const leftColumn2: string = columns[columns.indexOf(field.column) - 2];
    const rightColumn1: string = columns[columns.indexOf(field.column) + 1];
    const rightColumn2: string = columns[columns.indexOf(field.column) + 2];

    if (topRow1 && leftColumn2) {
      const f: IBoardField<IChessPiece> = fields[topRow1][leftColumn2];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow2 && leftColumn1) {
      const f: IBoardField<IChessPiece> = fields[topRow2][leftColumn1];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow1 && rightColumn2) {
      const f: IBoardField<IChessPiece> = fields[topRow1][rightColumn2];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (topRow2 && rightColumn1) {
      const f: IBoardField<IChessPiece> = fields[topRow2][rightColumn1];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow1 && leftColumn2) {
      const f: IBoardField<IChessPiece> = fields[bottomRow1][leftColumn2];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow2 && leftColumn1) {
      const f: IBoardField<IChessPiece> = fields[bottomRow2][leftColumn1];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow1 && rightColumn2) {
      const f: IBoardField<IChessPiece> = fields[bottomRow1][rightColumn2];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }
    if (bottomRow2 && rightColumn1) {
      const f: IBoardField<IChessPiece> = fields[bottomRow2][rightColumn1];
      if (!f.piece || f.piece.color !== piece.color) {
        potentialMoves.push(f);
      }
    }

    return potentialMoves;
  }
}

