import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KalkulatorService } from "../kalkulator.service";

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent implements OnInit {
  @Input() zmiennaInput!: string[]; // do przesylania danych do rodzica

  @Output() odpowiedz = new EventEmitter<string>();

  dodawanie: number = 0;
  constructor(kalkulator: KalkulatorService) {
    this.dodawanie = kalkulator.dodaj(1,2,3,4,5);
  }

  ngOnInit(): void {
    const wiadomosc = "Pochodze z komponentu syn i startuje razem z nim";
    alert(wiadomosc);
  }

  wysylanie() {
    this.odpowiedz.emit("Będę czekał");
  }

  
}
