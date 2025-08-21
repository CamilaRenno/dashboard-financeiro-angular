import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
})
export class TabelaComponent {
  movimentacoes = [
    { data: '01/08/2025', descricao: 'Supermercado', categoria: 'Alimentação', valor: 250 },
    { data: '02/08/2025', descricao: 'Uber', categoria: 'Transporte', valor: 40 },
    { data: '03/08/2025', descricao: 'Cinema', categoria: 'Lazer', valor: 70 }
  ];

  exportarExcel() {
    const ws = XLSX.utils.json_to_sheet(this.movimentacoes);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Movimentações');
    const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([buf]), 'movimentacoes.xlsx');
  }
}
