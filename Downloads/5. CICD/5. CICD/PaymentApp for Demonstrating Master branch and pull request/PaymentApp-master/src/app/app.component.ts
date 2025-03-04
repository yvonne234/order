import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() feature: string;
  appendedTitle: string;
  title = 'Better Off';
  loadedFeature = "Main";
  isClosed = true;
  ngOnInit(){
    this.appendedTitle = "Better Off"
  }
  

  onFeatureSelect(data){    
    console.log(data);
    if(data === "Main"){
      this.loadedFeature = "Main";
      this.appendedTitle = "Better Off"
    }
    else if(data === "login"){
      this.loadedFeature = "login";
      this.appendedTitle = "Sign In & Start Exploring"
    }
    else if(data === "help"){
      this.loadedFeature = "help";
      this.appendedTitle = "Need help?"
    }
    else if(data === "careers"){
      this.loadedFeature = "careers";
      this.appendedTitle = "Work with us!"
    }
    this.loadedFeature = data;
  }
}
