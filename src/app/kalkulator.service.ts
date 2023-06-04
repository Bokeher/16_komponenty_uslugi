import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class KalkulatorService {
    constructor() {}

    dodaj(...liczby: number[]): number {
        let wynik = 0;
        for(let wartosci of liczby) {
            wynik += wartosci;
        }
        return wynik;
    }

    odejmij(liczba1:number, liczba2:number): number {
        return liczba1 - liczba2;
    }

    pomnoz(...liczby: number[]): number {
        let wynik = 1;
        for(let wartosci of liczby) {
            wynik = wynik*wartosci;
        }
        return wynik;
    }

    podziel(liczba1:number, liczba2:number): number {
        if(liczba2 == 0) undefined;
        return liczba1/liczba2;
    }
}