export class Product {
    name : string
    description: string
    price: number
    imageURL: string
    link: string
    constructor(name: string, description: string, price: number, imageURL: string, link: string) {
      this.name = name
      this.description = description
      this.price = price
      this.imageURL = imageURL
      this.link = link
    }
    getName(){
      return this.name
    }
    getDescription(){
        return this.description
    }
    getPrice(){
        return this.price
    }
    getImageUrl(){
        this.imageURL
    }
    getUrl(){
        this.link
    }
}