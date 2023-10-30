import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../api.service';
import { Moeda } from '../models/moeda';

@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.scss'],
})
export class ListarSimbolosComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'descricao'];
  dataSource = new MatTableDataSource<Moeda>([]);

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMoedas().subscribe(
      (data) => {
        console.log('Dados da resposta da API:', data);

        if (data && data.supported_codes) {
          const moedas = data.supported_codes.map((item: [string, string]) => ({
            codigo: item[0],
            descricao: item[1],
          }));

          this.dataSource.data = moedas;
        }

        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }

        if (this.sort) {
          this.dataSource.sort = this.sort;
        }
      },
      (error) => {
        console.error('Erro ao carregar dados das moedas:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
