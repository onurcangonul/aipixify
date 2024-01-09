'use client'
import { SUGGESTIONS } from "./constans"
import Tag from "@/components/tag"
import styles from './styles.module.scss'
import { useHomePage } from "../useHomepage"

const PrompSuggestions = () => {
    
    const { changePrompt } = useHomePage()

  return (
      <div className={styles.promptSuggestions}>
          <h3 className={styles.title}>
              Nothing in mind? Try one of these prompts:
          </h3>
          <div className={styles.suggestion}>
              {
                  SUGGESTIONS.map((suggestion) => (
                      <Tag onClick={changePrompt} title={suggestion.title} key={suggestion.id} />
                  ))
              }
          </div>
      </div>
  )
}

export default PrompSuggestions