import {Component, Input, Output} from '@angular/core';

@Component({selector:'app-profile-avatar',
templateUrl:'./profile-avatar-component.html',
styleUrls:['./profile-avatar-component.css']})

export class ProfileAvatarComponent{
    isClicked:boolean=false;

    buttonClicked(){
        this.isClicked=!(this.isClicked);
    }
}