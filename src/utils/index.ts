
let index: number = 0;
export function id(): number {
  return index++;
}

export function reset() {
  index = 0;
}

export const isObject = (target: any): boolean => {
  return target !== null && typeof target === 'object'
}

export const deepCopy = (source: any, weakMap = new WeakMap()): any => {
  if (!isObject(source)) {
    return source
  } else {
    if (weakMap.has(source)) {
      return weakMap.get(source)
    }
    let target: any = null
    if (Array.isArray(source)) {
      target = []
      for (let i = 0; i < source.length; i++) {
        target[i] = deepCopy(source[i])
      }
    } else {
      target = Object.create({})
      Object.keys(source).forEach((key) => {
        target[key] = deepCopy(source[key])
      })
      target.__proto__ = source.__proto__
    }

    weakMap.set(source, target)
    return target
  }
}