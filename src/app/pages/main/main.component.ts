import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  itemObject?: Array<Item>;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.loadItem().subscribe((data: Array<Item>) => {
      this.itemObject = data;

    })
  }

  

}
