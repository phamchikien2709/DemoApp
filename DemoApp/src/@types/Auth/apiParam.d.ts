interface IParamsLogin {
  username: string;
  password: string;
}
interface IParamResult {
  data: any;
  StatusCode: 0 | 1;
}

type IParamsStatusScreen = 'splash' | 'unAuthorized' | 'main';
