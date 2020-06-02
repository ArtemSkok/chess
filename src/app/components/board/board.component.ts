import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BoardFieldColor, IBoardField, IChessPiece, PieceColor, ChessPieceType } from '../../data-models';
import { GameService } from '../../services/game.service';

// type ChessTypeIconMap = {
//   [pieceType in ChessPieceType]: IconDefinition;
// };

// const chessTypeIconMap: ChessTypeIconMap = {
//   [ChessPieceType.pawn]: faChessPawn,
//   [ChessPieceType.knight]: faChessKnight,
//   [ChessPieceType.rook]: faChessRook,
//   [ChessPieceType.bishop]: faChessBishop,
//   [ChessPieceType.king]: faChessKing,
//   [ChessPieceType.queen]: faChessQueen,
// };

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  readonly BoardFieldColor = BoardFieldColor;

  get fields(): IBoardField<IChessPiece>[][] {
    return Object
      .keys(this.gameService.game.board.fields).map((r: string) => {
        const row: number = Number(r);
        return Object.keys(this.gameService.game.board.fields[row]).map((column: string) =>
          this.gameService.game.board.fields[row][column]
        );
      })
      .reverse();
  }

  constructor(
    public gameService: GameService,
  ) { }

  onFieldClick(field: IBoardField<IChessPiece>) { // TODO: Refactor (move to game service)
    this.gameService.onFieldClick(field);

  }
}
