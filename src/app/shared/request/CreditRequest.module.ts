export class CreditRequest {
    salaireMensuel: number;
    mensualitesCredit: number;
  
    constructor(salaireMensuel: number, mensualitesCredit: number) {
      this.salaireMensuel = salaireMensuel;
      this.mensualitesCredit = mensualitesCredit;
    }
  }