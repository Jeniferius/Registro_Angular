import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.minLength(5), Validators.required]),
      password: new FormControl('', [Validators.minLength(5),Validators.required]),
      passwordRep: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.pattern(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/)]),
      address: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, this.validarEdad])
    });
  }

  validarEdad(control) {
    let edad = control.value;
    if (edad >= 18 && edad <= 65) {
      return null; //Validación correcta devuelve null
    } else {
      return { mensaje: 'La edad debe estar entre 18 y 65' };
    }
  }

  onSubmit() {
    this.userService.enviarDatosForm(this.form.value).then((res) => {
      console.log(res);
    })
    console.log(this.form.value);
  }

  

}
