import { Component, OnInit } from '@angular/core';
import { MansionService } from '../mansion.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-livingroom',
  templateUrl: './livingroom.component.html',
  styleUrls: ['./livingroom.component.css']
})
export class LivingroomComponent implements OnInit {

  movies : Movie[] ;
  moviesToDisplay : Movie[] = [];
 
  
  constructor(private mansionService : MansionService) {}
  
  ngOnInit() {
    this.mansionService.getMovies().subscribe((data)=>{
      this.movies = data.movies; 
      this.moviesToDisplay.push(this.movies[2],
                                this.movies[5],
                                this.movies[7],
                                this.movies[15],
                                this.movies[42],
                                this.movies[23],
                                this.movies[65],
                                this.movies[25],
                                this.movies[42],
                                this.movies[66],
                                this.movies[29],
                                this.movies[33],
                                this.movies[68],
                                )
    });
    
  }

}
