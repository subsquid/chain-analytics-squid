export class UnknownVersionError extends Error {
  constructor(name: string) {
    super(`There is no relevant version for ${name}`);
  }
}

export class FunctionNotExist extends Error {
  constructor() {
    super(`This function is not exist for the selected chain`);
  }
}
