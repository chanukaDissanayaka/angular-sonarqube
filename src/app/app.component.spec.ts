import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {

    const fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
    appComponent.itemList = [{id: 1, name: 'todolist', description: 'This is todo list app'},
                      {id: 2, name: 'unit test', description: 'Write unit tests'}];
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should add an item to list', ()=>{
    const item = {id: 10, name: 'newtodolist', description: 'This is new todo list'};
    var old = appComponent.numberOfItems ;

    appComponent.addItemList(item);

    expect(appComponent.numberOfItems).toBe(old+1);
  });

  it('should delete an item with existing item', () => {

    // given this item
    const item = {id: 1, name: 'todolist', description: 'This is todo list app'};
    // execute the test case
    var old = appComponent.itemList.length ;
    appComponent.deleteItem(item);
    // assertion
    expect(appComponent.itemList.length).toBe(old-1);
  });

  it('should not delete an item with new item', () => {

    // given this item
    const item = {id: 3, name: 'todolist', description: 'This is todo list app'};
    // execute the test case
    var old = appComponent.itemList.length ;
    appComponent.deleteItem(item);
    // assertion
    expect(appComponent.itemList.length).toBe(old);
  });


});
