import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userName$.subscribe(name => {
      this.userName = name;
    });
  }
}
