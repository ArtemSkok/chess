import { IMovementModel } from '../movement-model.interface';
import { IBoardFieldsMatrix, IBoardField, IChessPiece } from '../../../data-models';

export class RookMovementModel implements IMovementModel<IChessPiece> {
  getPotentialMoves(
    field: IBoardField<IChessPiece>,
    fields: IBoardFieldsMatrix<IChessPiece>,
    rows: number[],
    columns: string[]
  ): IBoardField<IChessPiece>[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: IChessPiece = field.piece;
    const potentialMoves: IBoardField<IChessPiece>[] = [];

    let firstFieldWithPiece: IBoardField<IChessPiece>;
    for (let i = rows.indexOf(field.row); i < rows.length; i++) {
      if (firstFieldWithPiece) { continue; }
      const row = rows[i];
      const f: IBoardField<IChessPiece> = fields[row][field.column];
      if (f === field) { continue; }
      if (f.piece) {
        firstFieldWithPiece = f;
        if (f.piece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    firstFieldWithPiece = null;
    for (let i = rows.indexOf(field.row); i >= 0; i--) {
      if (firstFieldWithPiece) { continue; }
      const row = rows[i];
      const f: IBoardField<IChessPiece> = fields[row][field.column];
      if (f === field) { continue; }
      if (f.piece) {
        firstFieldWithPiece = f;
        if (f.piece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    firstFieldWithPiece = null;
    for (let i = columns.indexOf(field.column); i < columns.length; i++) {
      if (firstFieldWithPiece) { continue; }
      const column = columns[i];
      const f: IBoardField<IChessPiece> = fields[field.row][column];
      if (f === field) { continue; }
      if (f.piece) {
        firstFieldWithPiece = f;
        if (f.piece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    firstFieldWithPiece = null;
    for (let i = columns.indexOf(field.column); i >= 0; i--) {
      if (firstFieldWithPiece) { continue; }
      const column = columns[i];
      const f: IBoardField<IChessPiece> = fields[field.row][column];
      if (f === field) { continue; }
      if (f.piece) {
        firstFieldWithPiece = f;
        if (f.piece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    return potentialMoves;
  }
}
