import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SliderComponent, CarouselComponent],
  exports: [SliderComponent, CarouselComponent],
})
export class SharedUiModule {}
