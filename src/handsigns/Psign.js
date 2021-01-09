import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pSign = new GestureDescription('P');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Down Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Diagonal Down Left"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
pSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
pSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
pSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
pSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.70);

//Middle
pSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
pSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.70);

//Ring
pSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 0.70);

//Pinky
pSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
pSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 0.70);

