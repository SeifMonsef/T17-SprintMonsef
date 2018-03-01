import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToysService } from './toys.service'
@Component({
  selector: 'app-toys',
  template: '<ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" (deleteConfirm)=onDeleteCall($event) ></ng2-smart-table>',
  providers: [ToysService]
})
// <ng2-smart-table [settings]="settings"></ng2-smart-table>
export class ToysComponent implements OnInit {
  settings = {
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    delete:{
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'id'
      },
      name: {
        title: 'Product Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      }
    }
  };

  data = [];

  constructor(private toysService:ToysService){
  }

  onCreateCall(event){
       event.confirm.resolve(event.newData);
       this.toysService.createProduct(event.newData.name, event.newData.price).subscribe();
  }

  onEditCall(event){
       event.confirm.resolve(event.newData);
       console.log(event);
       this.toysService.updateProduct(event.newData._id, event.newData.name, event.newData.price).subscribe();
  }

  onDeleteCall(event){
    event.confirm.resolve(event.data._id);
    console.log(event.data._id);
    this.toysService.deleteProduct(event.data._id).subscribe();
  }
  ngOnInit() {
    this.toysService.getProducts().subscribe(
      (res: Response) => {
        console.log(res.data)
        this.data = res.data;
      }
    );
   }

}
