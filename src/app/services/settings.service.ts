import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SettingsModel } from "../models/settings.model";
import { environment } from "../../environments/environment";

@Injectable()
export class SettingsService {

    constructor(
        private http: HttpClient
    ) {

    }

    getSettingsByDate(inicio: string, fim: string): Observable<SettingsModel> {
        return this.http.get<SettingsModel>(`${environment.settingsContext}GetSettingsByDate?inicio=${inicio}&fim=${fim}`);
    }

    updateSettings(model: SettingsModel): Observable<SettingsModel> {
        return this.http.post<SettingsModel>(`${environment.settingsContext}updateSettings`, model);
    }
}