import { useLanguage } from "@/context/LanguageContext";
import * as idData from "@/data/site";
import * as enData from "@/data/site.en";

export function useContent() {
  const { lang } = useLanguage();
  return lang === "en" ? enData : idData;
}
