import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.css']
})
export class RiddleComponent implements OnInit {

  reponse : string = "Les jumelles";
  res : string = '';

  constructor() { }

  ngOnInit() {
  }
  

  matchString(){
    this.res = this.reponse;
  }
}
