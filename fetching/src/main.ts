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

interface Person {
  name: string;
  hair_color: string;
  mass: string;
}

const response = await fetch("https://swapi.dev/api/people/1");
const data: Person = await response.json();
console.log(data);

// const response = await fetch(
//   "https://omdbapi.com/?apikey=416ed51a&i=tt0076759"
// );
// const data = await response.json();
// console.log(data);
