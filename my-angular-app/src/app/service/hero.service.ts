import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import {Hero} from "../hero/hero.model";


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    // Inject the logger service
    private logger: Logger
  ) { }

  getHeroes() {
    // Clear the heroes array
    this.heroes = [];

    // Simulate backend call
    const heroes: Hero[] = [
      { id: 1, name: 'batman', status: "inactive" },
      { id: 2, name: 'superman', status: 'active' }
    ];
    this.logger.log(`Fetched ${heroes.length} heroes.`);
    this.heroes.push(...heroes); // fill cache
    return this.heroes;
  }

  addHero(name: string): Hero[] {
    // Check if a hero with the same name already exists
    const existingHero = this.heroes.find(hero => hero.name === name);

    if (existingHero) {
      // If the hero already exists, log a message and return
      this.logger.log(`Hero with name: ${name} already exists.`);
      return this.heroes;
    }

    // If the hero does not exist, add the new hero
    const newHero: Hero = { id: this.heroes.length + 1, name, status: 'inactive' };
    this.heroes.push(newHero);
    this.logger.log(`Added hero with name: ${name}`);
    return this.heroes;
  }

  clearHeroes() {
    this.heroes = [];
    this.logger.log('Cleared hero list.');
  }
}
