import {HealthInterfaceResponse} from "../models/health.model";
import {LoginResponseInterface} from "../actions/auth.actions";


class Singleton {

    private static instance: Singleton;

    private accessToken: LoginResponseInterface;
    private healthResponse: HealthInterfaceResponse;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public setAccessToken(accessToken: LoginResponseInterface){
        this.accessToken = accessToken;
    }

    public getAccessToken(){
        return this.accessToken;
    }

    public setHealthResponse(healthResponse: HealthInterfaceResponse){
        this.healthResponse = healthResponse;
    }

    public getHealthResponse(){
        return this.healthResponse;
    }
}

//Access Token
export function setAccessToken(accessToken: LoginResponseInterface){
    const singletonModel = Singleton.getInstance();
    singletonModel.setAccessToken(accessToken);
}

export function getAccessToken(){
    const singletonModel = Singleton.getInstance();
    return singletonModel.getAccessToken();
}

export function setHealthResponse(healthResponse: HealthInterfaceResponse){
    const singletonModel = Singleton.getInstance();
    singletonModel.setHealthResponse(healthResponse);
}

export function getHealthResponse(){
    const singletonModel = Singleton.getInstance();
    singletonModel.getHealthResponse();
}
