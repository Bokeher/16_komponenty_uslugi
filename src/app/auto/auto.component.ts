import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../interface/Car';
import { Type } from '../interface/Type';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit{
  @Input() car!: Car;

  type = Type;
  aktywna: boolean = true;
  showImage: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
