import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoricoConversaoService } from '../historico-conversao.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-historico-conversao',
  templateUrl: './historico-conversao.component.html',
  styleUrls: ['./historico-conversao.component.scss']
})
export class HistoricoConversaoComponent implements OnInit {
  historico: any[] = [];
  dataSource = new MatTableDataSource<any>(this.historico);

  @ViewChild(MatSort) sort!: MatSort;

  historicoColumns: string[] = ['moedaOrigem', 'valorOrigem', 'moedaDestino', 'valorDestino', 'data', 'acao'];

  constructor(private historicoService: HistoricoConversaoService) {}

  ngOnInit() {
    this.historico = this.historicoService.obterHistorico();
    this.dataSource.data = this.historico;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  excluirConversao(conversao: any) {
    this.historicoService.excluirConversao(conversao);
    // Atualize a fonte de dados após a exclusão
    this.historico = this.historicoService.obterHistorico();
    this.dataSource.data = this.historico;
    alert("conversão exlcuida!")
  }
}
