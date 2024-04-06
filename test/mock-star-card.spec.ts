import { expect, test } from 'vitest'
import { generateMockStarCardData } from '~/mock/star-card'

test('MOCK star card generate 10', () => {
  const cards = generateMockStarCardData(10)
  expect(cards.length).toEqual(10)
  expect(cards[0].price).toBeGreaterThan(0)
  expect(cards[0].price).toBeLessThan(1000)
  expect(cards[0].rating).toBeGreaterThan(0)
  expect(cards[0].rating).toBeLessThan(5)
  expect(cards[0].favorite.id).toEqual('mock-favorite-id')
  expect(cards[0].favorite.url).toEqual('mock-favorite-url')
  expect(cards[0].isDelete).toEqual(false)
})
export { generateMockStarCardData }
