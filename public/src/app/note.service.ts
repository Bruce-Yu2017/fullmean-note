import {Http} from "@angular/http";
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  retrieveNote(callback) {
    this._http.get("http://localhost:8000/notes").subscribe(
      (res) => {
      callback(res.json());
    },
    (err) => {
      return err;
    })
  }

  createNote(data, callback) {
    this._http.post("http://localhost:8000/notes", {note: data}).subscribe(
      (response) => {
        console.log(response.json());
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }

    )
  }

}

  
