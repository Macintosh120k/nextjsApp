export class CardProd {
  idProducto: number;
  NombreProducto: string;
  NombreItem: string;
  Codigo: string;
  CodigoBarras: string;
  NombreMarca: string;
  PV1: number;
  PV2: number;
  PV3: number;
  PV4: number;
  PV5: number;
  PV6: number;
  PorcDesct: string;
  ImagenP: string;
  Saldo: number;
  Cant: number
  Total: number
  constructor() {
    this.idProducto = 0;
    this.NombreProducto = "";
    this.NombreItem = "";
    this.Codigo = "";
    this.CodigoBarras = "";
    this.NombreMarca = "";
    this.PV1 = 0;
    this.PV2 = 0;
    this.PV3 = 0;
    this.PV4 = 0;
    this.PV5 = 0;
    this.PV6 = 0;
    this.PorcDesct = "";
    this.ImagenP = "";
    this.Saldo = 0;
    this.Cant = 0;
    this.Total = 0;
  }
}
