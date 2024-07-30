abstract class TakePhotoA{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getSepia():void
    getReelTime():number{
        return 7;
    }
}
// we can't create object of abstract class 
// const objTakePic = new TakePhoto("front","b/w");

class Instagram extends TakePhotoA{
  constructor(
    public cameraMode:string,
    public filter:string,
    public burst:number
  ){
      super(cameraMode,filter);
  }
  getSepia(): void {
      console.log("Jay Shree Ram");
      
  }
  //overriding
  getReelTime(): number {
      return 9;
  }
}

const instaUser = new Instagram("front","b/w",8);
instaUser.getReelTime();
instaUser.getSepia();