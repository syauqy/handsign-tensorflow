import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const lSign = new GestureDescription('L');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "No Curl",
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
lSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
lSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
lSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
lSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

