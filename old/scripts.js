document.addEventListener('DOMContentLoaded', function() {
    var trace1 = {
        x: [1, 2, 3, 4, 5],
        y: [10, 15, 13, 17, 10],
        mode: 'markers',
        type: 'scatter'
    };

    var data1 = [trace1];

    var layout1 = {
        title: 'Plot 1',
        xaxis: {
            title: 'X Axis',
        },
        yaxis: {
            title: 'Y Axis',
        }
    };

    Plotly.plot('plot1', data1, layout1);


});


async function loadPlot(jsonFile){
  try{
    const response = await fetch(jsonFile);
    if (!response.ok){
      throw new Error("Failed to fetch data file.. Status:" + response.statusText)
    }
    const plotData = await response.json();
    Plotly.plot("plot1", plotData)
    console.log("we got the stuff!")
  }
  catch (error){
    console.error("Error loading plot:", error)
  }
}

