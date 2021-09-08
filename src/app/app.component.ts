import { Component } from '@angular/core';


interface Item {
  name: string;
  manufactureDate: Date;
  color?: string | null;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Expression Operators';

  item: Item = {
    name : 'Telephone',
    manufactureDate : new Date(1980, 1, 25),
    color: 'orange',
    price: 98,
  };

  nullItem: Item | null = null;

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/