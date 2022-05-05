import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() imageInput?: Item;
  loadedImage?: string;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    if (this.imageInput?.name) {
      this.mainService.loadImage(this.  imageInput?.img_url).subscribe(data => {
      this.loadedImage = data;
      });
    }
  }

}
