import { IMovementModel } from '../movement-model.interface';
import { IFieldsMatrix, IField } from '../../models';
import { ChessPiece } from '../../chess-pieces';

export class BishopMovementModel implements IMovementModel {
  getPotentialMoves(field: IField, fields: IFieldsMatrix, rows: number[], columns: string[]): IField[] {
    if (!field) { return []; }
    const potentialMoves: IField[] = [
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, 1, 1),
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, 1, -1),
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, -1, 1),
      ...this.getPotentialDiagonalMoves(field, fields, rows, columns, -1, -1),
    ];

    return potentialMoves;
  }

  private getPotentialDiagonalMoves(
    field: IField,
    fields: IFieldsMatrix,
    rows: number[],
    columns: string[],
    directionRow: 1 | -1,
    directionCol: 1 | -1
  ): IField[] {
    const piece: ChessPiece = field.chessPiece;
    const potentialMoves: IField[] = [];
    const rowIndex: number = rows.indexOf(field.row);
    const colIndex: number = columns.indexOf(field.column);

    let firstFieldWithPiece: IField;
    let i = 0;
    let row: number;
    let col: string;
    while (
      (row = rows[rowIndex + i * directionRow])
      && (col = columns[colIndex + i * directionCol])
    ) {
      if (firstFieldWithPiece) { i++; continue; }
      const f: IField = fields[row][col];
      if (f === field) { i++; continue; }
      if (f.chessPiece) {
        firstFieldWithPiece = f;
        if (f.chessPiece.color === piece.color) { i++; continue; }
      }
      potentialMoves.push(f);
      i++;
    }

    return potentialMoves;
  }

}

