import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { PieceColor } from '../../data-models';

@Component({
  selector: 'app-chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessPieceComponent {
  readonly PieceColor = PieceColor;

  @Input() icon: IconDefinition;
  @Input() color: PieceColor;
}
