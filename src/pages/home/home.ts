import { Component } from '@angular/core';
import {NetworkService} from "../../services/NetworkService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private networkService: NetworkService) {

  }

  subscribe() {
    this.networkService.subscribe();
  }

  unsubscribe() {
    this.networkService.unsubscribe();
  }
}
