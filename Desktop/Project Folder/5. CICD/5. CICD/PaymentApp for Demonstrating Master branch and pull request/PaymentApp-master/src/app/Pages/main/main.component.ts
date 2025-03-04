import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() feature = new EventEmitter<string>();
  @ViewChild('alert', {static: true}) alert: ElementRef;
  
  constructor() { 
    
  }

 
  ngOnInit() {
    
  } 
  closeAlert() {
    console.log("closing");
    this.alert.nativeElement.classList.remove('show');
  }
}
