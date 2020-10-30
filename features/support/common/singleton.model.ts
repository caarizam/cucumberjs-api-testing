

class Singleton {

    private static instance: Singleton;

    accessToken: string;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public setAccessToken(accessToken: string){
        this.accessToken = accessToken;
    }

    public getAccessToken(){
        return this.accessToken;
    }
}

export function setAccessToken(accessToken: string){
    const singletonModel = Singleton.getInstance();
    singletonModel.setAccessToken(accessToken);
}

export function getAccessToken(){
    const singletonModel = Singleton.getInstance();
    return singletonModel.getAccessToken();
}
