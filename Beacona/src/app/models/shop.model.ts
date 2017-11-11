export class ShopModel{
    name: string;
    latitudes: number;
    longitudes: number;
    imageurl: string;

    constructor(name: string, latitudes: number, longitudes: number, imageurl: string){
      this.name = name;
      this.latitudes = latitudes;
      this.longitudes = longitudes;
      this.imageurl = imageurl;
    }
}