import axios from "axios";
import {
  useContext,
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";

export interface IToolsContext {
  url: string;
  isUrlValid: boolean;
  setUrl: (url: string) => void;
}

export interface IToolsProvider {
  defaultUrl?: string;
}

const ToolsContext = createContext<IToolsContext>({} as IToolsContext);

export const ToolsProvider = ({
  children,
  defaultUrl = "",
}: PropsWithChildren<IToolsProvider>) => {
  const [url, setUrl] = useState(defaultUrl);
  const [isUrlValid, setIsUrlValid] = useState(true);

  useEffect(() => {
    (async () => {
      if (url) {
        const request = await fetch(url, {
          method: "HEAD",
        });

        if (request.status === 404) {
          setIsUrlValid(false);
          return;
        }

        setIsUrlValid(true);
      }
    })();
  }, [url]);

  return (
    <ToolsContext.Provider value={{ url, setUrl, isUrlValid }}>
      {children}
    </ToolsContext.Provider>
  );
};

export const useTools = () => {
  const context = useContext(ToolsContext);

  return context;
};
