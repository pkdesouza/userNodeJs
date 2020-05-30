export class Config {
  public port: string | number = process.env.port ? process.env.port : 8000;
}

export default Config;
