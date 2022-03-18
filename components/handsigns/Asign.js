import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const aSign = new GestureDescription('A');
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
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
// aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

