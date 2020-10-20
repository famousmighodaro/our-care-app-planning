import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  requestedPage = 1;
  checked = false;
  @Output()
   toggleNavMenu = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }



  onPageChange(requestedPage) {
 	this.requestedPage = requestedPage;

 	console.log(this.requestedPage);
 	this.checked = false;
  }

}
