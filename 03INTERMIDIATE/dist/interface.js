"use strict";
class instagram {
    constructor(cameraMode, filter, burstMode) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
}
class youtube {
    constructor(cameraMode, filter, burstMode, frame) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
        this.frame = frame;
    }
    createStory() {
        console.log("jay shree Ram");
    }
}
