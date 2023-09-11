/// <reference types="vite/client" />
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
