import { IMovementModel } from '../movement-model.interface';
import { IBoardFieldsMatrix, IBoardField, IChessPiece } from '../../../data-models';

export class BishopMovementModel implements IMovementModel<IChessPiece> {
  getPotentialMoves(
    field: IBoardField<IChessPiece>,
    fields: IBoardFieldsMatrix<IChessPiece>,
    rows: number[],
    columns: string[]
  ): IBoardField<IChessPiece>[] {
    if (!field) { return []; }
    const potentialMoves: IBoardField<IChessPiece>[] = [
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, 1, 1),
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, 1, -1),
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, -1, 1),
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, -1, -1),
    ];

    return potentialMoves;
  }

  private getPotentialDiagonalMoves(
    field: IBoardField<IChessPiece>,
    fields: IBoardFieldsMatrix<IChessPiece>,
    rows: number[],
    columns: string[],
    directionRow: 1 | -1,
    directionCol: 1 | -1
  ): IBoardField<IChessPiece>[] {
    const piece: IChessPiece = field.piece;
    const potentialMoves: IBoardField<IChessPiece>[] = [];
    const rowIndex: number = rows.indexOf(field.row);
    const colIndex: number = columns.indexOf(field.column);

    let firstFieldWithPiece: IBoardField<IChessPiece>;
    let i = 0;
    let row: number;
    let col: string;
    while (
      (row = rows[rowIndex + i * directionRow])
      && (col = columns[colIndex + i * directionCol])
    ) {
      if (firstFieldWithPiece) { i++; continue; }
      const f: IBoardField<IChessPiece> = fields[row][col];
      if (f === field) { i++; continue; }
      if (f.piece) {
        firstFieldWithPiece = f;
        if (f.piece.color === piece.color) { i++; continue; }
      }
      potentialMoves.push(f);
      i++;
    }

    return potentialMoves;
  }

}

