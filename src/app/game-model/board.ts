import { IBoardFieldsMatrix, IBoardField, BoardFieldColor, IBoardPiece } from '../data-models';

function isEven(num: string | number): boolean { // TODO: move to separate file or add to class
  return Boolean(parseInt(num as string, 32) % 2);
}

export class Board<T extends IBoardPiece = IBoardPiece> {
  readonly rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  readonly columns: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  get fields(): IBoardFieldsMatrix<T> {
    return this._fields;
  }

  private _fields: IBoardFieldsMatrix<T>;

  constructor() {
    this.initBoard();
  }

  setFieldPiece(row: number, column: string, piece: T) {
    if (!this.rows.includes(row)) { throw new Error(`Board does not contain '${row}' row`); }
    if (!this.columns.includes(column)) { throw new Error(`Board does not contain '${column}' column`); }

    this._fields[row][column].piece = piece;
  }

  move(fromRow: number, fromColumn: string, toRow: number, toColumn: string) {
    if (!this.rows.includes(fromRow)) { throw new Error(`Board does not contain '${fromRow}' row`); }
    if (!this.rows.includes(toRow)) { throw new Error(`Board does not contain '${toRow}' row`); }
    if (!this.columns.includes(fromColumn)) { throw new Error(`Board does not contain '${fromColumn}' column`); }
    if (!this.columns.includes(toColumn)) { throw new Error(`Board does not contain '${toColumn}' column`); }

    const fromField: IBoardField<T> = this._fields[fromRow][fromColumn];
    const toField: IBoardField<T> = this._fields[toRow][toColumn];
    const piece: T = fromField.piece;

    if (!piece) { throw new Error(`Selected field ${fromRow}${fromColumn} does not have a piece`); }

    fromField.piece = null;
    toField.piece = piece;
  }

  initBoard() {
    this._fields = {};
    this.rows.forEach((row: number) => {
      this._fields[row] = {};
      this.columns.forEach((column: string) => {
        this._fields[row][column] = {
          row,
          column,
          color: this.calculateFieldColor(row, column),
        };
      });
    });
  }

  private calculateFieldColor(row: number, column: string): BoardFieldColor { // TODO: move to separate file or add to class
    return isEven(column) && isEven(row)
      || !isEven(column) && !isEven(row)
      ? BoardFieldColor.white
      : BoardFieldColor.black;
  }

}
