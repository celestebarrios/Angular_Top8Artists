import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fakebio',
  templateUrl: './fakebio.component.html',
  styleUrls: ['./fakebio.component.scss']
})
export class FakebioComponent implements OnInit {
  addBioForm = new FormGroup({
    artistName: new FormControl('',Validators.required),
    records: new FormControl('',Validators.required),
    about: new FormControl('',Validators.required),
    concerts: new FormControl('',Validators.required)
  });

  constructor() { }
  getArtistData(){
    console.log(this.addBioForm.value)
    this.addBioForm.reset()
}
  ngOnInit(): void {
  }

}
