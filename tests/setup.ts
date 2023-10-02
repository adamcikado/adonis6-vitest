import 'reflect-metadata'
import { beforeAll } from 'vitest'
import { Ignitor } from '@adonisjs/core'

const APP_ROOT = new URL('./', import.meta.url)
const IMPORTER = (filePath: string) => {
  if (filePath.startsWith('./') || filePath.startsWith('../')) {
    return import(new URL(filePath, APP_ROOT).href)
  }
  return import(filePath)
}

beforeAll(async () => {
  const ignitor = new Ignitor(APP_ROOT, { importer: IMPORTER }).tap((app) => {
    app.booting(async () => {
      await import('#start/env')
    })
  })

  await ignitor
    .testRunner()
    .configure(async () => {})
    .run(async () => {
      const testUtils = await import('@adonisjs/core/services/test_utils')
      await testUtils.default.httpServer().start()
    })

  // alternatively
  // await ignitor.httpServer().start()
})
