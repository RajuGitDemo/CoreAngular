import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import{ValidationService} from 'src/app/UIValidation/validation.service'


@Component({
  selector: 'app-error-control-message',
  template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ErrorControlMessageComponent implements OnInit {

  @Input() control: FormControl;
  constructor() { }

  ngOnInit(): void {
  }
  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
