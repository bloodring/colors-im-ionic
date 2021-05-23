import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Color } from '../color.model';

@Injectable({
    providedIn: 'root',
})

export class ColorsService {
    apiUrl = 'http://localhost:8000/api';
    oneColorApiUrl = 'http://localhost:8000/api/users';

    constructor(private http: HttpClient){}

    getColors(): Observable<Color[]>{
        return this.http.get<Color[]>(`${this.apiUrl}/users`);
    };

    getOneColor(): Observable<Color[]>{
        return this.http.get<Color[]>(`${this.oneColorApiUrl}/latest`);
    };
}