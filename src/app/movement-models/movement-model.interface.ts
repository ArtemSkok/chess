import { IField, IFieldsMatrix } from '../models';

export interface IMovementModel {
  getPotentialMoves(field: IField, fields: IFieldsMatrix, rows: number[], columns: string[]): IField[];
}
