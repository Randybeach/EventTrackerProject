import { JumpService } from './services/jump.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// For MDB Angular Free
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumpListComponent } from './components/jump-list/jump-list.component';
import { DatePipe } from '@angular/common';
import { LocationPipe } from './pipes/location.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatsComponent } from './components/stats/stats.component';
import { DateSortPipe } from './pipes/date-sort.pipe';
import { AltitudePipe } from './pipes/altitude.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JumpListComponent,
    LocationPipe,
    NavigationComponent,
    FooterComponent,
    StatsComponent,
    DateSortPipe,
    AltitudePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    WavesModule

  ],
  providers: [JumpService, DatePipe, LocationPipe, DateSortPipe, AltitudePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
