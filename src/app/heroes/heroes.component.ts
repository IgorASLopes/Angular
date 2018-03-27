import { Component, OnInit } from '@angular/core';
import { Hero } from './domain/hero';
import { HEROES } from './domain/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero : Hero = {
    id :1,
    name: "Batman"
  }
    
  heroes : Hero[] = HEROES;
    
  ngOnInit() {
  }

}
