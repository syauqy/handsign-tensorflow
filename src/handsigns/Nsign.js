import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const nSign = new GestureDescription('N');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
nSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
nSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
nSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
nSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
nSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
nSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

