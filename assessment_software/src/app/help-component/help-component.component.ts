import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help-component',
  templateUrl: './help-component.component.html',
  styleUrls: ['./help-component.component.css']
})
export class HelpComponentComponent {
  @Input() helpMessage : string = '';
  
}
