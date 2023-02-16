export {};

declare global {
  namespace NodeJS {
    interface Global {
      test: (
        title: string,
        callback: () => Promise<void> | void
      ) => Promise<void>;

      expect: (actual: unknown) => {
        toBe(expected: unknown): void;
      };
    }
  }
}
