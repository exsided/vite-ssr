interface Attributes {
  [key: string]: any
}

import { ref } from 'vue'

export default class BaseModel {
  static fromArray(items: Attributes[]): BaseModel[] {
    if (!Array.isArray(items)) {
      throw new Error('Expected an array')
    }

    // @ts-ignore
    return items.map((item) => new this(item))
  }

  setAttributes(attributes: Attributes) {
    if (!attributes) {
      return
    }

    for (let [key, value] of Object.entries(attributes)) {
      // @ts-ignore
      this[key] = ref(value)
    }
  }
}
