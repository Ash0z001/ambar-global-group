import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { environment } from 'src/environments/environment';
import { BannerComponent } from './components/banner/banner.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { PartnersLogosComponent } from './components/partners-logos/partners-logos.component';
import { TwoColumnIconsComponent } from './components/two-column-icons/two-column-icons.component';
import { ParallaxBannerComponent } from './components/parallax-banner/parallax-banner.component';
import { TwoColumnTextComponent } from './components/two-column-text/two-column-text.component';
import { SingleColumnTextComponent } from './components/single-column-text/single-column-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    BannerComponent,
    GetInTouchComponent,
    IconCardComponent,
    PartnersLogosComponent,
    TwoColumnIconsComponent,
    ParallaxBannerComponent,
    TwoColumnTextComponent,
    SingleColumnTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
