import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    shufflePlayers(players) {
        var arr = players;
        var result = [];
        var recipients = arr.slice();
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            var sender = arr[i];
            var recipientIndex = Math.floor(Math.random() * recipients.length);
            while (recipients[recipientIndex] === sender) {
                // Can't send gift to myself
                recipientIndex = Math.floor(Math.random() * recipients.length);
            }
            var recipient = recipients.splice(recipientIndex, 1)[0];
            result.push({
                sender: sender,
                receiver: recipient
            });
        }
        console.log(result);
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