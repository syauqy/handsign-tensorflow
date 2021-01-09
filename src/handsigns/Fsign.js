import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fSign = new GestureDescription('F');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
fSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
fSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
fSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
fSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
fSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
fSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

