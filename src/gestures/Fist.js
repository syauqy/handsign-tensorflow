import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fistGesture = new GestureDescription('fist');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
fistGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fistGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.80);

//Index
fistGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
fistGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.80);
fistGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.80);

//Middle
fistGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
fistGesture.addDirection(Finger.Middle, FingerDirection.VerticalRight, 0.80);
fistGesture.addDirection(Finger.Middle, FingerDirection.VerticalLeft, 0.80);

//Ring
fistGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
fistGesture.addDirection(Finger.Ring, FingerDirection.VerticalRight, 0.80);
fistGesture.addDirection(Finger.Ring, FingerDirection.VerticalLeft, 0.80);

//Pinky
fistGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
fistGesture.addDirection(Finger.Pinky, FingerDirection.VerticalRight, 0.80);
fistGesture.addDirection(Finger.Pinky, FingerDirection.VerticalLeft, 0.80);

