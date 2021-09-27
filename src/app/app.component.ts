import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'async-await-promesse';
  timeoutID: any;

  ngOnInit() {
 //   this.asyncAwait();
let toto =  new Promise((successCallback, failureCallback) => {
  console.log("C'est fait");
  // réussir une fois sur deux
  if (Math.random() > .5) {
    successCallback("Réussite");
  } else {
    failureCallback("Échec");
  }
});
  }

  async asyncAwait() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('affiche resolve OK dans 2 secondes'), 2000)
    });

    // On attend que la promesse soit résolue ou rejetée au bout de 2 secondes
    let result = await promise;
    alert(result);
  }

  loadScript(src: string){
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.onload = () => resolve('Fichier ' + src + ' bien chargé');
        script.onerror = () => reject(new Error('Echec de chargement de ' + src));
    });
}

  // 1er param fonction callback
  // 2ème param delay
  // 3ème param arg de la fonction callback
  showAlert() {
    this.timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
    console.log(this.timeoutID);
  }

  cancelAlert() {
    clearTimeout(this.timeoutID);
    console.log(this.timeoutID);
  }
  
}
