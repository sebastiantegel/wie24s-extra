import { IMovie } from "./models/Movie";
import { Person } from "./models/Person";
import "./style.css";

// fetch("https://swapi.dev/api/people/1").then((response) => {
//   // response är svaret från api:t. Det innehåller
//   // information om vårt svar. T.ex. om det gick bra.

//   // Vi kan titta på svaret genom console.log
//   //console.log(response);

//   // För att se informationen som kommer från api:t,
//   // använder vi funktionen json().
//   response
//     .json()

//     // Vänta in resultatet av json() och kör sedan funktionen i then().
//     .then((data) => {
//       // I denna funktion får vi en parameter som är resultatet av json().
//       // Vi kallar denna för data.

//       // Titta på data
//       console.log(data);
//     }); // -> data
// });

// fetch("https://swapi.dev/api/people/1")
//   .then((response) => {
//     // response är svaret från api:t. Det innehåller
//     // information om vårt svar. T.ex. om det gick bra.

//     // Vi kan titta på svaret genom console.log
//     //console.log(response);

//     // För att se informationen som kommer från api:t,
//     // använder vi funktionen json().
//     // return gör att vi slipper en nästling i vår kod.
//     return response.json();
//   })
//   // Vänta in resultatet av json() och kör sedan funktionen i then().
//   .then((data) => {
//     // I denna funktion får vi en parameter som är resultatet av json().
//     // Vi kallar denna för data.

//     // Titta på data
//     console.log(data);
//   }); // -> data

// fetch("https://swapi.dev/api/people/1")
//   // response är svaret från api:t. Det innehåller
//   // information om vårt svar. T.ex. om det gick bra.

//   // Vi kan titta på svaret genom console.log
//   //console.log(response);

//   // För att se informationen som kommer från api:t,
//   // använder vi funktionen json().
//   // Vi har tagit bort { return } för att använda kunskapen
//   // om att javascript gör en automatisk return om {} är borta.
//   .then((response) => response.json())

//   // Vänta in resultatet av json() och kör sedan funktionen i then().
//   .then((data) => {
//     // I denna funktion får vi en parameter som är resultatet av json().
//     // Vi kallar denna för data.

//     // Titta på data
//     console.log(data);
//   }); // -> data

// fetch("https://swapi.dev/api/people/1")
//   .then((response) => {
//     //console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://omdbapi.com/?apikey=416ed51a&i=tt0076759")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// const response = await fetch("https://swapi.dev/api/people/1");
// const data: Person = await response.json();
// console.log(data);

// const name = document.createElement("h2");
// name.innerHTML = data.name;
// document.getElementById("app")?.appendChild(name);

const response = await fetch(
  "https://omdbapi.com/?apikey=416ed51a&i=tt0076759"
);
const data: IMovie = await response.json();
console.log(data);

const title = document.createElement("h2");
title.innerHTML = data.Title;
document.getElementById("app")?.appendChild(title);

data.Ratings.forEach((r) => {
  // Skapa html
});

for (let i = 0; i < data.Ratings.length; i++) {
  // r === data.Rating[i]
}
