import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

fdescribe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: AppService;

  beforeEach(() => {
    service = TestBed.get(AppService);
    service.totalItems = [{id: 1, name: 'todolist', description: 'This is todo list app'}];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to total items', () => {

    const item = {id: 2, name: 'seconditem', description: 'This is second item'};

    service.addItems(item);

    expect(service.totalItems.length).toBe(2);
  });


});
