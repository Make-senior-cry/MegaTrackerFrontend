export default class CoinHistoryListItemDTO {
  constructor({ dateTime, closingPrice, deltaClosingPrice }) {
    this.dateTime = dateTime
    this.closingPrice = closingPrice
    this.deltaClosingPrice = deltaClosingPrice
  }
}
