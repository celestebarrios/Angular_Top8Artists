import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.scss']
})
export class Top5Component implements OnInit {

  constructor() { }

  Artists: string[] = ["Billy Marchiafava", "Diddy","Wallflowers","Pink Floyd","Drake/Future","Lil Yachty"]


  ngOnInit(): void {
  }

}

