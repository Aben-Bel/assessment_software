import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  id!: string;
  @Input() variant: 'Standard' | 'Filled' | 'Outlined' = 'Standard';
  @Input() background:string='#3056d3';
  @Input() autofocus: boolean = false;
  @Input() classes: string = '';
  @Input() color: string = '#3056d3';
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
