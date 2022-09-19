import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  show: boolean = false;
  temples: Array<string> = [
    'Kapaleeswarar temple',
    'Brihadeeswarar temple ',
    'Ramanathaswamy temple',
    'Papanasam Temple',
  ];
  timingDetails: any[] = [
    {
      closed: 'Monday',
      timing: '06:00 to 13:00 Hours and 16:00 to 20:00 Hours',
      charge: 'None',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  showTempleInfo() {
    this.show = !this.show;
  }
}
