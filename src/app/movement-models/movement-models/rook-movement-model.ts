import { IMovementModel } from '../movement-model.interface';
import { IFieldsMatrix, IField } from '../../models';
import { ChessPiece } from '../../chess-pieces';

export class RookMovementModel implements IMovementModel {
  getPotentialMoves(field: IField, fields: IFieldsMatrix, rows: number[], columns: string[]): IField[] { // TODO: Refactor
    if (!field) { return []; }
    const piece: ChessPiece = field.chessPiece;
    const potentialMoves: IField[] = [];

    let firstFieldWithPiece: IField;
    for (let i = rows.indexOf(field.row); i < rows.length; i++) {
      if (firstFieldWithPiece) { continue; }
      const row = rows[i];
      const f: IField = fields[row][field.column];
      if (f === field) { continue; }
      if (f.chessPiece) {
        firstFieldWithPiece = f;
        if (f.chessPiece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    firstFieldWithPiece = null;
    for (let i = rows.indexOf(field.row); i >= 0; i--) {
      if (firstFieldWithPiece) { continue; }
      const row = rows[i];
      const f: IField = fields[row][field.column];
      if (f === field) { continue; }
      if (f.chessPiece) {
        firstFieldWithPiece = f;
        if (f.chessPiece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    firstFieldWithPiece = null;
    for (let i = columns.indexOf(field.column); i < columns.length; i++) {
      if (firstFieldWithPiece) { continue; }
      const column = columns[i];
      const f: IField = fields[field.row][column];
      if (f === field) { continue; }
      if (f.chessPiece) {
        firstFieldWithPiece = f;
        if (f.chessPiece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    firstFieldWithPiece = null;
    for (let i = columns.indexOf(field.column); i >= 0; i--) {
      if (firstFieldWithPiece) { continue; }
      const column = columns[i];
      const f: IField = fields[field.row][column];
      if (f === field) { continue; }
      if (f.chessPiece) {
        firstFieldWithPiece = f;
        if (f.chessPiece.color === piece.color) { continue; }
      }
      potentialMoves.push(f);
    }
    return potentialMoves;
  }
}
