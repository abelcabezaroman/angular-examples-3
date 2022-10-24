import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAnimeComponent } from './input-anime.component';

describe('InputAnimeComponent', () => {
  let component: InputAnimeComponent;
  let fixture: ComponentFixture<InputAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
