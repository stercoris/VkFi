/**
 * Delay util
 * @param time delay time in milliseconds
 */
export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
