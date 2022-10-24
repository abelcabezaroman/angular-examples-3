import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfOverComponent } from './ng-if-over.component';

describe('NgIfOverComponent', () => {
  let component: NgIfOverComponent;
  let fixture: ComponentFixture<NgIfOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
