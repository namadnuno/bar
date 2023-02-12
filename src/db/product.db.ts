import { DB } from "./DB";
import { Model, ModelOf, ModelType } from "./Model";

export type ProductType = ModelOf<{
  name: string;
  icon: string;
  price: number;
}>

export class Product extends Model<ProductType> {
  public name: string;
  public icon: string;
  public price: number;

  constructor({name, icon, price, id}: ProductType) {
    super("products")
    if (id) {
      this.id = id
    }
    this.name = name;
    this.icon = icon;
    this.price = price;
  }

  static query() {
    return new DB<ModelType<ProductType>>("products");
  }

  static from(data: ProductType) {
    return new this(data);
  }

  getData(): ProductType {
    return {
      name: this.name,
      icon: this.icon,
      price: this.price
    }
  }
}

