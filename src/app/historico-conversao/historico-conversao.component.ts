import { Component, OnInit } from '@angular/core';
import { HistoricoConversaoService } from '../historico-conversao.service';

@Component({
  selector: 'app-historico-conversao',
  templateUrl: './historico-conversao.component.html',
  styleUrls: ['./historico-conversao.component.scss']
})
export class HistoricoConversaoComponent implements OnInit {
  historico: any[] = [];

  constructor(private historicoService: HistoricoConversaoService) {}

  ngOnInit() {
    this.historico = this.historicoService.obterHistorico();
  }
}
