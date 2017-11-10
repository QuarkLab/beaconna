export class ItemModel{
    name: string;
    tags: string[] = ["cat", "boat"];
    isLowestPrice: boolean = true;
    isNearest: boolean = true;

    constructor(name: string){
      this.name = name;
    }
}
