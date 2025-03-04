import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() feature = new EventEmitter<string>();
  public isCollapsed = true;
  isShown:boolean = false;
  notification: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onSection(feature: string){
    this.feature.emit(feature);
  }

  onBellClick(){
    this.notification = null;
  }

}
