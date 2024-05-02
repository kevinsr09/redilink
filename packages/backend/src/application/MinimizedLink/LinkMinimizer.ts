import { MinimizedLink } from '@/domain/MinimizedLink/MinimizedLink'

export class LinkMinimizer {
  async minimize ({ originalURL, minimizedURL }: { originalURL: string, minimizedURL: string }): Promise<void> {
    MinimizedLink.create(originalURL, minimizedURL)
  }
}
