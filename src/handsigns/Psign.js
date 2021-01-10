import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pSign = new GestureDescription('P');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Down Right"
//     ]
//   ]

//Thumb
pSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
pSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
pSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
pSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
pSign.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.70);

//Ring
pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
pSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

