import http from './http'
import { CoinListItemDTO } from '~/dto/CoinListItemDTO'
import CointHistoryListItemDTO from '~/dto/CoinHistoryListItemDto'

export default class CoinsAPI {
  static async getCoins({ page = 1, pageSize = 6 }) {
    const response = await http.get('/coins', {
      params: { page, pageSize },
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
    return response.data.map((item) => new CointHistoryListItemDTO(item))
  }
}
