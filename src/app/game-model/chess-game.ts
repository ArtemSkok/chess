import { Pawn, Rook, Knight, Bishop, Queen, King } from './chess-pieces';
import { PieceColor, IBoardField, IChessPiece, ChessPieceType } from '../data-models';
import { Board } from './board';
import {
  PawnMovementModel,
  KnightMovementModel,
  RookMovementModel,
  BishopMovementModel,
  QueenMovementModel,
  KingMovementModel,
  IMovementModel
} from './movement-models';

export interface IPlayer {
  name?: string;
}

export type PlayersMap = {
  [key in PieceColor]: IPlayer;
};

type ChessPieceMovementModelMap = {
  [key in ChessPieceType]: IMovementModel;
};

const pieceMovementModelMap: ChessPieceMovementModelMap = {
  [ChessPieceType.pawn]: new PawnMovementModel(),
  [ChessPieceType.knight]: new KnightMovementModel(),
  [ChessPieceType.rook]: new RookMovementModel(),
  [ChessPieceType.bishop]: new BishopMovementModel(),
  [ChessPieceType.queen]: new QueenMovementModel(),
  [ChessPieceType.king]: new KingMovementModel(),
};

export class ChessGame {
  readonly board: Board<IChessPiece> = new Board();

  get turnColor(): PieceColor {
    return this._turnColor;
  }
  get selectedField(): IBoardField<IChessPiece> {
    return this._selectedField;
  }
  get potentialMoves() {
    return this._potentialMoves;
  }

  private _turnColor: PieceColor = PieceColor.white;
  private _selectedField: IBoardField<IChessPiece>;
  private _potentialMoves: IBoardField<IChessPiece>[] = [];

  constructor(
    public palyersMap: PlayersMap
  ) {
    this.initGame();
  }

  moveSelected(row: number, column: string) {
    if (this.potentialMoves.includes(this.board.fields[row][column])) {
      this.board.move(this._selectedField.row, this._selectedField.column, row, column);
      this.changeTurn();
    }
  }

  selectField(row: number, column: string) {
    const field: IBoardField<IChessPiece> = this.board.fields[row][column];
    if (!field.piece || field.piece.color !== this.turnColor) { return; }
    this._selectedField = field;
    this._potentialMoves = this.getPotentialMoves();
  }

  getPotentialMoves(): IBoardField<IChessPiece>[] {
    const field: IBoardField<IChessPiece> = this._selectedField;
    if (!field || !field.piece) {
      return [];
    }

    return pieceMovementModelMap[field.piece.type].getPotentialMoves(field, this.board.fields, this.board.rows, this.board.columns);
    // switch (field.piece.type) {
    //   case ChessPieceType.pawn:
    //   // return
    //   case ChessPieceType.knight:
    //   case ChessPieceType.rook:
    //   case ChessPieceType.bishop:
    //   case ChessPieceType.queen:
    //   case ChessPieceType.king:
    // }
    // return field.chessPiece.movementModel.getPotentialMoves(field, this._fields, this.rows, this.columns);
  }

  unselectField() {
    this._selectedField = null;
    this._potentialMoves = [];
  }

  private initGame() {
    Object.keys(this.board.fields[2]).forEach((col: string) => {
      this.board.setFieldPiece(2, col, new Pawn(PieceColor.white));
    });
    this.board.setFieldPiece(1, 'a', new Rook(PieceColor.white));
    this.board.setFieldPiece(1, 'h', new Rook(PieceColor.white));
    this.board.setFieldPiece(1, 'b', new Knight(PieceColor.white));
    this.board.setFieldPiece(1, 'g', new Knight(PieceColor.white));
    this.board.setFieldPiece(1, 'c', new Bishop(PieceColor.white));
    this.board.setFieldPiece(1, 'f', new Bishop(PieceColor.white));
    this.board.setFieldPiece(1, 'd', new Queen(PieceColor.white));
    this.board.setFieldPiece(1, 'e', new King(PieceColor.white));

    Object.keys(this.board.fields[7]).forEach((col: string) => {
      this.board.setFieldPiece(7, col, new Pawn(PieceColor.black));
    });
    this.board.setFieldPiece(8, 'a', new Rook(PieceColor.black));
    this.board.setFieldPiece(8, 'h', new Rook(PieceColor.black));
    this.board.setFieldPiece(8, 'b', new Knight(PieceColor.black));
    this.board.setFieldPiece(8, 'g', new Knight(PieceColor.black));
    this.board.setFieldPiece(8, 'c', new Bishop(PieceColor.black));
    this.board.setFieldPiece(8, 'f', new Bishop(PieceColor.black));
    this.board.setFieldPiece(8, 'd', new Queen(PieceColor.black));
    this.board.setFieldPiece(8, 'e', new King(PieceColor.black));
  }

  private changeTurn() {
    this._turnColor = this._turnColor === PieceColor.white
      ? PieceColor.black
      : PieceColor.white;
  }
}
