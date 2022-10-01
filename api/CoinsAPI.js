import http from './http'
import { CoinListItemDTO } from '~/dto/CoinListItemDTO'

export default class CoinsAPI {
  static async getCoins({ page = 1, pageSize = 6 }) {
    const response = await http.get('/coins', {
      params: { page, pageSize },
    })
    return response.data.map((coin) => new CoinListItemDTO(coin))
  }
}
