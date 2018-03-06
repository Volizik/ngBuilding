import {Component, HostBinding, OnInit} from '@angular/core';
// import {routeAnimation} from '../route-animations';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
    // animations: [
    //     routeAnimation
    // ]
})
export class MainComponent implements OnInit {

    // @HostBinding('@roteFadeState') routeAnimation = true;

    constructor() {
    }

    ngOnInit() {
    }

}
