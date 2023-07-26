import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({selector:'app-textarea',
templateUrl:'./textarea.component.html',
styleUrls:['./textarea.component.css'],
})

export class TextareaComponent{
    @Input () styleClass:string='textarea-skin';
    @Input() maxlength:number=0;
    @Input() minlength:number=0;
    @Output() onValueChange= new EventEmitter<string>();

    newTextAreaValue(event:any){
        
        this.onValueChange.emit(event.target.value);
    }
}