import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-corka',
  templateUrl: './corka.component.html',
  styleUrls: ['./corka.component.css']
})
export class CorkaComponent implements OnDestroy, OnInit {
  @Input() name!: string;

  ngOnDestroy(): void {
    console.log("zostalem zniszczony");
  }

  ngOnInit(): void {
      
  }
}
