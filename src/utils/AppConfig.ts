import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed' as LocalePrefix;

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr', 'zh', 'vh'],
  defaultLocale: 'en',
  localePrefix,
};
