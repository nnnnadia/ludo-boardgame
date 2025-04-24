import { normalPath, shortPath } from '../constants/paths'

export type PathType = 'normal' | 'short'

/**
 * Selects a path type and returns it duplicated
 * @param pathType - The type of path to use ('normal' or 'short')
 * @returns The selected path duplicated
 */
export const selectPath = (pathType: PathType): number[][] => {
  const selectedPath = pathType === 'normal' ? normalPath : shortPath
  return [...selectedPath, ...selectedPath]
}
