import {Component, HostBinding, OnInit} from '@angular/core';
// import {routeAnimation} from '../route-animations';

@Component({
    selector: 'app-inside',
    templateUrl: './inside.component.html',
    styleUrls: ['./inside.component.sass'],
    // animations: [
    //     routeAnimation
    // ]
})
export class InsideComponent implements OnInit {

    // @HostBinding('@roteFadeState') routeAnimation = true;

    constructor() {
    }

    ngOnInit() {
    }

}
