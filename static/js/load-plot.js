function loadPlot(plotName, plotFrameID) {
  var frame = document.getElementById(plotFrameID)
  frame.src = `static/plots/${plotName}.html`;
};
