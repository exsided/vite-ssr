import BaseModel from './BaseModel.ts'
import { IProduct } from "@/interfaces/product.ts";

export default class ProductModel extends BaseModel implements IProduct {
  constructor(attributes: object) {
    super()
    this.setAttributes(attributes)
  }
}
