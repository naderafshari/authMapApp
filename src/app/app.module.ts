import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
// diretives and providers
import { Loader } from '../providers/loader';
import { Nl2br } from '../pipes/nl2br';
import { AuthenticatorService } from '../providers/authenticator';
import { Config } from '../config';

// Custom pages generated by ionic generator
import { Menu } from '../pages/menu/menu';
import { AboutPage } from '../pages/menu/about/about';
import { SettingsPage } from '../pages/menu/settings/settings';
import { ComponentsModule } from '../pages/menu//components/components.module';
import { GoogleMapsModule } from '../pages/menu//google-maps/google-maps.module';
import { HomeModule } from '../pages/menu//home/home.module';
import { SlideBoxModule } from '../pages/menu//slide-box/slide-box.module';
import { WordpressModule } from '../pages/menu//wordpress/wordpress.module';
// Authentication
import { LoginPage } from '../pages/authentication/login/login';
import { RegistrationPage } from '../pages/authentication/registration/registration';
import { AuthConfig } from './config'

@NgModule({
	declarations: [
		MyApp,
		AboutPage,
		SettingsPage,
		Menu,
		LoginPage,
		RegistrationPage,
		Nl2br
	],
	imports: [
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		AngularFireModule.initializeApp(AuthConfig.FIREBASE_CONFIG),
		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Menu,
		LoginPage,
		RegistrationPage,
		AboutPage,
		SettingsPage
	],
	providers: [
		Config,
		Loader,
		AuthenticatorService
	]
})
export class AppModule {}
