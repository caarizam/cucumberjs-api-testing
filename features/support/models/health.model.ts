

export class HealthModel {

    healthEndPoint: string;

    constructor() {
        this.healthEndPoint = "/api/health/";
    }

}

export enum HealthTypes {
    SERVICE = <any>"service",
    DATABASE = <any>"database",
    ELASTIC = <any>"elasticsearch"
};

export interface HealthInterfaceResponse {
    type: string;
    status: string;
    message: string;
    statusCode: number;
}
