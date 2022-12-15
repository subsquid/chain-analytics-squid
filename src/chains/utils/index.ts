export async function getKeysCountAll(
  getIterable: AsyncIterable<Uint8Array[]>
): Promise<number | undefined> {
  try {
    const keys = [];
    for await (const keysPack of getIterable) keys.push(...keysPack);
    return keys.length;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}