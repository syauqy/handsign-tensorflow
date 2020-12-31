import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fingerCrossedGesture = new GestureDescription('fingercrossed');
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Right"
//     ]
//   ]

//Thumb
fingerCrossedGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
// fingerCrossedGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
// fingerCrossedGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
fingerCrossedGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Index
fingerCrossedGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fingerCrossedGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5);
// fingerCrossedGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Middle
fingerCrossedGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
fingerCrossedGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// fingerCrossedGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
fingerCrossedGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
fingerCrossedGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.5);
// fingerCrossedGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);

//Pinky
fingerCrossedGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
fingerCrossedGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.5);
// fingerCrossedGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);

