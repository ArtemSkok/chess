import { ChessPiece, Pawn, Rook, Knight, Bishop, Queen, King } from './chess-pieces';
import { ChessPieceColor, IFieldsMatrix, IField, FieldColor } from './models';

export class ChessBoard {
  public readonly rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  public readonly columns: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  private _fields: IFieldsMatrix;
  private _selectedField: IField;
  private _potentialMoves: IField[] = [];

  get selectedField(): IField {
    return this._selectedField;
  }
  get fields(): IFieldsMatrix {
    return this._fields;
  }
  get potentialMoves() {
    return this._potentialMoves;
  }

  constructor(

  ) {
    this.initBoard();
  }

  initGame() {
    this.initBoard();
    Object.keys(this._fields[2]).forEach((col: string) => {
      this._fields[2][col].chessPiece = new Pawn(ChessPieceColor.white);
    });
    this.fields[1]['a'].chessPiece = new Rook(ChessPieceColor.white);
    this.fields[1]['h'].chessPiece = new Rook(ChessPieceColor.white);
    this.fields[1]['b'].chessPiece = new Knight(ChessPieceColor.white);
    this.fields[1]['g'].chessPiece = new Knight(ChessPieceColor.white);
    this.fields[1]['c'].chessPiece = new Bishop(ChessPieceColor.white);
    this.fields[1]['f'].chessPiece = new Bishop(ChessPieceColor.white);
    this.fields[1]['d'].chessPiece = new Queen(ChessPieceColor.white);
    this.fields[1]['e'].chessPiece = new King(ChessPieceColor.white);

    Object.keys(this._fields[7]).forEach((col: string) => {
      this._fields[7][col].chessPiece = new Pawn(ChessPieceColor.black);
    });
    this.fields[8]['a'].chessPiece = new Rook(ChessPieceColor.black);
    this.fields[8]['h'].chessPiece = new Rook(ChessPieceColor.black);
    this.fields[8]['b'].chessPiece = new Knight(ChessPieceColor.black);
    this.fields[8]['g'].chessPiece = new Knight(ChessPieceColor.black);
    this.fields[8]['c'].chessPiece = new Bishop(ChessPieceColor.black);
    this.fields[8]['f'].chessPiece = new Bishop(ChessPieceColor.black);
    this.fields[8]['d'].chessPiece = new Queen(ChessPieceColor.black);
    this.fields[8]['e'].chessPiece = new King(ChessPieceColor.black);
  }

  selectField(row: number, column: string) {
    const field: IField = this._fields[row][column];
    if (field.chessPiece) {
      this._selectedField = field;
    }
    this._potentialMoves = this.getPotentialMoves();
  }

  unselectField() {
    this._selectedField = null;
    this._potentialMoves = [];
  }

  move(toRow: number, toColumn: string) {
    const selectedField: IField = this._selectedField;
    const to: IField = this._fields[toRow][toColumn];
    const piece: ChessPiece = selectedField.chessPiece;
    const moveIsAllowed: boolean = !!this._potentialMoves.find((field: IField) =>
      field.row === toRow && field.column === toColumn
    );
    if (!moveIsAllowed) { return; }
    if (piece) {
      selectedField.chessPiece = null;
      to.chessPiece = piece;
      this.unselectField();
    }
  }

  getPotentialMoves(): IField[] {
    const field: IField = this._selectedField;
    if (!field || !field.chessPiece) {
      return [];
    }
    return field.chessPiece.movementModel.getPotentialMoves(field, this._fields, this.rows, this.columns);
  }

  private initBoard() {
    this._fields = {};
    this.rows.forEach((row: number) => {
      this._fields[row] = {};
      this.columns.forEach((column: string) => {
        this._fields[row][column] = {
          row,
          column,
          color: calculateFieldColor(row, column),
        };
      });
    });
  }

}

function calculateFieldColor(row: number, column: string): FieldColor {
  return isEven(column) && isEven(row)
    || !isEven(column) && !isEven(row)
    ? FieldColor.white
    : FieldColor.black;
}

function isEven(num: string | number): boolean {
  return Boolean(parseInt(num as string, 32) % 2);
}
