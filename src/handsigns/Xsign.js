import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const xSign = new GestureDescription('X');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Half Curl",
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
xSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
xSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
xSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
xSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
xSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
xSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

