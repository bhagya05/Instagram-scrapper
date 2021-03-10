// // API url  
// const api_url =
//     "http://localhost:3001";
// let apidata = {
//     hi: "hii"
// }
// // Defining async function  
// async function getapi(url) {

//     // Storing response  
//     // const response = await fetch(url); 
//     // Storing data in form of JSON  
//     // var apidata = await response.json(); 

//     setTimeout(function () {
//         console.log(apidata);
//         if (apidata) {
//             console.log('jioji');
//             hideSpinner();
//         }
//         document.body.style.backgroundColor = 'white';
//         var trace1 = {
//             x: [1, 2, 3, 4],
//             y: [10, 15, 13, 17],
//             type: 'scatter'
//           };
          
//           var trace2 = {
//             x: [1, 2, 3, 4],
//             y: [16, 5, 11, 9],
//             type: 'scatter'
//           };
          
//           var data = [trace1, trace2];
          
//           Plotly.newPlot('graph', data);
//     }, (3000));





// }

// // Calling that async function  
// getapi(api_url);

// // Function to hide the Spinner 
// function hideSpinner() {
//     document.getElementById("spinner")
//         .style.display = 'none';
// }