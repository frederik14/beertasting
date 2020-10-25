import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RankingComponent } from './ranking/ranking.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

import { TastingsComponent } from './tastings/tastings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule}  from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TastingComponent } from './tasting/tasting.component';
import { MatCardModule } from '@angular/material/card';
import { AddTastingComponent } from './add-tasting/add-tasting.component';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RateTastingComponent } from './rate-tasting/rate-tasting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RankingComponent,
    TastingsComponent,
    TastingComponent,
    AddTastingComponent,
    RateTastingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSortModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
