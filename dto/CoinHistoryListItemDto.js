export class CointHistoryListItemDTO {
  constructor({ date, closingPrice, deltaClosingPrice }) {
    this.date = date
    this.closingPrice = closingPrice
    this.deltaClosingPrice = deltaClosingPrice
  }
}
