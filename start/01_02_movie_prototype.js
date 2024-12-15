// Write your code here
class Movie{
  constructor(title, director,genre,releaseYear,rating){
    this.title= title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview(){
   const overview =`${this.title}, a ${this.genre} directed by ${this.director} was 
   released in ${this.releaseYear}. It received a raiting of ${this.rating}`
    console.log(overview)
  }
}
const harryPotter = new Movie("Harry Potter", "Christopher Colombus", "Fantasy","2001",5)
harryPotter.getOverview()