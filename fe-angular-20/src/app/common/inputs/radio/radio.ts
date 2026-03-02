import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, FormsModule, NzRadioModule],
  templateUrl: './radio.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Radio),
      multi: true,
    },
  ],
})
export class Radio implements ControlValueAccessor {
  label = input<string>('');
  options = input<{ label: string; value: any }[]>([]);
  value: any = signal<any>(null);
  disabled = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onValueChange(value: any): void {
    this.value.set(value);
    this.onChange(value);
    this.onTouched();
  }
}
