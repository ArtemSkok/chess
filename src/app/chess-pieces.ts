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
  IMovementModel,
  PawnMovementModel,
  KnightMovementModel,
  BishopMovementModel,
  QueenMovementModel,
  RookMovementModel,
  KingMovementModel
} from './movement-models';
import { ChessPieceColor } from './models';


export abstract class ChessPiece {
  readonly abstract icon: IconDefinition;
  abstract movementModel: IMovementModel;
  constructor(public color: ChessPieceColor) { }
}

export class Pawn extends ChessPiece {
  icon = faChessPawn;
  movementModel = new PawnMovementModel();
  constructor(color) {
    super(color);
  }
}

export class Knight extends ChessPiece {
  icon = faChessKnight;
  movementModel = new KnightMovementModel();
  constructor(color) {
    super(color);
  }
}

export class Bishop extends ChessPiece {
  icon = faChessBishop;
  movementModel = new BishopMovementModel();
  constructor(color) {
    super(color);
  }
}

export class Rook extends ChessPiece {
  icon = faChessRook;
  movementModel = new RookMovementModel();
  constructor(color) {
    super(color);
  }
}

export class Queen extends ChessPiece {
  icon = faChessQueen;
  movementModel = new QueenMovementModel();
  constructor(color) {
    super(color);
  }
}

export class King extends ChessPiece {
  icon = faChessKing;
  movementModel = new KingMovementModel();
  constructor(color) {
    super(color);
  }
}
