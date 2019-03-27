import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';
import { CopyrightPipe } from '../../copyright.pipe';

fdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, CopyrightPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shoud display footerText as Unit Testing', () => {

    component.footerText = 'Unit Testing';
    fixture.detectChanges();

    const bannerDe: DebugElement = fixture.debugElement;
    const headingDe = bannerDe.query(By.css('h2'));
    const h2: HTMLElement = headingDe.nativeElement;

    expect(h2.textContent).toContain('Unit Testing');

  });

  it('Shoud display numberOfItems as 10', () => {

    component.numberOfItems = 10;
    fixture.detectChanges();

    const bannerDe: DebugElement = fixture.debugElement;
    const headingDe = bannerDe.query(By.css('h1'));
    const h1: HTMLElement = headingDe.nativeElement;

    expect(h1.textContent).toContain('10');

  });

});
