'use client'
import { EXAMPLES } from './constants';
import styles from './styles.module.scss'
import Tag from "@/components/tag";
import Image from 'next/image';
import { useHomePage } from '../useHomepage';
const Examples = () => {
  const { changePrompt } = useHomePage()
  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div className={styles.example} key={example.id}>
          <h4>{example.prompt}</h4>
           <Tag
            className={styles.copyButton}
            title="Copy"
            onClick={ ()=> changePrompt(example.prompt)}
          /> 
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  )
}

export default Examples