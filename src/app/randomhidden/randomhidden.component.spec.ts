import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomhiddenComponent } from './randomhidden.component';

describe('RandomhiddenComponent', () => {
  let component: RandomhiddenComponent;
  let fixture: ComponentFixture<RandomhiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomhiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomhiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
