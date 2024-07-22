// const superHeros = [];
// superHeros.push("suraj");//default parameter type is never we can't assign like that

const superHeros: string[] = [];
superHeros.push("suraj");

// const superHeroNumber:number[] = [];
const superHeroNumber: Array<number> = [];//another way to declare a type
superHeroNumber.push(7);

type User = {
    name: string;
    isActive: boolean;
}
const allUsers: User[] = [];

allUsers.push({ name: "", isActive: true })

//array inside the array of number
const MLModels: number[][] = [
    [122, 341, 466],
    //   ""//it's not allowed
    // ["suraj"]
    [34, 32]
]