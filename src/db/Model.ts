import { DB } from "./DB";
import {v4 as uuidv4} from 'uuid';

export type ModelType<T> = {
  id: string;
} & T;

export type ModelOf<T> = {
  id?: string;
} & T;

export abstract class Model<T> {
  public id: string;
  private db: DB<ModelType<T>>;

  constructor(tableName: string) {
    this.id = uuidv4();
    this.db = new DB<ModelType<T>>(tableName);
  }

  save() {
    return this.db.store({
      id: this.id,
      ...this.getData()
    })
  }

  abstract getData(): T;

  update(data: ModelType<T>) {
    return this.db.update(this.id, data)
  }

  delete() {
    return this.db.delete(this.id)
  }
}