import { useContext, createContext, useState, useMemo } from "react";

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
    const [prompt, setPrompt] = useState("");
    
    const generateImage = async () => {
        // setSubmitting(true);
        // setImage(null);
        // setResultPrompt("");

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) throw new Error(response.statusText ?? response.status);

            const generatedImage = await response.json();

            // setError(null);
            // setResultPrompt(prompt);
            // setImage(generatedImage);
        } catch (error) {
            setError(error);
        }

        // setSubmitting(false);
    };
    const changePrompt = (newPromt) => {
        setPrompt(newPromt)
        window.scrollTo(0,0)
}
  const data = useMemo(
    () => ({
          prompt,
          setPrompt,
          generateImage,
          changePrompt
        
    }),
    [prompt]
  );
    
  return (
    <HomePageContext.Provider value={data}>{children}</HomePageContext.Provider>
  );
};

export const useHomePage = () => {
  const context = useContext(HomePageContext);
  return context;
};
