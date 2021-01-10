import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const rSign = new GestureDescription('R');
// [
//     [
//       "Thumb",
//       "Half Curl",
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
rSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
rSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
rSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
rSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
rSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

