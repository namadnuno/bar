import _ from "lodash";
import { ModelType } from "./Model";

type DBType<T> = Array<ModelType<T>>; 

export class DB<T> {
  private tableName: string;
  private db: DBType<ModelType<T>> | null;
  constructor(tableName: string) {
    this.tableName = tableName;
    this.db = null;
    this.refetchDBContents();
  }

  getDBContents() {
    return localStorage.getItem(this.tableName);
  }

  refetchDBContents() {
    this.db = JSON.parse(this.getDBContents() as string) as DBType<ModelType<T>>;
  }

  initDB() {
    localStorage.setItem(this.tableName, JSON.stringify([]));
  }

  get() {
    const dbContents = this.getDBContents();
    
    if (!dbContents) {
      this.initDB();
    }

    if (!this.db) {
      this.refetchDBContents()
    }
    
    return [...this.db as DBType<T>] ;
  }

  store(element: ModelType<T>) {
    const content = this.get();
    console.log(content, element);
    this.saveAll([
      ...content,
      {...element}
    ])
  }

  saveAll(data: DBType<ModelType<T>>) {
    localStorage.setItem(this.tableName, JSON.stringify(data));
    this.refetchDBContents();
  }

  getById(id: string) {
    return _.find(this.get(), {id})
  }

  geIndexById(id: string) {
    return _.findIndex(this.get(), (el: ModelType<T> ) => id === el.id);
  }

  update(id: string, data: ModelType<T>) {
    const content = this.get();
    const index = this.geIndexById(id);

    content[index] = data;

    this.saveAll([...content])
  }

  delete(id: string) {
    const content = this.get();
    const index = this.geIndexById(id);

    content.splice(index, 1);

    this.saveAll(content)
  }
} 