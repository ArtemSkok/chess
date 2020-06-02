import {
  faChessPawn,
  faChessBishop,
  faChessKing,
  faChessQueen,
  faChessKnight,
  faChessRook,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

import {
  PieceColor,
  IChessPiece,
  ChessPieceType
} from '../data-models';

export abstract class AbstractChessPiece implements IChessPiece {
  readonly abstract icon: IconDefinition;
  readonly abstract type: ChessPieceType;
  constructor(public color: PieceColor) { }
}

export class Pawn extends AbstractChessPiece {
  readonly icon = faChessPawn;
  readonly type = ChessPieceType.pawn;
  constructor(color) {
    super(color);
  }
}

export class Knight extends AbstractChessPiece {
  readonly icon: IconDefinition = faChessKnight;
  readonly type: ChessPieceType = ChessPieceType.knight;
  constructor(color) {
    super(color);
  }
}

export class Bishop extends AbstractChessPiece {
  readonly icon: IconDefinition = faChessBishop;
  readonly type: ChessPieceType = ChessPieceType.bishop;
  constructor(color) {
    super(color);
  }
}

export class Rook extends AbstractChessPiece {
  readonly icon: IconDefinition = faChessRook;
  readonly type: ChessPieceType = ChessPieceType.rook;
  constructor(color) {
    super(color);
  }
}

export class Queen extends AbstractChessPiece {
  readonly icon: IconDefinition = faChessQueen;
  readonly type: ChessPieceType = ChessPieceType.queen;
  constructor(color) {
    super(color);
  }
}

export class King extends AbstractChessPiece {
  readonly icon: IconDefinition = faChessKing;
  readonly type: ChessPieceType = ChessPieceType.king;
  constructor(color) {
    super(color);
  }
}
