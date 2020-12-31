import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const loveGesture = new GestureDescription('love');

//Thumb
loveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);
loveGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);

//Index
loveGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8);
loveGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);
loveGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Middle
loveGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
loveGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);
loveGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
loveGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
loveGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5);
loveGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);

//Pinky
loveGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
loveGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);
loveGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);


// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
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
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Right"
//     ]
//   ]