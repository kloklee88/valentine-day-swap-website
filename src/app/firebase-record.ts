import { Injectable } from "@angular/core";


@Injectable()
export class FirebaseRecord {
    name: string;
    pairs: Pair[];
}

export class Pair {
    sender: string;
    recipient: string;
}