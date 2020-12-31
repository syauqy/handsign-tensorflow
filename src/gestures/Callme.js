import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const callMeGesture = new GestureDescription('call_me');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
//       "No Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
callMeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
callMeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.80);

//Index
callMeGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
callMeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.80);
callMeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.80);

//Middle
callMeGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
callMeGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.80);
callMeGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.80);

//Ring
callMeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
callMeGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.80);
callMeGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.80);

//Pinky
callMeGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
callMeGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.80);
callMeGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.80);

