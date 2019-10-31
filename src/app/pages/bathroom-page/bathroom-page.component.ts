import { Component, OnInit } from '@angular/core'
import { MansionService } from 'src/app/shared/mansion.service';
import { Item } from '../../shared/item';

@Component({
  selector: 'app-bathroom-page',
  templateUrl: './bathroom-page.component.html',
  styleUrls: ['./bathroom-page.component.css']
})
export class BathroomPageComponent implements OnInit {

  item: Item;
  items: Item[];
  display: boolean = true;
  letterP: boolean = false;
  letterS: boolean = false;
  letterY: boolean = false;
  letterC: boolean = false;
  letterH: boolean = false;
  letterO: boolean = false;
  letterS1: boolean = false;
  letterE: boolean = false;
  

  constructor(public mansionService: MansionService) { }

  ngOnInit() {
    this.getItems();
    }

  getItems(): void {
    this.items=this.mansionService.getItems();
  }
  displayNotice() {
    this.display = false;
  }
  displayWord(item: Item) {
    this.mansionService.displayWord(item);
    this.letterP = this.mansionService.letterP;
    this.letterS = this.mansionService.letterS;
    this.letterY = this.mansionService.letterY;
    this.letterC = this.mansionService.letterC;
    this.letterH = this.mansionService.letterH;
    this.letterO = this.mansionService.letterO;
    this.letterS1 = this.mansionService.letterS1;
    this.letterE = this.mansionService.letterE;
    console.log(this.letterC)
  }
}
