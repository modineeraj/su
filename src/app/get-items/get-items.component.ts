import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrls: ['./get-items.component.scss']
})
export class GetItemsComponent {
  @Input()
  items!: any[];
  ngOnInit(){
    console.log("Items",this.items);
  }
}
