import { IBoardField, IBoardFieldsMatrix, IChessPiece } from '../../data-models';

export interface IMovementModel<T extends IChessPiece = IChessPiece> {
  getPotentialMoves(field: IBoardField<T>, fields: IBoardFieldsMatrix<T>, rows: number[], columns: string[]): IBoardField<T>[];
}
