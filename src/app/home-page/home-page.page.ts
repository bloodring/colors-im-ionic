import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnClicked(){
    console.log("btn Clicked");
  }

  testPost(){
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
    xHttp.open('POST', 'http://127.0.0.1:8000/api/users', true);
    xHttp.setRequestHeader('Content-Type', 'application/json');
    xHttp.send(JSON.stringify({
        color: "#FFFF00"
    }));
  }
  
}
