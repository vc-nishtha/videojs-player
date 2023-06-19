import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { PlayerKey, StaticUrl, qualitySelector, videoPlayerId } from 'src/app/core/constant/app.constant';
import { Caption, Video } from 'src/app/core/interfaces/video.interface';
import { LoadScriptService } from 'src/app/core/services/loadscript.service';
declare let videojs: any;

@Component({
  selector: 'video-js',
  standalone: true,
  templateUrl: './video-js.component.html',
  styleUrls: ['./video-js.component.scss'],
  imports: [NgFor, NgIf]
})

export class VideoJsComponent implements OnDestroy {
  player!: any;
  @Input() videoUrl: Video[] = [
    {
      url: 'https://d2vebnhym4lldt.cloudfront.net/Film/FilmVideo/FilmVideo-1685354359678-612414716/FilmVideo-1685354359678-612414716.m3u8', label: '360P'
    }
  ];
  @Input() captionList: Caption[] = []
  @Input() volumeEnableByKey!: boolean;
  @Input() playPauseByKey!: boolean;
  @Input() fullScreenModeEnable!: boolean;
  @Input() qualitySelector!: boolean;

  constructor(private loadScriptService: LoadScriptService) {
    this.loadScript();
  }

  loadScript(): void {
    const vjs = StaticUrl.videoJs;
    this.loadScriptService.createScript(vjs, () => {
      this.loadScriptService.createScript(StaticUrl.qualitySelector);
      this.onPlayVideo();
    });
  }

  onPlayVideo(): void {
    const options = this.setVideoConfig();
    this.player = videojs(videoPlayerId, options);
    this.qualitySelector && !this.player.controlBar.childNameIndex_?.QualitySelector && this.player.controlBar.addChild(qualitySelector);
  }

  setVideoConfig() {
    return {
      preload: "auto",
      autoplay: true,
      controls: true,
      responsive: true,
      html5: {
        nativeTextTracks: false,
      },
      userActions: {
        hotkeys: (event: KeyboardEvent) => {
          this.onPressHotkeys(event);
        },
        doubleClick: () => {
          if (this.player.isFullscreen() && this.fullScreenModeEnable) {
            this.player.exitFullscreen();
          } else {
            this.fullScreenModeEnable && this.player.requestFullscreen();
          }
        },
      },
    };
  }

  onPressHotkeys(event: KeyboardEvent): void {
    if (event.code === PlayerKey.space && this.playPauseByKey) {
      if (this.player.paused()) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
    if (event.code === PlayerKey.arrowLeft && this.volumeEnableByKey) {
      const backward = this.player.currentTime() - 10;
      this.player.currentTime(backward);
    }
    if (event.code === PlayerKey.arrowRight && this.volumeEnableByKey) {
      const forward = this.player.currentTime() + 10;
      this.player.currentTime(forward);
    }
    if (event.code === PlayerKey.arrowUp && this.volumeEnableByKey) {
      this.player.volume(this.player.volume() + 0.1);
    }
    if (event.code === PlayerKey.arrowDown && this.volumeEnableByKey) {
      this.player.volume(this.player.volume() - 0.1);
    }
  }

  ngOnDestroy(): void {
    this.player.dispose();
  }
}
