export interface INameId{
    Id: number;
    Name:string;
  }
  export class NameId implements INameId{
    Id: number;
    Name:string;
  }
  export class BursaModel implements INameId{
    Id: number;
    Name:string;
}

  export class PaperTypeModel {
    Id: number;
    Name: string;
    Bursa: BursaModel;
}
export class PaperNameModel implements INameId{
    Id: number;
    Name:string;
  }

export class PaperModel{
    PaperId: number;
    PaperName:string;
    PaperTypeValue: PaperTypeModel;
    LastDeal:string;
    LastRate:number;
    LastRatePercent:number;
    Amount :number;
    DateIssue: Date;
    RateBuy: number;
    Ratesell: number;

  }

export const TOTAL: number =0;
export const TOTAL_TEXT: string = "הכול";
// export enum BursaEnum {
//     None,
//     Israel,
//     Usa,
//     Europe,
// }

