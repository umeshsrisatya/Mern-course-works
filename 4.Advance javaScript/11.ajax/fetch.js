//* fetch
//? example 1 single request
// fetch("https://swapi.dev/api/people/1/")
// .then((response) => {
//     console.log("success", response);
//     return response.json();
// })
// .then((data) => {
//     console.log("JSON done", data);
// })
// .catch((err) => {
//     console.log("error");
//     console.log(err);
// });

//? example 2  with multiple requests

// fetch
// fetch("https://swapi.dev/api/people/1/")
//     .then((response) => {
//         console.log("Resolved request 1 with http response ", response);
//         return response.json();
//     })
//     .then((bodyData) => {
//         console.log("JSON done for req1", bodyData);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((response)=>{
//         console.log("resolve request 2  with http response ", response);
//         return response.json();
//     })
//     .then((bodyData)=>{
//         console.log("JSON done for req2", bodyData);
//     })
//     .catch((err) => {
//         console.log("Rejected");
//         console.log(err);
//     });

const loadStarWarsPeople = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const bodyData = await response.json();
        console.log(bodyData);
    } catch (e) {
        console.log(e);
    }
};
axios
    .get(`https://swapi.dev/api/people/1/`)
    .then((res) => {
        console.log(res);
    })
    .catch((er) => {
        console.log(er);
    });

loadStarWarsPeople(1);
