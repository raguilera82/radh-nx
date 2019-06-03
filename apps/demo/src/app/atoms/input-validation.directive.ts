import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'radh-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputValidationDirective),
      multi: true
    }
  ]
})
export class InputValidationDirective implements ControlValueAccessor {
  private _value: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private elementRef: ElementRef) { 
    console.log()
  }

  get value() {
    return this._value;
  }

  set value(val) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(this._value);
      this.onTouched();
      this.elementRef.nativeElement.value = val;
    }
  }

  @HostListener('changed', ['$event.detail'])
  listenForValueChange(value) {
    this.value = value;
  }

  // Implements ControlValueAccessor
  writeValue(value: string): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
