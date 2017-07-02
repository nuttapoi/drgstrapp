export class Stock {
  constructor (
    public productID: string,
    public businessName: string,
    public latestCost: number,
    public qtyNowAll: number,
    public qtyActual: number,
    public unitNameA: string,
  ) {}
}