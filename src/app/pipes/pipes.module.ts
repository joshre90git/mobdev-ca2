/**  Title: ionic 4+: Search Bar - Módulos - Filtros
*    Author: Herrera, Fernando
*    Date: 18/March/2019
*    Code version: N/A
*    Availability: https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1994s
**/

import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { DeathfilterPipe } from './deathfilter.pipe';

@NgModule({
  declarations: [FilterPipe, DeathfilterPipe],
  exports: [ FilterPipe, DeathfilterPipe]
})
export class PipesModule { }
