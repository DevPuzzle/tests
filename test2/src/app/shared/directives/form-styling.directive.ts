import { Directive } from '@angular/core';

/*
  Directive we can add to each form
  if we want to apply ability to create custom styles
*/

@Directive({
  selector: '[form-styling]'
})
export class FormStylingDirective {

  constructor() { }

}
