const debugConsole =
  process.env.NODE_ENV !== "production"
    ? (...args: any[]) => {
        // eslint-disable-next-line no-console
        console.log(...args);
      }
    : () => {};

export { debugConsole };
