import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id_movie: string = "";
  mv_Title: string = "";
  mv_Rated: string = "";
  mv_Released: string = "";
  mv_Director: string = "";
  mv_Actors: string = "";
  mv_Plot: string = "";

  constructor() { }

  ngOnInit() {
  }


}
