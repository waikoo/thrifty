export function* generateAlphabet() {
  for (let i = 65; i <= 90; i++) {
    yield String.fromCharCode(i);
  }
}
