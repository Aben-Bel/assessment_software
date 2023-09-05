import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
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
    @Input() outline:string='1px solid #E0E0E0';
    @Input() color: string = 'black';
    @Input() error: boolean = false;
    @Input() required: boolean = false;
    @Input() type: string = 'email';
    @Input() inputForm: FormControl=new FormControl('');
    @Input() errorMessage: string = "";
    @Output() onChange = new EventEmitter<string>();
    
    handleChange(event:any) {
        this.onChange.emit(event.target.value);
        }
    }
