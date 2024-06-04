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

    Plotly.newPlot('plot1', data1, layout1);

    var trace2 = {
        x: [1, 2, 3, 4, 5],
        y: [16, 5, 11, 9, 12],
        mode: 'lines',
        type: 'scatter'
    };

    var data2 = [trace2];

    var layout2 = {
        title: 'Plot 2',
        xaxis: {
            title: 'X Axis',
        },
        yaxis: {
            title: 'Y Axis',
        }
    };

    Plotly.newPlot('plot2', data2, layout2);
});
