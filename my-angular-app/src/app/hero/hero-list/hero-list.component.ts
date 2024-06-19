// src/app/hero/hero-list/hero-list.component.ts
import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../service/hero.service";
import {Hero} from "../hero.model";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  newHeroName = '';

  // Inject the hero service
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  addHero() : void {
    if (this.newHeroName.trim()) {
      this.heroes = this.heroService.addHero(this.newHeroName);
      this.newHeroName = '';
    }
  }

  clearHeroes(): void {
    this.heroService.clearHeroes();
    this.heroes = [];
  }
}
