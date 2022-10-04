import http from './http'
import { CoinListItemDTO } from '~/dto/CoinListItemDTO'
import CoinHistoryListItemDTO from '~/dto/CoinHistoryListItemDto'

export default class CoinsAPI {
  static filters = {
    minPrice: 0,
    maxPrice: 0,
    isRising: false,
  }

  static setFiltersMinPrice(value) {
    this.filters.minPrice = Math.max(value, 0)
  }

  static setFiltersMaxPrice(value) {
    this.filters.maxPrice = Math.max(value, this.filters.minPrice)
  }

  static setFiltersRising(value) {
    this.filters.isRising = !!value
  }

  static async getCoins({ page = 1, pageSize = 6, search = '' }) {
    const response = await http.get('/coins', {
      params: { page, pageSize, search, ...this.filters },
    })
    const { coins, pageCount } = response.data

    return {
      pageCount,
      coins: coins.map((coin) => new CoinListItemDTO(coin)),
    }
  }

  static async getCoinByTiker(ticker) {
    const response = await http.get(`/coins/${ticker}`)
    return response.data
  }

  static async getHistoryByTicker(ticker) {
    const response = await http.get(`/coins/${ticker}/history`)
    return response.data.map((item) => new CoinHistoryListItemDTO(item))
  }

  static async setFavoriteByTicker(ticker, isFavorite) {
    const response = await http.post(`/coins/${ticker}/set-favorite`, {
      isFavorite,
    })
    return response.data
  }

  static async setNote(ticker, note) {
    const response = await http.post(`/coins/${ticker}/set-note`, {
      note,
    })
    return response.data
  }

  static async getFavoriteCoins({ page = 1, pageSize = 6 }) {
    const response = await http.get('/coins/favorite', {
      params: { page, pageSize },
    })
    const { coins, pageCount } = response.data

    return {
      pageCount,
      coins: coins.map((coin) => new CoinListItemDTO(coin)),
    }
  }
}
