export class SaleSummary {
  constructor (
    public period: Date,
    public customerCount:Number,
    public sale: number,   
    public profit: number,
    public margin: number
  ) {}
}
