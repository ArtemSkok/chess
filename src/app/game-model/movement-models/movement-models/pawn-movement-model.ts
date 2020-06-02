import { IMovementModel } from '../movement-model.interface';
import { IBoardFieldsMatrix, IBoardField, PieceColor, IChessPiece } from '../../../data-models';

export class PawnMovementModel implements IMovementModel<IChessPiece> {
  getPotentialMoves(
    field: IBoardField<IChessPiece>,
    fields: IBoardFieldsMatrix<IChessPiece>,
    rows: number[],
    columns: string[]
  ): IBoardField<IChessPiece>[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: IChessPiece = field.piece;
    const potentialMoves: IBoardField<IChessPiece>[] = [];

    const direction: 1 | -1 = piece.color === PieceColor.white ? 1 : -1;
    const nextRow: number = rows[rows.indexOf(field.row) + direction];
    if (nextRow) {
      const nextField: IBoardField<IChessPiece> = nextRow ? fields[nextRow][field.column] : null;
      if (nextField && !nextField.piece) {
        potentialMoves.push(nextField);
        const startRow: number =
          piece.color === PieceColor.white
            ? rows[1]
            : rows[rows.length - 2];
        if (field.row === startRow) {
          const twoRowsForvardField = fields[field.row + 2 * direction][field.column];
          if (!twoRowsForvardField.piece) {
            potentialMoves.push(twoRowsForvardField);
          }
        }
      }
    }
    const leftColumn: string = columns[columns.indexOf(field.column) - 1];
    if (nextRow && leftColumn) {
      const nextLeftField: IBoardField<IChessPiece> = leftColumn ? fields[nextRow][leftColumn] : null;
      if (nextLeftField && nextLeftField.piece && nextLeftField.piece.color !== piece.color) {
        potentialMoves.push(nextLeftField);
      }
    }
    const rightColumn: string = columns[columns.indexOf(field.column) + 1];
    if (nextRow && rightColumn) {
      const nextRightField: IBoardField<IChessPiece> = rightColumn ? fields[nextRow][rightColumn] : null;
      if (nextRightField && nextRightField.piece && nextRightField.piece.color !== piece.color) {
        potentialMoves.push(nextRightField);
      }
    }

    return potentialMoves;
  }
}
