import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const backhandRightGesture = new GestureDescription('backhand_right');
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
backhandRightGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
backhandRightGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);

//Index
backhandRightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
backhandRightGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.75);

//Middle
backhandRightGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
backhandRightGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.75);

//Ring
backhandRightGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
backhandRightGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.75);

//Pinky
backhandRightGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
backhandRightGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.75);

