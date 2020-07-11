import { deepCopy } from '.'

describe('test deepCopy', () => {
  test('deepCopy', () => {
    const source = {
      b: {
        a: 1,
        arr: [
          { k: 1 },
          3
        ]
      },
      d: new Date(),
      c: /^a/
    }
    const target = deepCopy(source)
    // case 1
    target.b.a = 2
    expect(target.b.a).toBe(2)
    expect(source.b.a).toBe(1)

    // case 2
    target.b.arr[0].k = 3
    expect(target.b.arr[0].k).toBe(3)
    expect((source.b.arr[0] as any).k).toBe(1)
  })
})