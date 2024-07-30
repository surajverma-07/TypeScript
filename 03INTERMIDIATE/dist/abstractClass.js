"use strict";
class TakePhotoA {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 7;
    }
}
// we can't create object of abstract class 
// const objTakePic = new TakePhoto("front","b/w");
class Instagram extends TakePhotoA {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Jay Shree Ram");
    }
    //overriding
    getReelTime() {
        return 9;
    }
}
const instaUser = new Instagram("front", "b/w", 8);
instaUser.getReelTime();
instaUser.getSepia();
