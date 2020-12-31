import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const hushGesture = new GestureDescription('hush');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
hushGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
hushGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.80);

//Index
hushGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hushGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.80);

//Middle
hushGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
hushGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.80);
hushGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.80);

//Ring
hushGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hushGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.80);

//Pinky
hushGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
hushGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.80);
hushGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.80);

