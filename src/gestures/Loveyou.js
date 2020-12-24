import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const loveYouGesture = new GestureDescription('love_you');

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
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);

//Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
// loveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Middle
loveYouGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
loveYouGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// loveYouGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
loveYouGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
loveYouGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// loveYouGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);

//Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
loveYouGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
// loveYouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);
// loveYouGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);

