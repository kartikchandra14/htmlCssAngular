import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, DoCheck {

  @Input() toast: string;
  @Input() show: string;
  public defaultMessage: string;
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
    console.log('ToastComponent', this.show, this.toast, this.defaultMessage);
  }
  ngDoCheck() {
    // console.log('ToastComponent', this.show, this.toast, this.defaultMessage);
    if (!(this.defaultMessage) || (this.defaultMessage !== this.toast)) {
      this.defaultMessage = this.toast;
      if (this.defaultMessage && this.defaultMessage.length > 0){
       const x: HTMLElement = document.getElementById('snackbar');
       if (x){ x.classList.add('show');
               setTimeout(() => {
        x.className = x.className.replace('show', '');
        this.globalService.toastMessage = '';
        this.globalService.showToast = '';
      }, 3000);
      }
    }
    }
  }

}
