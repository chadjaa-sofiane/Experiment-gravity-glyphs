/**
 * getRandomCoordinates
 * Generates random coordinates within a given range
 * @example
 * getRandomCoordinates(0, 100, 0, 100, 0, 100);
 * // {x: 12, y: 34, z: 56}
 */
export const getRandomCoordinates = (
  minX = -400,
  maxX = 400,
  minY = -400,
  maxY = 400,
  minZ = -400,
  maxZ = 400,
) => {
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;
  const z = Math.random() * (maxZ - minZ) + minZ;
  return { x, y, z };
};
