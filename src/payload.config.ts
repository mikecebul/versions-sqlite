import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { Users } from './collections/Users'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Users],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
