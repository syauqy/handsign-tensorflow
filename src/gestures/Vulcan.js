import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const vulcanGesture = new GestureDescription('vulcan');

//Thumb
vulcanGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// vulcanGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);
vulcanGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);

//Index
vulcanGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
// vulcanGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);
vulcanGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Middle
vulcanGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
// vulcanGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5);
vulcanGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
vulcanGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
vulcanGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5);
vulcanGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.5);

//Pinky
vulcanGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
vulcanGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5);
vulcanGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.5);

