import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-help-component',
  templateUrl: './help-component.component.html',
  styleUrls: ['./help-component.component.css'],
})
export class HelpComponentComponent {
  hide = true;

  @Input() helpMessage: string = 'No guide available for the time being.';

  @HostListener('mouseenter') onMouseEnter() {
    this.hide = false;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hide = true;
  }
}
