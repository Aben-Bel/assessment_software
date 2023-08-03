import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent {
  @Input() id: string = '';
  @Input() variant: string = 'date';
  @Output() onDateChange = new EventEmitter<string>();

  hangleDateChange(event: any) {
    this.onDateChange.emit(event.target.value);
  }
}
