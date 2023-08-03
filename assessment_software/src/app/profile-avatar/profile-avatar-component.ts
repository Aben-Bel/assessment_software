import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({selector:'app-profile-avatar',
templateUrl:'./profile-avatar-component.html',
styleUrls:['./profile-avatar-component.css']})

export class ProfileAvatarComponent{
    isClicked:boolean=false;
    @Input() avatar_name:string='Charlotte';
    @Output() onPwdClick= new EventEmitter;
    @Output() onLogoutClick=new EventEmitter;
    
    dropClicked(){
        this.isClicked=!(this.isClicked);
    }
    handleLogoutClick(event:any){
        this.onLogoutClick.emit(event);
    }
    handleChangePwdClick(event:any){
        this.onPwdClick.emit(event);
    }
}