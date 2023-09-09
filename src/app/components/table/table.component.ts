import { Component } from '@angular/core';
import { TableRow } from 'src/app/table-row';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  row: TableRow = {
    id: 0,
    name: "Conector p4 m",
    quantity: 50,
    price: 5.5,
    sellPrice: 10.0,
  }

  canShow: boolean = true;

  show: boolean = false;

  showRow(): void{
    this.show = !this.show;
  };

  classes = ["border", "p-4", "border-slate-300"]
}
