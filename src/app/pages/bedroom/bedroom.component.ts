import { Component, OnInit } from '@angular/core';
import { BEDIMAGES } from './bedroom-mock'
import { BedroomImages } from './bedroomImg';


@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']

})
export class BedroomComponent implements OnInit {

images = BEDIMAGES;

  constructor() { }

  correctAnswer: BedroomImages [] = [];
  exitScreen = false;

  ngOnInit() { }

  addAnswer(image: BedroomImages){
    if(image.id === 'cross' || image.id === 'holyWater' || image.id === 'bible' ){
      this.correctAnswer.push(image)
      this.displayExit()
      console.log(this.correctAnswer)
  
    }
  }

  displayExit(){
    if (this.correctAnswer.length === 3){
      this.exitScreen = true;
    }
  }
  
}
