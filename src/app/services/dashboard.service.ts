import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DashboardModel } from "../models/main.data.model";
import { environment } from "../../environments/environment";

@Injectable()
export class DashboardService {

    constructor(
        private http: HttpClient
    ) {

    }

    getDashboard(inicio: string, fim: string): Observable<DashboardModel> {
        return this.http.get<DashboardModel>(`${environment.dashboardContext}GetDashboard?inicio=${inicio}&fim=${fim}`);
    }
}