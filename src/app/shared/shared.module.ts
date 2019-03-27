import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ErrorMessageComponent } from './error/error-message.component';
import { CopyrightPipe } from '../copyright.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorComponent, ErrorMessageComponent, CopyrightPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
