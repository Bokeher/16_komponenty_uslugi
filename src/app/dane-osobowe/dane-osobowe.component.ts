import { Component, OnInit, Input } from '@angular/core';
import { Dane } from '../interface/Dane';

@Component({
  selector: 'app-dane-osobowe',
  templateUrl: './dane-osobowe.component.html',
  styleUrls: ['./dane-osobowe.component.css']
})
export class DaneOsoboweComponent implements OnInit {
  @Input() dane!: Dane;

  constructor() {}

  ngOnInit(): void {}
}
