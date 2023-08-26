const debugConsole =
  process.env.REACT_APP_ACTIVE_CONSOLE_LOG === "true"
    ? (...args: any[]) => {
        // eslint-disable-next-line no-console
        console.log(...args);
      }
    : () => {};

export { debugConsole };
