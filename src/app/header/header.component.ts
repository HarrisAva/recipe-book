import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from "@angular/core"; // send variable to the parent component

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

// send variable 'currentPage' to parent component
  @Output() currentPage = new EventEmitter<string>();
  // collapsed: boolean = true;
  // show: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }
// function to emit feature selected variable then output currentPage variable
  onSelectPage(page: string) {
    // pass page to parent
    this.currentPage.emit(page);
  }

}

// Header page selection:

// 1- click event onSelectedPage for each page
//   - (click)="onSelectPage('myrecipe')">My Recipe
//   - (click)="onSelectPage('recipe')">All Recipes
//   - 
// 2- output/emit page selected as currentPage to parent component (app.component.ts)
    // - onSelectPage(page: string)
    // - this.currentPage.emit(page); 
    //           ** (page) is linked to (page) in parent component
    // - @Output() currentPage = new EventEmitter<string>();
// - continue in AppComponent ...



