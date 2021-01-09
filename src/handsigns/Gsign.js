import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const gSign = new GestureDescription('G');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
gSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
gSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
gSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
gSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

