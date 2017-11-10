export class ItemModel{
    name: string;
    tags: string[] = [];
    isLowestPrice: boolean = true;
    isNearest: boolean = true;
    lowestRating: number = 1;

    constructor(name: string){
      this.name = name;
    }
}
