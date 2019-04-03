import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRouteModule } from './app-route.module';


import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './componentes/meu-componente/meu-componente.component';
import { TopBarComponent } from './componentes/top-bar/top-bar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SalasComponent } from './pages/salas/salas.component';
import { FormCriarSalaComponent } from './componentes/form-criar-sala/form-criar-sala.component';
import { FormEditarSalaComponent } from './componentes/form-editar-sala/form-editar-sala.component';
import { LoadingComponent } from './componentes/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    TopBarComponent,
    MenuComponent,
    SalasComponent,
    FormCriarSalaComponent,
    FormEditarSalaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
