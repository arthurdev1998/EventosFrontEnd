import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Type, input } from '@angular/core';

type BtnVariants = "primary" | "secundary"

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  @Output("submit") onSubmit = new EventEmitter();
  

  submit()
  {
    this.onSubmit.emit();
  }
}
