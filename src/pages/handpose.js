import React,{useRef, useState, useEffect} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
// import * as tmImage from '@teachablemachine/image';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Webcam from "react-webcam";
import {drawRect} from '../components/utilities';

import finger_emoji from '../emojimage/fingcrossed_emoji.png';
import horns_emoji from '../emojimage/horns_emoji.png';
import loveyou_emoji from '../emojimage/loveyou_emoji.png';
import okay_emoji from '../emojimage/ok_emoji.png';
import victory_emoji from '../emojimage/victory_emoji.png';
import vulcan_emoji from '../emojimage/vulcan_emoji.png';
import '../styles/App.css'
import { constraints } from '@tensorflow/tfjs';



export default function App() {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    // let webcam, model, labelContainer, maxPredictions;

    // const URL = 'https://teachablemachine.withgoogle.com/models/NgKjeY-bp/';


    // async function runTmImage(){
    //     const modelURL = URL + "model.json";
    //     const metadataURL = URL + "metadata.json";

    //     //load teachable machine model
    //     model = await tmImage.load(modelURL, metadataURL);
    //     maxPredictions = model.getTotalClasses();

    //     //setup webcam
    //     const flip = true;
    //     webcam = new tmImage.Webcam(200, 200, flip);
    //     await webcam.setup();
    //     await webcam.play();
    //     window.requestAnimationFrame(loop);

    //     //append elements to DOM
    //     document.getElementById('webcam-container').appendChild(webcam.canvas);
    //     labelContainer = document.getElementById('label-container');
    //     for (let i = 0; i < maxPredictions; i++) { // and class labels
    //         labelContainer.appendChild(document.createElement("div"));
    //     }
    // }

    // async function loop(){
    //     webcam.update();
    //     await predict();
    //     window.requestAnimationFrame(loop);
    // }

    let currentEmoji = 0;

    function generateEmojis(){
      const password = shuffle(emojis);
      const passwordContainer = document.getElementById('emojis');

      passwordContainer.innerHTML = '';

      password.forEach(obj => {
        const img = document.createElement('img');
        img.src = obj.src;
        img.alt = obj.alt;

        passwordContainer.appendChild(img);
      });

      return password;
    }

    let emojiList;

    function _emojiList(){
      emojiList = generateEmojis();
    }

    

    // const emojiList = generateEmojis();

    // async function predict(){
    //   if(currentEmoji === emojiList.length){
    //     document.querySelector('.current-predictions').innerText = "Berhasil!!";
    //     return;
    //   }
    //     const prediction = await model.predict(webcam.canvas);
    //     // const pre = document.getElementsByClassName('current-predictions');
    //     // pre.innerHTML = JSON.stringify(prediction, null, 2);
    //     document.querySelector('.current-predictions').innerHTML = JSON.stringify(prediction, null, 2);
    //     console.log('current emoji', emojiList[currentEmoji]);
    //     // console.log('emoji List', emojiList);

    //     const match = prediction.find(p => emojiList[currentEmoji].alt === p.className && p.probability >= 0.98);
    //     console.log('match', match);
    //     if(match){
    //       document.querySelector(`[alt=${match.className}]`).classList.add('found');
    //       currentEmoji++;
    //     }

    //     for (let i = 0; i < maxPredictions; i++) {
    //         const classPrediction =
    //             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
    //         labelContainer.childNodes[i].innerHTML = classPrediction;
    //     }
    // }

    //optional
    //tekan tombol untuk mulai dan mulai timer serta mulai menampilkan urutan emoji
    //1.tampilkan gambar emoji yang harus diperagakan secara acak
    //2.ketahui gambar apa yang harus diperagakan berikutnya
    //3.tandai gambar emoji yang sudah berhasil diperagakan
    //4.tampilkan/jalankan sesuatu ketika semua emoji berhasil diperagakan
    //hentikan timer
    //save record
    //create a page to share with time record and share button to social media

    const emojis = [
      {
        src: finger_emoji,
        alt: 'fingercrossed'
      },
      {
        src: horns_emoji,
        alt: 'horns'
      },
      {
        src: loveyou_emoji,
        alt: 'loveyou'
      },
      {
        src: okay_emoji,
        alt: 'okay'
      },
      {
        src: victory_emoji,
        alt: 'victory'
      },
      {
        src: vulcan_emoji,
        alt: 'vulcan'
      }
    ];

    /**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


    

    
    



    const runCoco = async () => {
        // const img = document.getElementsByTagName('img');
        // const img = document.getElementsByClassName('gelas');

        // Load the coco model.
        const model = await cocoSsd.load();

        //loop and detect model
        setInterval(()=>{
            detect(model);}
            , 10);
      
        // Classify the image.
        // const predictions = await model.detect(img);
      
        // console.log('Predictions: ');
        // console.log(predictions);
      }

    const detect = async (model) => {
        // Check data is available
        
    if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;
  
        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
  
        // Set canvas height and width
        // canvasRef.current.width = videoWidth;
        // canvasRef.current.height = videoHeight;
  
        // 4. TODO - Make Detections
        // e.g. const obj = await net.detect(video);
        const obj = await model.detect(video);
        document.querySelector('.current-predictions').innerHTML = JSON.stringify(obj, null, 2);
        // console.log(obj);
  
        // Draw mesh
        // const ctx = canvasRef.current.getContext("2d");
  
        // // 5. TODO - Update drawing utility
        // // drawSomething(obj, ctx)  
        // drawRect(obj, ctx);

      }
    }

    //   useEffect(()=>{runCoco()},[]);

    return (
        <div>
            {/* <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        /> */}
        

        {/* <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        /> */}
        <div id="emojis"></div>
            <div className="responsive-embed">
            <div id="webcam-container">
                {/* <Webcam ref={webcamRef} muted={true} style={{position:"relative", width:"100%", height:"360px"}} /> */}
            </div>
            
            {/* <canvas ref={canvasRef}/> */}
        </div>

        {/* <button id="enable-webcam" onClick={runTmImage}>
        Enable webcam</button> */}

        <button id="generateEmoji" onClick={_emojiList}>
        Generate emojis</button>

        <pre className="current-predictions"></pre>
        <div id="label-container"></div>
        
        </div>
    )
}
