import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  slideConfig = {slidesToShow: 4, slidesToScroll: 4};

  constructor() { }

  ngOnInit(): void {
  }

  addSlide(): void {
    this.slides.push({img: 'http://placehold.it/350x150/777777'});
  }

  removeSlide(): void {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e): void {
    console.log('slick initialized');
  }

  breakpoint(e): void {
    console.log('breakpoint');
  }

  afterChange(e): void {
    console.log('afterChange');
  }

  beforeChange(e): void {
    console.log('beforeChange');
  }


}
