"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

const PromptForm = () => {
    const [ prompt, setPrompt ] = useState("");
    const handleFormSubmit = () => { };
    const handlePromptChange = (event) => {
        setPrompt(event.target.value)
    }
  return (
    <div className={styles.promptForm}>
      <form className={styles.form}>
        <textarea
          className={styles.promptTextarea}
          rows={2}
          type="text"
          required
          placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
          value={prompt}
          onChange={handlePromptChange}
        />
        <button className={styles.generateButton} type="submit">
          Genarate
        </button>
      </form>
    </div>
  );
};

export default PromptForm;
