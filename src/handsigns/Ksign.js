import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const kSign = new GestureDescription('K');
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
//       "Vertical Up"
//     ]
//   ]

//Thumb
kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
kSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
kSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
kSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
kSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

