import { defineConfig } from 'vite'

export default defineConfig({
  // ... existing config ...
  resolve: {
    alias: {
      crypto: 'crypto-js'
    }
  }
  // ... existing config ...
}) 