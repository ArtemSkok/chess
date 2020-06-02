import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IChessPiece } from '../../data-models';

@Component({
  selector: 'app-piece-select-dialog',
  templateUrl: './piece-select-dialog.component.html',
  styleUrls: ['./piece-select-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieceSelectDialogComponent {

  pieces: IChessPiece[] = [];

  constructor() {

  }

}
