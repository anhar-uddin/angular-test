import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = '';
    }

    /**
     * Potentially overridden by subclasses.
     */
    getHeaders(): HttpParams {
        return new HttpParams();
    }

    get(url: string, params?: any, baseUrl?: string): Observable<any> {
        this.baseUrl = baseUrl || this.baseUrl;
        let urlParams = null;

        if (params) {
            urlParams = new HttpParams();
            Object.keys(params).forEach(item => {
                urlParams = urlParams.append(item, params[item]);
            });
        }
        return this.http.get(`${this.baseUrl}${url}`, { params: urlParams }).pipe(
        );
    }

    post(url: string, body: any, baseUrl?: string): Observable<any> {
        this.baseUrl = baseUrl || this.baseUrl;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + url, body, { headers: headers }).pipe(
        );
    }

    put(url: string, body: any, baseUrl?: string): Observable<any> {
        this.baseUrl = baseUrl || this.baseUrl;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + url, body, { headers: headers }).pipe(
        );
    }

    postTest(url: string, body: any, baseUrl?: string): Observable<any> {
        this.baseUrl = baseUrl || this.baseUrl;
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, body, { headers: headers }).pipe();
    }

}
