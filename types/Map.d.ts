import LazySequence = require('./LazySequence');
import IMap = require('./IMap');

declare function Map<K, V>(obj?: {[key: string]: V;}): Map<K, V>;

declare module Map {
  function empty(): Map<any, any>;
  function fromObj<V>(obj: {[key: string]: V;}): Map<string, V>;
}

interface Map<K, V> extends LazySequence<K, V, Map<K, V>> {
  length: number;
  has(k: K): boolean;
  get(k: K, undefinedValue?: V): V;
  getIn(keyPath: any[], pathOffset?: number): any;
  equals(other: Map<K, V>): boolean;
  empty(): Map<K, V>;
  set(k: K, v: V): Map<K, V>;
  setIn(keyPath: any[], v: any, pathOffset?: number): Map<K, V>;
  delete(k: K): Map<K, V>;
  deleteIn(keyPath: any[], pathOffset?: number): Map<K, V>;
  merge(seq: LazySequence<K, V, any>): Map<K, V>;
  isTransient(): boolean;
  asTransient(): Map<K, V>;
  asPersistent(): Map<K, V>;
  clone(): Map<K, V>;
}

export = Map;
