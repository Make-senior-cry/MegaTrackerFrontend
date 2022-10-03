export default class CointHistoryListItemDTO {
  constructor({ dateTime, closingPrice, deltaClosingPrice }) {
    this.dateTime = dateTime
    this.closingPrice = closingPrice
    this.deltaClosingPrice = deltaClosingPrice
  }
}
