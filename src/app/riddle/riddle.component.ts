import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.css']
})
export class RiddleComponent implements OnInit {

  reponse : string = "jumelles";
  res : string = '';
  reponseTrue : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  

  matchString() {
    if(this.res === this.reponse){
    return this.reponseTrue = true;
    }else{console.log('ok')}
    console.log(this.reponseTrue)
  }
}
