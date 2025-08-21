import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  movimentacoes = [
    { data: '2025-08-01', descricao: 'Supermercado', valor: 150, categoria: 'Alimentação' },
    { data: '2025-08-02', descricao: 'Gasolina', valor: 200, categoria: 'Transporte' },
    { data: '2025-08-03', descricao: 'Cinema', valor: 80, categoria: 'Lazer' }
  ];

  chartData = {
    labels: ['Alimentação', 'Transporte', 'Lazer'],
    datasets: [
      {
        data: [150, 200, 80],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      }
    ]
  };

  exportExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.movimentacoes);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'movimentacoes.xlsx');
  }
}