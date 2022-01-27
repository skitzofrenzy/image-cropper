import { Component, OnInit , ViewChild, Input, ElementRef, AfterViewInit} from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss']
})
export class PreviewImageComponent implements OnInit,AfterViewInit {
  imageChangeEvent:any = "";
  // @ViewChild("image",{static:false})
  // public imageElement: ElementRef;

  // @Input("src")
  // public imageSource:string;

  // public imageDestination:string;
  // private cropper:Cropper;

  // @ViewChild("image",{static:false})
  // public imageElement: ElementRef;

  constructor() {

   }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
    return "";
      // cropper ready
  }
  loadImageFailed() {
    return "";
      // show message
  }

  public ngAfterViewInit(): void {

  }

  uploadFile(event:any){this.imageChangeEvent = event;}
}
