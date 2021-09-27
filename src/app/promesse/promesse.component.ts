import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesse',
  templateUrl: './promesse.component.html',
  styleUrls: ['./promesse.component.css']
})
export class PromesseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let promesse = new Promise((resolve, reject)=> {
      setTimeout(function (){console.log("toto")}, 2000);
      resolve(console.log("super"));
      reject("Oh no !");
    })
  }

}
