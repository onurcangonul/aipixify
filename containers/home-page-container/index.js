'use client'
import styles from './styles.module.scss'
import PromptForm from './prompt-form'
import PrompSuggestions from './promp-suggestions'
import Examples from './examples'
import { useHomePage } from './useHomepage'
const HomePageContainer = () => {
    
  return (
      <div className={styles.homePageContainer}>
          <h1 className={styles.title}>
              You just imagine,
              <br />
              we handle the rest
          </h1>
          <p className={styles.description}>
              Tell us a prompt and we&apos;ll generate a story for you.
          </p>
          <PromptForm />
          <PrompSuggestions />
          <Examples />
      </div>
  )
}

export { HomePageContainer }