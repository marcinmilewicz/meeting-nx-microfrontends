export type WithId<Type, K extends string | number> = Type & {
  [T in K]: string;
};
