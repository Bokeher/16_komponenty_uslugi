import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorkaComponent } from './corka.component';

describe('CorkaComponent', () => {
  let component: CorkaComponent;
  let fixture: ComponentFixture<CorkaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorkaComponent]
    });
    fixture = TestBed.createComponent(CorkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
