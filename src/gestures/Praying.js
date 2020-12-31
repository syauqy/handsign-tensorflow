import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const prayGesture = new GestureDescription('pray');
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
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
prayGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
prayGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.50);

//Index
prayGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
prayGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.50);

//Middle
prayGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
prayGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.50);

//Ring
prayGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
prayGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.50);

//Pinky
prayGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
prayGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.50);

