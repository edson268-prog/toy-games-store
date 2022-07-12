import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerModule } from './components/container/container.module';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductRoutingModule } from './pages/product/product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductTypeRoutingModule } from './pages/product-type/product-type-routing.module';

@NgModule({
	declarations: [AppComponent, HomeComponent, NotFoundComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		ContainerModule,
		AppRoutingModule,
		ProductRoutingModule,
		ProductTypeRoutingModule,
		HttpClientModule, //PARA CONSULTAS HTTP
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
