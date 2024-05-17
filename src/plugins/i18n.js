import { createI18n } from "vue-i18n";

import en_US from "../locales/en_US.json";
import ar_AE from "../locales/ar_AE.json";

const messages = {
  en_US,
  ar_AE,
};
export default createI18n({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages,
});
