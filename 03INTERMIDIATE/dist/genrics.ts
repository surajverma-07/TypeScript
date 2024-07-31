const score : Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean | number): boolean | number{
    return val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type): Type{
   return val;
}

// identityThree(34);

function identityFour<T>(val:T):T{
    return val;
}

interface Bootle{
    brand:string,
    type: number,
}
// when we want to userDefined type to be used in genrics
identityFour<Bootle>({brand:"s",type:3});