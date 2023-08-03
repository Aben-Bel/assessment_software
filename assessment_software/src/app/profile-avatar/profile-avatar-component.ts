import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({selector:'app-profile-avatar',
templateUrl:'./profile-avatar-component.html',
styleUrls:['./profile-avatar-component.css']})

export class ProfileAvatarComponent{
    isClicked:boolean=false;
    @Input() avatar_name:string='Charlotte';
    @Input() dnMenuLinks:string[]=[];
    @Input() dnMenuText:string[]=[];
    @Output() onMenuClick=new EventEmitter;
    
    dropClicked(){
        this.isClicked=!(this.isClicked);
    }
    handleClick(event:any){
        this.onMenuClick.emit(event);
        console.log(event.target.text);
    }
}