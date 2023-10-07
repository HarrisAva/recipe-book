import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-book';

  constructor() {}

  ngOnInit(): void {
    
  }

  pageDisplayed = "recipe"  // to render this page first

  //function to trigger the event
  onNavigatePage(page: string) {
    this.pageDisplayed = page;

  }
}
