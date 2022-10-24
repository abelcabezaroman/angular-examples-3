import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentButtonComponent } from './ng-content-button.component';

describe('NgContentButtonComponent', () => {
  let component: NgContentButtonComponent;
  let fixture: ComponentFixture<NgContentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
