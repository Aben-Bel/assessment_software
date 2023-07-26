import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-path-display',
  templateUrl: './path-display.component.html',
  styleUrls: ['./path-display.component.css']
})
export class PathDisplayComponent {
  @Input () pathDisplay:string[]=[];
  @Input () links:string[]=[];
  @Input () style:string='path-skin';

}
