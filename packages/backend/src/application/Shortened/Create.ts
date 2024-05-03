import { Shortened } from '@/domain/Shortened/Shortened'

export class ShortenedCreator {
  async run (originalURL: string, minimizedURL: string): Promise<void> {
    Shortened.create(originalURL, minimizedURL)
  }
}
