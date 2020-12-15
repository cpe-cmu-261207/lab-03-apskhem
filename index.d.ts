export declare function sum(a: number, b: number): number

export declare function map<U = any, T = any>(arr: T[], callback: (item: T, index: number) => U): U[]
  
export declare function filter<T = any>(arr: T[], callback: (item: T, index: number) => boolean): T[]

export declare function reduce<U = any, T = any>(arr: T[], callback: (prev: U, item: T, index: number) => U, initialValue: U): U
  