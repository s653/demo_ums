import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavbarComponent} from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { StudentAttendenceComponent } from './Attendence/student-attendence/student-attendence.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { CoursesComponent } from './courses/courses.component';
import { VoucherComponent } from './voucher/voucher.component';
import { CardComponent } from './card/card.component';
import { InfoServiceService } from './services/info-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { AddNewDialComponent } from './add-new-dial/add-new-dial.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    StudentAttendenceComponent,
    StudentInformationComponent,
    CoursesComponent,
    VoucherComponent,
    CardComponent,
    AddNewDialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [InfoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
