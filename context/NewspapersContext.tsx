import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";
import { getNewspapers } from "../api/api";

interface INewspaper {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  publisher: {
    names: string;
  };
}

interface INewspapersContext {
  newspapers: INewspaper[];
  loading: boolean;
  error: Error | null | unknown;
  removeNewspaper: (id: number) => void;
}

export const NewspapersContext = createContext<INewspapersContext>({
  newspapers: [],
  loading: false,
  error: null,
  removeNewspaper: (id: number) => {}
});

const NewspapersContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [newspapers, setNewspapers] = useState<INewspaper[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null | unknown>(null);

  useEffect(() => {
    const fetchNewspapers = async () => {
      setLoading(true);
      try {
        const response = await getNewspapers();
        setNewspapers(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchNewspapers();
  }, []);

  const removeNewspaper = (id: number) => {
    const filteredNewspapers = newspapers.filter((newspaper) => newspaper.id !== id);
    setNewspapers(filteredNewspapers);
  };

  const contextValue: INewspapersContext = {
    newspapers,
    loading,
    error,
    removeNewspaper

  };

  return (
    <NewspapersContext.Provider value={contextValue}>
      {children}
    </NewspapersContext.Provider>
  );
};

export default NewspapersContextProvider;
