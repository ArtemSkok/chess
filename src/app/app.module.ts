import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { PieceSelectDialogComponent } from './components/piece-select-dialog/piece-select-dialog.component';
import { GameService } from './services/game.service';
import { BoardComponent } from './components/board/board.component';
import { ChessPieceComponent } from './components/chess-piece/chess-piece.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceSelectDialogComponent,
    BoardComponent,
    ChessPieceComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
