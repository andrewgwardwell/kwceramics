import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kathleenceramics';
  src='/src/assets/images/potter.jpg';
  src2='/src/assets/images/mugs.jpg';
  mugs:any= ['/src/assets/images/mugs1.jpg', '/src/assets/images/mugs.jpg'];
  bowls:any=['/src/assets/images/bowls.jpg','/src/assets/images/bowls.jpg'];
  teabowls:any=['/src/assets/images/teabowl.jpg']

  imagePath='';
  showMugs= false;
  showBowls= false;
  showTeabowls= false;
  toggleMugs(){
    this.showMugs=!this.showMugs;
  };
  toggleBowls(){
    this.showBowls=!this.showBowls;
  }; 
  toggleTeabowls(){
    this.showTeabowls=!this.showTeabowls;
  }
  ngOnInit(){
    this.changeImage('boom');
  }
  changeImage= function(keyword){ 
    if (keyword== 'boom'){
      this.imagePath= this.src;
    
    } else {
      this.imagePath= this.src2;
    }
    
  }
  
}
