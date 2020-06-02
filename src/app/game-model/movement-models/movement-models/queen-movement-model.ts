import { IMovementModel } from '../movement-model.interface';
import { IBoardFieldsMatrix, IBoardField, IChessPiece } from '../../../data-models';
import { BishopMovementModel } from './bishop-movement-model';
import { RookMovementModel } from './rook-movement-model';

export class QueenMovementModel implements IMovementModel<IChessPiece> {
  private bishopMovementModel: BishopMovementModel = new BishopMovementModel();
  private rookMovementModel: RookMovementModel = new RookMovementModel();

  getPotentialMoves(
    field: IBoardField<IChessPiece>,
    fields: IBoardFieldsMatrix<IChessPiece>,
    rows: number[],
    columns: string[]
  ): IBoardField<IChessPiece>[] {
    return this.bishopMovementModel.getPotentialMoves(field, fields, rows, columns)
      .concat(this.rookMovementModel.getPotentialMoves(field, fields, rows, columns));
  }
}
