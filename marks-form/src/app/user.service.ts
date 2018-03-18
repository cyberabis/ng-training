import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    
    //Shared attribute
    userName: string;

    //Initialize data
    constructor(public http: HttpClient){
        //this.userName = 'Anonymous User';
        http.get('https://jsonplaceholder.typicode.com/users/1')
        .subscribe(response => {
            this.userName = response['name'];
            console.log('Response: ', JSON.stringify(response));
        });
        console.log('Service created');
    }

    //Shared method
    changeUserName(userName: string): void {
        this.userName = userName;
    }
}