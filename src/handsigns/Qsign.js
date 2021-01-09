import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const qSign = new GestureDescription('Q');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Down"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
qSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
qSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.70);

//Index
qSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
qSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.70);

//Middle
qSign.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
qSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.70);

//Ring
qSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
qSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.70);

//Pinky
qSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
qSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownleft, 0.70);

