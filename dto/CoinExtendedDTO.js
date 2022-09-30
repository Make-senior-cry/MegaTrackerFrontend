import { CoinBaseDTO } from './CoinBaseDTO'

export default class CoinExtendedDTO extends CoinBaseDTO {
  constructor({
    ticker,
    name,
    currentPrice,
    deltaPrice,
    deltaPricePercent,
    highDayPrice,
    lowDayPrice,
    marketCap,
    isFavorite,
    note,
  }) {
    super({ ticker, name, currentPrice, deltaPrice, deltaPricePercent })
    this.highDayPrice = highDayPrice
    this.lowDayPrice = lowDayPrice
    this.marketCap = marketCap
    this.isFavorite = isFavorite
    this.note = note
  }
}
