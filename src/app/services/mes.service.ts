import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MesModel } from "../models/month.model";
import { environment } from "../../environments/environment";

@Injectable()
export class MesService {
    
    constructor(
        private http: HttpClient
    ) {

    }

    getMesByDate(inicio: string, fim: string): Observable<MesModel> {
        return this.http.get<MesModel>(`${environment.monthContext}GetMesByDate?inicio=${inicio}&fim=${fim}`);
    }

    updateMes(mes: MesModel): Observable<MesModel> {
        return this.http.put<MesModel>(`${environment.monthContext}UpdateMes`, mes);
    }
}