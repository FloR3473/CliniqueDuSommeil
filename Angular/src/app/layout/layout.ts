import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor(protected userService: UserService) { // injection du service UserService}
  }
  
    logout() {
    this.userService.clearUser();
} 
}