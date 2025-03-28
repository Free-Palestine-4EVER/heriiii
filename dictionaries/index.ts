import "server-only"
import type { Locale } from "@/types"

// Import dictionaries directly
import en from "./en.json"
import fr from "./fr.json"

// Create a dictionary object with the imported JSON
const dictionaries = {
  en,
  fr,
}

export const getDictionary = async (locale: Locale) => {
  // Return the dictionary for the requested locale
  return dictionaries[locale]
}

