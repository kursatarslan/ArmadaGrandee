
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFocus } from '../../directives/focus.directive';
import {SpinnerComponent} from '../../spinner/spinner.component';


@NgModule({
  imports:      [CommonModule],
  declarations: [MyFocus, SpinnerComponent],
  exports:      [MyFocus, SpinnerComponent],
  providers:    []
})
export class SharedModule {}
