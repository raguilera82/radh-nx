import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-input-validation-example',
    template: `

    <h2>Inputs with validation</h2>

    <radh-input [validator]="validator" (changed)="changeInput($event)" [formControl]="inputV"></radh-input>
    <p>Angular Reactive Form Example --> Valid (required): {{inputV.valid}}</p>
    `
})

export class InputValidationExampleComponent implements OnInit {
    validator: any;

    inputV = new FormControl('', Validators.required);

    constructor() { }

    ngOnInit() {
        this.validator = [{
            name: 'length',
            options: {
                min: 6
            }
        }, 'fruit'];
    }

    changeInput(ev) {
        console.log(ev.detail);
    }
}
