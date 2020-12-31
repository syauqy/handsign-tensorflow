import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const backhandLeftGesture = new GestureDescription('backhand_left');
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
//       "Horizontal Right"
//     ]
//   ]

//Thumb
backhandLeftGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
backhandLeftGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.75);

//Index
backhandLeftGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
backhandLeftGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.75);

//Middle
backhandLeftGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
backhandLeftGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.75);

//Ring
backhandLeftGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
backhandLeftGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.75);

//Pinky
backhandLeftGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
backhandLeftGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.75);

