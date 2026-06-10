const api = `http://localhost:32768/api`;

export const environment = {
    production: false,

    loginContext: `${api}/auth/`,
    settingsContext: `${api}/settings/`,
    monthContext: `${api}/mes/`,
    gastosContext: `${api}/gastos/`,
    patrimonioContext: `${api}/patrimonio/`,
    dashboardContext: `${api}/dashboard/`
};
