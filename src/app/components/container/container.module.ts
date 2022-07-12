import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { SharedFormCompleteModule } from 'src/app/commons/shared/shared-form-complete.module';
import { ContainerComponent } from './container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [ContainerComponent, HeaderComponent, FooterComponent],
	imports: [
		MatButtonModule,
		// SharedFormBasicModule,
		// SharedFormCompleteModule,
		RouterModule
	],
	exports: [ContainerComponent],
	providers: []
})
export class ContainerModule {}
