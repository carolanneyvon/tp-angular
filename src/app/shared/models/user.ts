import { Country } from './country';

export class User {
  constructor(
    public id?: string,
    public lastname?: string,
    public firstname?: string,
    public email?: string,
    public gender?: string,
    public isMarried?: boolean,
    public country?: Country,
  ) {}
}
