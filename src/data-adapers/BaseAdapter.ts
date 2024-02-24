export abstract class BaseAdapter<T> {
  abstract save(value: T): Promise<string>;
  abstract getItem(key: string): Promise<T | null>;
  abstract deleteItem(key: string): Promise<void>;
  abstract getAllItems(): Promise<T[]>;
}
