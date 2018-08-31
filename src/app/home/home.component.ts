import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
  }

  peticionGet() {
    this.userService.peticionGet().then((res) => {
      console.log(res);
    });
    
  }

  getPremio() {
    this.userService.obtenerPremio().then((res) => {
      console.log(res);
    })
  }

}
