import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTodoListComponent } from './pro-todo-list.component';

describe('ProTodoListComponent', () => {
  let component: ProTodoListComponent;
  let fixture: ComponentFixture<ProTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
