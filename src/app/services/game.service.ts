import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Board } from '../game-model/board';
import { PieceSelectDialogComponent } from '../components/piece-select-dialog/piece-select-dialog.component';
import { PieceColor, IBoardField, IChessPiece } from '../data-models';
import { ChessGame, PlayersMap } from '../game-model/chess-game';

@Injectable()
export class GameService {
  // playerWhoseTurnColor: ChessPieceColor;
  // players: IPlayers = {
  //   [ChessPieceColor.white]: {
  //     name: 'Player 1'
  //   },
  //   [ChessPieceColor.black]: {
  //     name: 'Player 2'
  //   },
  // };
  // board: ChessBoard = new ChessBoard();

  playersMap: PlayersMap = { // TODO: Set players with UI
    [PieceColor.white]: {
      name: 'Player 1'
    },
    [PieceColor.black]: {
      name: 'Player 2'
    },
  };
  game: ChessGame = new ChessGame(this.playersMap); // TODO: Start game with UI


  constructor(
    private dialog: MatDialog
  ) {
    // this.board.initGame();
  }

  onFieldClick(field: IBoardField<IChessPiece>) { // TODO: Move to Game class
    const selectedField: IBoardField<IChessPiece> = this.game.selectedField;
    if (selectedField) {
      if (field !== selectedField) {
        this.game.moveSelected(field.row, field.column);
      }
      this.game.unselectField();
    } else if (field.piece) {
      this.game.selectField(field.row, field.column);
    }
  }

  // startNewGame() {
  //   this.game = 
  // }

  // openSelectPieceDialog() {
  //   this.dialog.open(PieceSelectDialogComponent)
  //     .afterClosed()
  //     .subscribe(() => {

  //     });
  // }

}
