import { CoinBaseDTO } from './CoinBaseDTO'

export class CoinListItemDTO extends CoinBaseDTO {
  constructor({
    ticker,
    name,
    iconUrl,
    currentPrice,
    deltaPrice,
    deltaPricePercent,
    isFavorite = false,
  }) {
    super({ ticker, name, currentPrice, deltaPrice, deltaPricePercent })
    this.iconUrl = iconUrl
    this.isFavorite = isFavorite
  }
}
