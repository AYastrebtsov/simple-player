import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TableModule } from "./table/table/table.module";
import { PlayerModule } from "./player/player.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TableModule, PlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
