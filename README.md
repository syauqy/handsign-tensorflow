<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://handsign-tensorflow.vercel.app">
    <img alt="Handsign logo" src="./public/loveyou_emoji.svg" width="80" />
  </a>
</p>
<h1 align="center">
  Handsign - ASL Hand Gesture Detection Using TensorFlow
</h1>

Handsign is a simple AI-based hand gesture recognition that translates a hand pose into the American Sign Language (ASL) alphabet. Using Tensorflow JS and its Handpose preloaded model to detect the hand object and its parts. Handsign also uses an additional library called Fingerpose to classify certain of custom hand gestures based on the finger position.

`#dohackathon` `#madewithTFJS`

![Handsign demo](https://media.giphy.com/media/3KCaNFPTP7ShM7V8jd/giphy.gif)

## [See Demo](https://handsign-tensorflow.vercel.app)

# Installation

1. **Clone the repository**

```shell
# copy the repo to your machine

git clone https://github.com/syauqy/handsign-tensorflow.git
```

2. **Start the project**

```shell
# move to the project folder and install all dependencies

cd handsign-tensorflow
yarn install
```

3. **Run the project on your local machine**

```shell
# run Next

yarn dev
```

4. **The project is live 🚀**

Your project is live and running at `http://localhost:3000`

You can edit the core program at `/pages/index.js`

# What's inside the project

## Extract the fingerpose data

uncomment the `<pre>` component

```js
<Image h="150px" objectFit="cover" id='emojimage'/>

// uncomment this
{/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}

</Container>
```

uncomment the `estimatedGestures` data to change `'.pose-data'` innerHTML

```js
// document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);
```

the `estimatedGestures` data will render on your screen.

# References & Libraries

- [Tensorflow JS](https://www.tensorflow.org/js) - A Library for ML in JS.

- [Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) - A lightweight ML pipeline consisting of two models: A palm detector and a hand-skeleton finger tracking model.

- [Fingerpose](https://github.com/andypotato/fingerpose) - A pose classifier for hand landmarks detected by TensorFlow.js Handpose's model.

- Sign language illustration is created by [Pelin Kahraman](https://thenounproject.com/pelodrome/)

If you want to learn more about Tensorflow JS and custom gesture handpose, please kindly check these amazing videos

- [Machine Learning with TensorFlow in JavaScript](https://www.youtube.com/watch?v=WIHZ7kjJ35o) - by [Jason Lengstorf](https://github.com/jlengstorf) and [Jason Mayes](https://github.com/jasonmayes)

- [Building a Real Time Sign Language Detection App with React.JS and Tensorflow.JS](https://www.youtube.com/watch?v=ZTSRZt04JkY) - by [Nicholas Renotte](https://github.com/nicknochnack)

<!-- AUTO-GENERATED-CONTENT:END -->
