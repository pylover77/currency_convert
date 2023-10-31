import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Moeda } from '../models/moeda';
import { HistoricoConversaoService } from '../historico-conversao.service';

@Component({
  selector: 'app-converter-moedas',
  templateUrl: './converter-moedas.component.html',
  styleUrls: ['./converter-moedas.component.scss']
})
export class ConverterMoedasComponent implements OnInit {
  moedas: Moeda[] = [];
  valor: number = 0;
  moedaOrigem: string = ''; 
  moedaDestino: string = ''; 
  valorConvertido: number = 0;
  taxaDeConversao: number = 0;
  conversaoRealizada: boolean = false;

  constructor(private apiService: ApiService, private historicoService: HistoricoConversaoService) {}

  ngOnInit() {
    this.apiService.getMoedas().subscribe(
      (data) => {
        if (data && data.supported_codes) {
          this.moedas = data.supported_codes.map((item: [string, string]) => ({
            codigo: item[0],
            descricao: item[1],
          }));
        }
      },
      (error) => {
        console.error('Erro ao carregar moedas:', error);
      }
    );
  }

  converterMoeda() {
    if (this.moedaOrigem && this.moedaOrigem !== 'selecione' && this.moedaDestino) {
      if (this.valor !== null && this.valor >= 1) {
        this.apiService.getConversion(this.moedaOrigem, this.moedaDestino, this.valor).subscribe(
          (response: any) => {
            if (response.result === 'success' && response.conversion_rate) {
              this.valorConvertido = response.conversion_result;
              this.taxaDeConversao = response.conversion_rate;
              this.conversaoRealizada = true;

              const conversao = {
                moedaOrigem: this.moedaOrigem,
                valorOrigem: this.valor,
                moedaDestino: this.moedaDestino,
                valorDestino: this.valorConvertido,
                taxaCambio: this.taxaDeConversao,
                data: new Date(),
              };

              this.historicoService.adicionarConversao(conversao);
            }
          },
          (error: any) => {
            console.error('Erro na conversão de moeda:', error);
          }
        );
      } else {
        alert('Apenas valores maiores ou iguais a 1 são permitidos.');
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente antes de converter.');
    }
  }

  limparConversao() {
    this.conversaoRealizada = false;
    this.moedaOrigem = '';
    this.moedaDestino = '';
    this.valor = 0;
  }
}
