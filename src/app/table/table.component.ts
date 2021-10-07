import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.orderService.getAll().subscribe((orders: Order[]) => this.orders = orders);
  }
}
