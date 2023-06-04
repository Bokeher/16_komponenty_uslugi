import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SynComponent } from './syn/syn.component';
import { CorkaComponent } from './corka/corka.component';
import { DaneOsoboweComponent } from './dane-osobowe/dane-osobowe.component';
import { AutoComponent } from './auto/auto.component';
import { KalkulatorService } from "./kalkulator.service";

@NgModule({
  declarations: [
    AppComponent,
    SynComponent,
    CorkaComponent,
    DaneOsoboweComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [KalkulatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
