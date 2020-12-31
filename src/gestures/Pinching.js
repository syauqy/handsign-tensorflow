import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pinchGesture = new GestureDescription('pinch');
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
//       "Diagonal Up Right"
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
pinchGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pinchGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.5);
// pinchGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.5);

//Index
pinchGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
pinchGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.5);
// pinchGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.5);

//Middle
pinchGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
pinchGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);
// pinchGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
pinchGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
pinchGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5);
// pinchGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);

//Pinky
pinchGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
pinchGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);
// pinchGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);


