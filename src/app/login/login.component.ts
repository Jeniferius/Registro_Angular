import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.minLength(5), Validators.required]),
      password: new FormControl('', [Validators.minLength(5),Validators.required]),
    });
  }

  onSubmit(){
    this.userService.postLogin(this.form.value).then((res) => {
      console.log(res.json());
    })
  }

}
