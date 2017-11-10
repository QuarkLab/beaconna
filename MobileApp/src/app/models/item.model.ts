export class ItemModel{
    private name: string;
    private tags: string[] = [];
    private isLowestPrice: boolean = true;
    private isNearest: boolean = true;
    private lowestRating: number = 1;

    constructor(name: string){
      this.name = name;
    }
}
