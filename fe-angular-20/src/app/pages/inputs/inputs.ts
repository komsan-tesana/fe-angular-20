import { Component, inject } from '@angular/core';
import { Input } from '../../common/inputs/input/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Radio } from '../../common/inputs/radio/radio';
import { Select } from '../../common/inputs/select/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Input, Radio, Select],
  templateUrl: './inputs.html',
  styleUrl: './inputs.scss',
})
export class Inputs {
  fb = inject(FormBuilder);

  fg = this.fb.group({
    input: '',
    radio: 'Yes',
    select: [],
  });
}
