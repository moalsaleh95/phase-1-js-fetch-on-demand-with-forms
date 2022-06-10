// const init = () => {

//     const form = document.querySelector("form");
//     form.addEventListener("submit", e => {
//         e.preventDefault();
//         // the 1st way of getting the value of the input:
//         // console.log(e.target.children[1].value);

//         // And this is the 2nd way:
//         const inputEl = document.querySelector("input#searchByID");
//         console.log(inputEl.value)

//         fetch("http://localhost:3000/movies")
//             .then(res => res.json())
//             .then(data => {
//                 const title = document.querySelector("section#movieDetails h4");
//                 const summary = document.querySelector("section#moviesDetails p");

//                 title.innerText = data.title;
//                 summary.innerText = data.summary;
//             })
//     })


// }

// document.addEventListener('DOMContentLoaded', init);