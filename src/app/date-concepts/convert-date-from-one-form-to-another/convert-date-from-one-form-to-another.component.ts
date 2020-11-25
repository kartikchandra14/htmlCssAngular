import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-date-from-one-form-to-another',
  templateUrl: './convert-date-from-one-form-to-another.component.html',
  styleUrls: ['./convert-date-from-one-form-to-another.component.css']
})
export class ConvertDateFromOneFormToAnotherComponent implements OnInit {
  liveStreamInfo = {date: '04/Nov/20 12:00 AM - 10/Nov/20 11:59 PM' };
  constructor() { }

  ngOnInit(): void {
    this.convertDate();
  }


  convertDate(){
    let startDateAndTImeOfLifeStreamInNewFormat;
    let endDateOfAndTImeLifeStreamInNewFormat;
    if (this.liveStreamInfo?.date?.split(' -') && this.liveStreamInfo?.date?.split(' -')[0]){
      const date = this.liveStreamInfo?.date?.split(' -')[0];
      if (date.includes('AM') || date.includes('PM')){
          const exactDate = date.split(' ')[0];
          const time = date.split(' ')[1];
          const dateFix = (new Date(exactDate).getDate()).toString().padStart(2, '0');
          const month = (new Date(exactDate).getMonth() + 1).toString().padStart(2, '0');
          const year = new Date(exactDate).getFullYear();
          startDateAndTImeOfLifeStreamInNewFormat = year + '-' + (month) + '-' + dateFix + ' ' + time + ':00';
      }
    }
    if (this.liveStreamInfo?.date?.split('- ') && this.liveStreamInfo?.date?.split('- ')[1]){
      const date = this.liveStreamInfo?.date?.split('- ')[1];
      if (date.includes('AM') || date.includes('PM')){
          const exactDate = date.split(' ')[0];
          const time = date.split(' ')[1];
          const dateFix = (new Date(exactDate).getDate()).toString().padStart(2, '0');
          const month = (new Date(exactDate).getMonth() + 1).toString().padStart(2, '0');
          const year = new Date(exactDate).getFullYear();
          endDateOfAndTImeLifeStreamInNewFormat = year + '-' + (month) + '-' + dateFix + ' ' + time + ':00';
      }
    }
    console.log('convertDate1', this.liveStreamInfo.date.split(' -')[0], startDateAndTImeOfLifeStreamInNewFormat);
    console.log('convertDate2', this.liveStreamInfo.date.split(' -')[1], endDateOfAndTImeLifeStreamInNewFormat);
  }
}
