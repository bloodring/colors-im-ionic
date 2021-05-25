import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  deleteColor(){
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            if (xHttp.status == 200 || xHttp.status == 201) {
                console.log("goed verstuurd");
            } else {
                console.error('Bericht is niet goed verstuurd!');
            }
        }
    };
    xHttp.onerror = function () {
        console.log("erooorrr");
    };
    xHttp.open('DELETE', 'http://127.0.0.1:8000/api/users/delete', true);
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send(JSON.stringify({
        
    }));
  }
}
