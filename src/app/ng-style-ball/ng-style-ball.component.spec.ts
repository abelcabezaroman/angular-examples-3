import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleBallComponent } from './ng-style-ball.component';

describe('NgStyleBallComponent', () => {
  let component: NgStyleBallComponent;
  let fixture: ComponentFixture<NgStyleBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
