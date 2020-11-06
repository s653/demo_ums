import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDialComponent } from './add-new-dial.component';

describe('AddNewDialComponent', () => {
  let component: AddNewDialComponent;
  let fixture: ComponentFixture<AddNewDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
