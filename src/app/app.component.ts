import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChessBoard } from './board';
import { FieldColor, IField } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly FieldColor = FieldColor;

  board: ChessBoard = new ChessBoard();

  get fields(): IField[][] {
    return Object
      .keys(this.board.fields).map((r: string) => {
        const row: number = Number(r);
        return Object.keys(this.board.fields[row]).map((column: string) =>
          this.board.fields[row][column]
        );
      })
      .reverse();
  }

  constructor() {
    this.board.initGame();
  }

  onFieldClick(field: IField) {
    const selectedField = this.board.selectedField;

    if (selectedField) {
      if (field !== selectedField) {
        this.board.move(field.row, field.column);
      } else {
        this.board.unselectField();
      }
    } else {
      this.board.selectField(field.row, field.column);
    }

  }

}
