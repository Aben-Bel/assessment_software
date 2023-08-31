import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css']
})
export class PaginationComponentComponent {
/*
(classes, count(numOfPages), onChange, page(curPage))
 */
  classes:string='pagination-container';
}
