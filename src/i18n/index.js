import { createI18n } from 'vue-i18n';
import tw from './tw';
/* eslint new-cap: ["error", { "newIsCap": false }] */
const i18n = createI18n({
  locale: 'en',
  legacy: false,
  globalInjection: true,
  messages: {
    tw,
  },
  fallbackLocale: 'en',
});
export default i18n;
