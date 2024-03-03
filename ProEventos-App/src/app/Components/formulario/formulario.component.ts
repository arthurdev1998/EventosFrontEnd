import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ButtonPrimaryComponent,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  meuFormulario!: FormGroup;

  constructor()
  {
    this.meuFormulario = new FormGroup(
      {
        nome: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
      })
  }
}
