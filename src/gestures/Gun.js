import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const gunGesture = new GestureDescription('gun');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
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
//       "Horizontal Right"
//     ]
//   ]

//Thumb
gunGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gunGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.80);
gunGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.80);

//Index
gunGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
gunGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.80);
gunGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.80);

//Middle
gunGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
gunGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.80);
gunGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.80);

//Ring
gunGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
gunGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.80);
gunGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.80);

//Pinky
gunGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
gunGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.80);
gunGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.80);

