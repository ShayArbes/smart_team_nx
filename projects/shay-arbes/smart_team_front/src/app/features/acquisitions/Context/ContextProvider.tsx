import { createContext, useState } from "react";


interface IndexContextData {
  index: number | null;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
interface IndexContextProviderProps {
  children: React.ReactNode;
}
export const indexContext = createContext<IndexContextData | null>(null);

export const IndexContextProvider: React.FC<IndexContextProviderProps> = (props) => {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <indexContext.Provider value={{ index, setIndex }}>{props.children}</indexContext.Provider>
    </>
  );
};