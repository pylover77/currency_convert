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
    this.salvarHistorico();
  }

  obterHistorico(): any[] {
    return this.historico;
  }

  excluirConversao(conversao: any) {
    const index = this.historico.indexOf(conversao);
    if (index !== -1) {
      this.historico.splice(index, 1);
      this.salvarHistorico();
    }
  }

  private salvarHistorico() {
    localStorage.setItem('historico-conversoes', JSON.stringify(this.historico));
  }
}
