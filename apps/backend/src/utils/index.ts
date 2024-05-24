import { glob } from 'glob'

export const assetsPath = glob.sync(__dirname)[0]
