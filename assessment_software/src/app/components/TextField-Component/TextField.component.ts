import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-textfield',
    templateUrl:'./TextField.component.html',
    styleUrls:['./TextField.component.css'],
    
})

export class TextField{
    @Input() id: string = '';
    @Input() value: string = '';
    @Input() variant: 'Standard' | 'Filled' | 'Outlined' = 'Standard';
    @Input() placeholder: string = '';
    @Input() autofocus: boolean = false;
    @Input() classes: string = 'textfield-skin';
    @Input() color: string = 'black';
    @Input() error: boolean = false;
    @Input() required: boolean = false;
    @Input() type: string = 'email';
    @Input() errorMessage: string = "";
    @Output() onChange = new EventEmitter<string>();
    
    handleChange(event:any) {
        this.onChange.emit(event.target.value);
        }
    }
