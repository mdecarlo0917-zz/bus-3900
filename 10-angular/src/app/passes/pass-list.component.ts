import { Component } from '@angular/core';

@Component({
    selector: 'up-passes',
    templateUrl: './pass-list.component.html'
})
export class PassListComponent {
    passNumber: number = 837235;
    passType: string = "U";
    expirationDate: Date = new Date("2020-05-01");
    vehicles: string = "E09283";
}