export class CoinBaseDTO {
  constructor({ ticker, name, currentPrice, deltaPrice, deltaPricePercent }) {
    this.ticker = ticker
    this.name = name
    this.currentPrice = currentPrice
    this.deltaPrice = deltaPrice
    this.deltaPricePercent = deltaPricePercent
  }
}
