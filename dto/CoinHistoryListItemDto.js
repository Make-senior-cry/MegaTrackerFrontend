export default class CoinHistoryListItemDTO {
  constructor({ dateTime, closingPrice, deltaClosingPrice, deltaClosingPricePercent }) {
    this.dateTime = dateTime
    this.closingPrice = closingPrice
    this.deltaClosingPrice = deltaClosingPrice
    this.deltaClosingPricePercent = deltaClosingPricePercent
  }
}
