import Konva from "konva";

const IMAGE_URL =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

const stage = new Konva.Stage({
  container: "canvas",
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();

const rect1 = new Konva.Rect({
  x: 20,
  y: 20,
  width: 100,
  height: 50,
  fill: "green",
  stroke: "black",
  strokeWidth: 4,
});
// add the shape to the layer
layer.add(rect1);
stage.add(layer);
