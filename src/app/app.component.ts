import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faChessKing } from '@fortawesome/free-solid-svg-icons';

import { GameService } from './services/game.service';
import { PieceColor } from './data-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly PieceColor = PieceColor;
  readonly faChessKing = faChessKing;

  constructor(public gameService: GameService) { }

}
