const img = document.getElementById('img');

// Load the model.
cocoSsd.load().then(model => {
  // detect objects in the image.
  model.detect(img).then(predictions => {
    console.log('Predictions: ', predictions);
  });
});