import { Component } from "@angular/core";

const ELEMENT_DATA = [
  {
    id: 1,
    name: "Colors (Instrumental)",
    file: "sCEfhaLYwY_160.mp3",
    path: "./assets/sCEfhaLYwY_160.mp3",
  },
  {
    id: 2,
    name: "I Got Juice (Instrumental)",
    file: "c4Wr0JgRKUE_160.mp3",
    path: "./assets/c4Wr0JgRKUE_160.mp3",
  },
  {
    id: 3,
    name: "Tiger Park",
    file: "Rwhs90Uuqho_160.mp3",
    path: "./assets/Rwhs90Uuqho_160.mp3",
  },
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "simple-player";
  files = ELEMENT_DATA;
  selectedAudio: null | number = null;

  setSelectedAudio(id: number | null) {
    this.selectedAudio = id;

    console.log(id);
  }
}
