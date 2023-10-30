import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricoConversaoService {
  private historico: any[] = [];

  constructor() {
    const historicoSalvo = localStorage.getItem('historico-conversoes');
    if (historicoSalvo) {
      this.historico = JSON.parse(historicoSalvo);
    }
  }

  adicionarConversao(conversao: any) {
    conversao.data = new Date(); 
    this.historico.push(conversao);
    localStorage.setItem('historico-conversoes', JSON.stringify(this.historico));
  }

  obterHistorico(): any[] {
    return this.historico;
  }
}
