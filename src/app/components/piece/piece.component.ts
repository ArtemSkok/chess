import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { PieceColor } from '../../data-models';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieceComponent {
  readonly PieceColor = PieceColor;

  @Input() icon: IconDefinition;
  @Input() color: PieceColor;
}
