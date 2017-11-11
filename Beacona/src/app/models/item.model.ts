export class ItemModel{
    name: string;
    tags: string[];
    isLowestPrice: boolean = true;
    isNearest: boolean = true;

    constructor(name: string){
      this.name = name;
      this.tags = [name];
    }
}
