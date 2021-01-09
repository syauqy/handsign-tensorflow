import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const iSign = new GestureDescription('I');
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
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
iSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
iSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
iSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
iSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
iSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
iSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

