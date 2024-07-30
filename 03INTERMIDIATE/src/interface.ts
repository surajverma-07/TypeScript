interface TakePhoto {
    cameraMode:string,
    filter:string,
    burstMode:number
}

interface Story{
    createStory():void;
}

class instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ){  }
}

class youtube implements TakePhoto,Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number,
        public frame:boolean
    ){  }
    createStory():void{
        console.log("jay shree Ram");
    }
}