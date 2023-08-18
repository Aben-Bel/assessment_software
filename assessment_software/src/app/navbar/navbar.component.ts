import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title:string[]=['Courses','Archived','Components'];
  url:string[]=["\courses","\archived","\component"];
  
}
