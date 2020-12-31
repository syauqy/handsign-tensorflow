import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const thinkingGesture = new GestureDescription('thinking');


//Thumb
thinkingGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thinkingGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

//Index
thinkingGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
thinkingGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
// thinkingGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

//Middle
thinkingGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
thinkingGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);
// thinkingGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);

//Ring
thinkingGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
thinkingGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);
// thinkingGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5);

//Pinky
thinkingGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
thinkingGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);
// thinkingGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);