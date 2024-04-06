export interface IStarCardModel {
  id: string
  isDelete: boolean
  favorite: IFavoriteUnit

  /**
   * 卡片展示信息
   */
  title?: string
  description?: string
  imageUrl?: string

  /**
   * 卡片样板数据
   */
  price?: number
  rating?: number
}

export interface IFavoriteUnit {
  id: string
  url: string
}
