interface IITemProduct {
  code?: string;
  color?: string;
  holdingVolume?: number | string;
  id?: string | number;
  interestOrHole?: number;
  name?: string;
  navCurrent?: number | string;
  navInvested?: number | string;
  programList?: Array<IProgramItem>;
  ratePercent?: number;
  sumOfValueNavCurrent?: number | string;
  sumOfValueNavInvested?: number | string;
}

interface IProgramItem {
  id?: string | number;
  holdingVolume?: string | number;
  name?: string;
}

interface IDashBoard {
  productList?: Array<IITemProduct>;
  sumOfValueCurrently?: string | number;
  sumOfValueInvested?: string | number;
  sumOfInterestOrHole?: string | number;
}

// code: "FFC1"

// color: "#981f1f"

// holdingVolume: 152199.73

// id: 1

// interestOrHole: -35.981823003984495

// name: "Quỹ Đầu tư Trái phiếu FC1 (FFC1)"

// navCurrent: 18563.64

// navInvested: 28994.89

// programList: [{id: 1, name: "FFC1- FFlex", holdingVolume: 152199.73}] (1)

// ratePercent: 3.8395270469902765

// sumOfValueNavCurrent: 2825131388.26

// sumOfValueNavInvested: 4413014429.379701
