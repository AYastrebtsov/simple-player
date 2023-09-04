import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PlayerComponent } from "./player.component";

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [PlayerComponent],
})
export class PlayerModule {}
