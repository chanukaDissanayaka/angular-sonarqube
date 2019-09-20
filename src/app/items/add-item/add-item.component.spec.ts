import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AddItemComponent } from './add-item.component';
import { AppComponent } from '../../app.component';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
  let AppComponent : AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add item to the list',()=>{
    const itemForm = new FormGroup({
      name: new FormControl('A', Validators.required),
      description: new FormControl('aa', Validators.required),
    });
    var old = AppComponent.itemList.length
    component.onSubmit();
    expect(AppComponent.itemList.length).toBe(old);
  });

  it('should reject the input',()=>{
    const itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    var old = component.numberOfAttempts
    component.onSubmit();
    expect(component.numberOfAttempts).toBe(old+1);
  })
});
