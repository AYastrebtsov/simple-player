import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";
import WaveSurfer from "wavesurfer.js";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
})
export class PlayerComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) dataSource!: string;
  @Output() closeEvent = new EventEmitter<null>();
  wavesurfer: null | WaveSurfer = null;
  isPlaying = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.wavesurfer?.destroy();

    this.isPlaying = false;

    this.wavesurfer = WaveSurfer.create({
      container: "#wave",
      waveColor: "rgb(200, 0, 200)",
      progressColor: "rgb(100, 0, 100)",
      url: changes["dataSource"].currentValue,
      autoplay: false,
    });
  }

  ngOnDestroy(): void {
    this.wavesurfer?.destroy();
  }

  closePlayer() {
    this.closeEvent.emit(null);
  }

  play() {
    this.wavesurfer?.play();
    this.isPlaying = true;
  }

  pause() {
    this.wavesurfer?.pause();
    this.isPlaying = false;
  }
}
