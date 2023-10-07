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
  collapsed: boolean = true;
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }

// function to emit featureSelected variable
  onSelectPage(page: string) {
    // pass page to parent
    this.currentPage.emit(page);
  }

}
