import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-rebus',
  templateUrl: './rebus.component.html',
  styleUrls: ['./rebus.component.css']
})
export class RebusComponent implements OnInit {

  answer: string; 
  answerSubmited : string;
  goodAnswer: string = "Paranormal Activity"


  constructor() { }

  ngOnInit() {
   
  }

  submitAnswerRebus(){
    this.answerSubmited = this.answer;
  }
}
