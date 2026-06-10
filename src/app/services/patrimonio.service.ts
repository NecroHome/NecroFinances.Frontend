import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PatrimonioModel } from "../models/patrimonio.model";
import { environment } from "../../environments/environment";

@Injectable()
export class PatrimonioService {

    constructor (
        private http: HttpClient
    ) {

    }

    getPatrimonioByDate(inicio: string, fim: string): Observable<PatrimonioModel> {
        return this.http.get<PatrimonioModel>(`${environment.patrimonioContext}getPatrimonioByDate?inicio=${inicio}&fim=${fim}`);
    }

    updatePatrimonio(patrimonio: PatrimonioModel): Observable<PatrimonioModel> {
        return this.http.post<PatrimonioModel>(`${environment.patrimonioContext}updatePatrimonio`, patrimonio);
    }
}