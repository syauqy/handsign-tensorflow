import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ySign = new GestureDescription('Y');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
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
//       "No Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
ySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
ySign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
ySign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
ySign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ySign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
ySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
ySign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.70);

