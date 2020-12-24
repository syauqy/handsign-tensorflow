import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const okayGesture = new GestureDescription('okay');



//Thumb
okayGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
okayGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);
okayGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);

//Index
okayGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
okayGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);
okayGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Middle
okayGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
okayGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// okayGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
okayGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
okayGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// okayGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);

//Pinky
okayGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
okayGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// okayGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);
// okayGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5);

