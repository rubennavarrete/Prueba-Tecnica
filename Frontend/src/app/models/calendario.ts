export interface calendarioModel {
    status:  string;
    message: string;
    body:    dataCalendario[];
}

export interface dataCalendario {
    id:          number;
    titulo:      string;
    descripcion: string;
    dia:         number;
    mes:         number;
    anio:        number;
    lugar:       string;
    hora:        string;
}
