import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const vSign = new GestureDescription('V');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
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
vSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
vSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
vSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
vSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
vSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

