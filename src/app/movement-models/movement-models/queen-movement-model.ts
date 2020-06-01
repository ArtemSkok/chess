import { IMovementModel, } from '../movement-model.interface';
import { BishopMovementModel } from './bishop-movement-model';
import { RookMovementModel } from './rook-movement-model';
import { IField, IFieldsMatrix } from '../../models';

export class QueenMovementModel implements IMovementModel {
  private bishopMovementModel: BishopMovementModel = new BishopMovementModel();
  private rookMovementModel: RookMovementModel = new RookMovementModel();

  getPotentialMoves(field: IField, fields: IFieldsMatrix, rows: number[], columns: string[]): IField[] {
    return this.bishopMovementModel.getPotentialMoves(field, fields, rows, columns)
      .concat(this.rookMovementModel.getPotentialMoves(field, fields, rows, columns));
  }
}
