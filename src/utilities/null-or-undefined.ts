type Indefinite = unknown | undefined | null;

export function neitherNullNorUndefined(input: Indefinite): input is unknown {
  return input != null; // != intentional
}

export function isNullOrUndefined(
  input: Indefinite
): input is null | undefined {
  return !neitherNullNorUndefined(input);
}
