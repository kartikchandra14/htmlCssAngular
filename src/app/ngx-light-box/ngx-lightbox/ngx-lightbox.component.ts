import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
// For SSR ==> please read npm page
@Component({
  selector: 'app-ngx-lightbox',
  templateUrl: './ngx-lightbox.component.html',
  styleUrls: ['./ngx-lightbox.component.css']
})
export class NgxLightboxComponent implements OnInit {
// npm i ngx-lightbox
public albums: Array<any> = [];
private subscription: Subscription;
constructor(private lightbox: Lightbox,
            private lightboxEvent: LightboxEvent
  ) {}

// constructor(private _lightbox: Lightbox) {
//   for (let i = 1; i <= 4; i++) {
//     const src = 'demo/img/image' + i + '.jpg';
//     const caption = 'Image ' + i + ' caption here';
//     const thumb = 'demo/img/image' + i + '-thumb.jpg';
//     const album = {
//        src: src,
//        caption: caption,
//        thumb: thumb
//     };

//     this.albums.push(album);
//   }
// }

ngOnInit(): void {
  const a = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200'
  ];
  for (let i = 0; i < a.length ; i++) {
    const album = {
             src: a[i],
             caption: 'caption ' + i,
             thumb: a[i]
          };
    this.albums.push(album);
  }

}
    // open(index: number): void {
    //   // open lightbox
    //   this.lightbox.open(this.albums, index);
    // }
    // close(): void {
    //   // close lightbox programmatically
    //   this.lightbox.close();
    // }

    // CUSTOM LIGHTBOX USAGE
    open(index: number, album): void {
      // register your subscription and callback whe open lightbox is
      console.log('open==>', index, album);
      this.subscription = this.lightboxEvent.lightboxEvent$
        .subscribe(event => this._onReceivedEvent(event));

      this.lightbox.open(album, index, {
          wrapAround: true,
          showImageNumberLabel: true,
        });
    }

    private _onReceivedEvent(event: any): void {
      // remember to unsubscribe the event when lightbox is closed
      if (event.id === LIGHTBOX_EVENT.CLOSE) {
        // event CLOSED is fired
        this.subscription.unsubscribe();
      }

      if (event.id === LIGHTBOX_EVENT.OPEN) {
        // event OPEN is fired
      }

      if (event.id === LIGHTBOX_EVENT.CHANGE_PAGE) {
        // event change page is fired
        console.log(event.data); // -> image index that lightbox is switched to
      }
    }


}
