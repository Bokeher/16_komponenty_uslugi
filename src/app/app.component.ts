import { Component } from '@angular/core';

import { Car } from "./interface/Car";
import { Type } from "./interface/Type";
import { Dane } from "./interface/Dane";
import { KalkulatorService } from "./kalkulator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KalkulatorService]
})
export class AppComponent {
  title = '16_komponenty_uslugi';

  cars: Car[] = [
    {
      brand: "McLaren",
      model: "P1",
      image: "assets/images/mclaren.jpg",
      data: ["903 KM", "979 Nm", "2,8 s", "350 km/h"],
      type: Type.sport
    },
    {
      brand: "Ferrari",
      model: "F488 spider",
      image: "assets/images/ferrari.jpg",
      data: ["900 KM", "990 Nm", "3 s", "340 km/h"],
      type: Type.sport
    }
  ];

  car: Car = this.cars[0];
  kolorb: string = "white";
  kolort: string = "black";

  // funckja do zmiany kolorów
  changeColour() {
    this.kolorb = this.kolorb === "white" ? "black":"white";
    this.kolort = this.kolort === "black" ? "white":"black";
  }

  aktywna: boolean = true;


  // for syn component
  zmiennaExport: string[] = ["17:00", "pływalnia"];

  // dane osobowe
  daneOsobowe: Dane = {
    imie: "Tomasz",
    nazwisko: "Kowalski",
    wiek: 23,
  };

  // odpowiedz
  onOdpowiedz(otrzymane: string) {
    alert(otrzymane);
  }

  formularz: string = "";

  dodawanie: number = 0;
  odejmowanie: number = 0;
  mnozenie: number = 0;
  dzielenie: number = 0;
  constructor(kalkulator: KalkulatorService) { 
    this.dodawanie = kalkulator.dodaj(3, 6, 7, 9, 2);
    this.odejmowanie = kalkulator.odejmij(10, 4);
    this.mnozenie = kalkulator.pomnoz(10, 4, 2);
    this.dzielenie = kalkulator.podziel(10, 4);
  }
}
