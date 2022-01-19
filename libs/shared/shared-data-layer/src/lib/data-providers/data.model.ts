export type WithId<Type, IDKey extends string, IDType = string> = Type & {
  [T in IDKey]: IDType;
};
