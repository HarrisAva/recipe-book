import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'recipe-book';
  loadedPage = 'recipe'  // to render this page first

  constructor() {}

  ngOnInit(): void {
    
  }

  //function to trigger the event onNavigate that received currentPage value from header click event
  onNavigate(page: string) {
    this.loadedPage = page;

  }
}

// Header page selection .. continue from header component:
// 3- event emit from header component function of onPageSelection that output currentPage.
//      - (currentPage)="onNavigatePage($event)
//   - use ngIf condition for each page
//     - *ngIf="pageDisplayed === 'recipe'"
//     - *ngIf="pageDisplayed === 'myrecipe'"
//   - function of onNavigatePage result in pageDisplayed = page;
//     -
//     
