# Videojs Player

 This library was generated with Angular CLI version 15.0.0.
## How to Use

## Step 1

Install it
npm i angular-video-js-player
## Step 2

Import component in any standalone component

import { VideoJsComponent } from 'app-video-js';

@Component({
    standalone: true,
    imports: [VideoJsComponent]
})
## You can use it as follows

 <app-video-js
        [videoUrl] = "videoUrl"
        [captionList] = "captionList"
        [volumeEnableByKey] = true
        [playPauseByKey] = true
        [fullScreenModeEnable]=true
        [qualitySelector]=true>
  </app-video-js>

<table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
        <th>Key Used</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>Volume enable by Key </td>
            <td>It handle volume by arrow up and arrow down.It is an optional key and has boolean value.</td>
            <td><code>volumeEnableByKey</code></td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td>Play Pause by key</td>
            <td>It handle play pause by space key.It is an optional key and has boolean value.</td>
            <td><code>playPauseByKey</code></td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td>Full Screen Mode</td>
            <td>It handle fullScreen by double click.It is an optional key and has boolean value.</td>
            <td><code>fullScreenModeEnable</code></td>
            <td><code>false</code></td>
        </tr>
         <tr>
            <td>Quality Selector</td>
            <td>It provide feature for quality option with multiple video.It is an optional key and has boolean value.</td>
            <td><code>qualitySelector</code></td>
            <td><code>false</code></td>
        </tr>
    </tbody>
</table>

## Options

videoUrl is an array with option [{url:string,label:'300P'}]

captionList is also an array if you need to provide caption with option [{url: string,lang?: string,label?: string}] with optional key

volumeEnableByKey is an optional key by default it is false. It handle volume by arrow up and arrow down

playPauseByKey is also an optional key by default it is false. It handle play pause by space key.

fullScreenModeEnable is an optional key by default it is false. It handle fullscreen  by double click.

qualitySelector is an optional key, by default it is false. It provide feature for quality option with multiple video.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## LICENSE

The MIT License (MIT). Please see [License File](https://github.com/vc-nishtha/videojs-player/blob/main/LICENSE) for more information.
