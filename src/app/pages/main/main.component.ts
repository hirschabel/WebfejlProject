import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/Category';
import { Item } from 'src/app/shared/models/Item';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  itemObject?: Array<Item>;
  itemObjectFull?: Array<Item>;
  categoryObject?: Array<Category>;
  isReversed?: boolean;
  chosenCategory: any;
  searchText: any;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.isReversed = false;
    this.mainService.loadItem().subscribe((data: Array<Item>) => {
      this.itemObject = data.sort((a, b) =>
      a.name.localeCompare(b.name));
      this.itemObjectFull = this.itemObject;
    })
    this.mainService.loadCategory().subscribe( (data: Array<Category>) => {
      console.log(data);
      this.categoryObject = data.sort((a, b) =>a.prio - b.prio
    )});
  }

  onReverse() {
      if (!this.isReversed) {
        this.isReversed = true;
        this.itemObject = this.itemObject?.sort((a, b) =>
        b.name.localeCompare(a.name));
      } else {
        this.isReversed = false;
        this.itemObject = this.itemObject?.sort((a, b) =>
        a.name.localeCompare(
          b.name));
      }
  }

  categoryChanged() {
    this.itemObject = this.itemObjectFull;
    console.log(this.chosenCategory)
    if (this.chosenCategory != "Minden") {
      this.itemObject = this.itemObject?.filter(i => i.tag == this.chosenCategory);
    }
  }

  onChange(test: string) {
    console.log(test);
    this.itemObject = this.itemObjectFull;
    if (test != "") {
      
      this.itemObject = this.itemObject?.filter(i => i.name.includes(test) || i.description.includes(test) || i.tag.includes(test));
    }
  }

}
