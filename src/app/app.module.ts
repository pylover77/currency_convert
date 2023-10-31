import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MainComponent } from './main/main.component';
import { ListarSimbolosComponent } from './listar-simbolos/listar-simbolos.component';
import { HttpClientModule } from '@angular/common/http';
import { ConverterMoedasComponent } from './converter-moedas/converter-moedas.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { HistoricoConversaoComponent } from './historico-conversao/historico-conversao.component';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    MainComponent,
     ListarSimbolosComponent,
     ConverterMoedasComponent,
     HistoricoConversaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule, 
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
