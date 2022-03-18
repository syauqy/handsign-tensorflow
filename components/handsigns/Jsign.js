import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const jSign = new GestureDescription('J');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
//       "No Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
jSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
jSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
jSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.70);

//Ring
jSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
jSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
jSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
jSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

