import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from './global';
import { map } from 'rxjs/operators';
import { FirebaseRecord } from './firebase-record';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    pairs = this.globals.pairs

    constructor(
        private globals: Globals,
        private http: HttpClient) { }

    postData(postData) {
        console.log("Posting data...");
        return this.http.post('https://valentine-day-swap-default-rtdb.firebaseio.com/pairs.json', postData)
    }

    getData() {
        console.log("Getting data...");
        return this.http.get('https://valentine-day-swap-default-rtdb.firebaseio.com/pairs.json');
    }

    deleteData() {
        console.log("Deleteing data...");
        return this.http.delete('https://valentine-day-swap-default-rtdb.firebaseio.com/pairs.json')
    }

    getAll() {
        return this.getData()
            .pipe(map(responseData => {
                console.log(responseData);
                const postArray = []
                for (const key in responseData) {
                    postArray.push(responseData[key]);
                }
                //console.log(postArray);
                return postArray;
            }))
    }

    getSendersOnly() {
        return this.getData()
            .pipe(map(responseData => {
                console.log(responseData);
                const postArray = []
                for (const key in responseData) {
                    //console.log(key);
                    for (const id in responseData[key]) {
                        //console.log(id);
                        for (const data in responseData[key][id]) {
                            //console.log(responseData[key][id][data]);
                            if (data === "sender") {
                                postArray.push(responseData[key][id][data]);
                            }
                        }
                    }
                }
                //console.log(postArray);
                return postArray;
            }))
    }

    shufflePlayers() {
        console.log("Shuffling players");
        this.getSendersOnly()
            .subscribe(players => {
                console.log("Filtered GET data");
                console.log(players);
                //Do secret santa algorithm
                let result = this.secretSanta(players);
                this.deleteData().subscribe(() => {
                    this.postData(result).subscribe(responseData => {
                        console.log(responseData);
                    });
                });
            });
    }

    secretSanta(players) {
        console.log("Secret santa running...");
        var a = players.slice(0);
        var b = players.slice(0);
        var result = [];
        while (a.length > 1) {
            var i = this.extractRandomElement(a);
            var j = this.extractRandomElement(b);

            while (i === j) {
                b.push(j);
                j = this.extractRandomElement(b);
            }
            result.push({ sender: i, recipient: j });
        }
        if (a[0] === b[0]) {
            result.push({ sender: a[0], recipient: result[0].b });
            result[0].b = a[0];
        } else {
            result.push({ sender: a[0], recipient: b[0] });
        }
        console.log("Shuffled player success:");
        console.log(result);
        return result;
    }

    extractRandomElement(array) {
        return array.splice(Math.floor(Math.random() * array.length), 1)[0];
    }

    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}