import 'rxjs/add/operator/finally';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SoundcloudService} from '../core/soundcloud.service';
import {Track} from '../core/models/track.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesComponent implements OnInit {

  tracks: Track[];
  isLoading: boolean;

  constructor(private soundcloudService: SoundcloudService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.soundcloudService.getLatestTracks()
        .finally(() => {
          this.isLoading = false;
        })
        // .subscribe((quote: string) => { this.quote = quote; });
        .subscribe(res => {
          this.tracks = res
        }, err => {
          console.log(err)
        });
  }

}
