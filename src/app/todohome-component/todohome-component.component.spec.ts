import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodohomeComponentComponent } from './todohome-component.component';

describe('TodohomeComponentComponent', () => {
  let component: TodohomeComponentComponent;
  let fixture: ComponentFixture<TodohomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodohomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodohomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
