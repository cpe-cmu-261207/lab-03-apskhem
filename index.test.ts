import { map, reduce, filter, sum } from './index'

test('adds testing', () => {
  expect(sum(1, 2)).toBe(3);
});

test('map testing', () => {
  interface Cars {
    id: number 
    name: string
  }

  const cars = ['BMW', 'Audi', 'Porsche']

  const callback = (car: string, i: number): Cars => ({
    id: i,
    name: car,
  })

  const expected = cars.map(callback)
  const actual = map(cars, callback)
  expect(actual).toStrictEqual(expected)
})

describe('filter testing', () => {

  test('case 1', () => {
    const scores = [1, 2, 3, 1, 5]

    const callback = (score: number) => score < 2

    const expected = scores.filter(callback)
    const actual = filter(scores, callback)

    expect(actual).toStrictEqual(expected)
  })

  test('case 2', () => {
    const scores = [1, 2, 3, 1, 5]

    const callback = (_: number, index: number) => index < 2

    const expected = scores.filter(callback)
    const actual = filter(scores, callback)

    expect(actual).toStrictEqual(expected)
  })
})

describe('reduce testing', () => {
  test('case 1', () => {
    const scores = [1, 2, 3, 1]

    const callback = (prev: number, score: number) => score + prev
    const initial = 0

    const expected = scores.reduce(callback, initial)
    const actual = reduce(scores, callback, initial)

    expect(actual).toStrictEqual(expected)
  })

  test('case 2', () => {
    const scores = [1, 2, 3, 1]

    const callback = (prev: number, score: number, index: number) => score + index + prev 
    const initial = 0

    const expected = scores.reduce(callback, initial)
    const actual = reduce(scores, callback, initial)

    expect(actual).toStrictEqual(expected)
  })
})
