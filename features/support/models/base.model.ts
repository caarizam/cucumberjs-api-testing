
export class BaseModel {

    baseUrl: string = "127.0.0.1:8888";
}

export interface LastResponseInterface {
  status_code: number;
  body: any;
};
