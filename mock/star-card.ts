import type { IStarCardModel } from '~/types/star-card'

export const generateMockStarCardData = (amount?: number): IStarCardModel[] => {
  const statCards: IStarCardModel[] = []
  for (let i = 0; i < (amount ?? 1); i++) {
    const randomRating = Math.random() * 5 // Generate a random rating between 0 and 5
    const randomPrice = Math.floor(Math.random() * 1000) // Generate a random price between 0 and 1000
    statCards.push({
      id: 'mock-id',
      title: 'mock-title',
      description: 'mock-description',
      imageUrl: 'mock-image-url',
      price: randomPrice,
      rating: randomRating,
      favorite: {
        id: 'mock-favorite-id',
        url: 'mock-favorite-url',
      },
      isDelete: false,
    })
  }
  return statCards
}
