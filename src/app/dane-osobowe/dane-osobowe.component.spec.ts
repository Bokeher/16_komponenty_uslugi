import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaneOsoboweComponent } from './dane-osobowe.component';

describe('DaneOsoboweComponent', () => {
  let component: DaneOsoboweComponent;
  let fixture: ComponentFixture<DaneOsoboweComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaneOsoboweComponent]
    });
    fixture = TestBed.createComponent(DaneOsoboweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
