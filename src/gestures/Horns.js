import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const hornsGesture = new GestureDescription('horns');

// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "No Curl",
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
hornsGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
hornsGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);
hornsGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);

//Index
hornsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hornsGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
// hornsGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Middle
hornsGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
hornsGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// hornsGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
hornsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
hornsGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// hornsGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);

//Pinky
hornsGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
hornsGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
// hornsGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);
// hornsGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);

