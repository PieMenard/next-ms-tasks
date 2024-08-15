import { defineConfig } from 'drizzle-kit';
import config from '@/lib/config';

export default defineConfig({
  dialect: 'sqlite', // "postgresql" | "mysql"
  schema: 'src/lib/schema.ts',
  dbCredentials: {
    url: config.DATABASE_URL,
  },
});
