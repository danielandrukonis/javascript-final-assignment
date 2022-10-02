/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    title = 'New start';
    director = 'Daniel Andrukonis';
    budget = '100 000 000';

    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
        
    }
  }
  
function wasExpensive(budget) {
      
    if (budget > 100000000) {
        console.log('true');
    } else {
        console.log('false');
    }
        
}

wasExpensive(1111111111111);