let index: number = 0;
export function id(): number {
  return index++;
}

export function reset() {
  index = 0;
}
