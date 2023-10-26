import React, {
  createContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from "react";
import { getPublishers } from "../api/api";

interface IPublisher {
  id: number;
  names: string;
  joinedDate: Date;
  _count: {
    newsPapers: number;
  };
}

interface IPublishersContext {
  publishers: IPublisher[];
  loading: boolean;
  error: Error | null | unknown;
}

export const PublishersContext = createContext<IPublishersContext>({
  publishers: [],
  loading: false,
  error: null,
});

const PublishersContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [publishers, setPublishers] = useState<IPublisher[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null | unknown>(null);

  useEffect(() => {
    const fetchPublishers = async () => {
      setLoading(true);
      try {
        const response = await getPublishers();
        setPublishers(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPublishers();
  }, []);

  const contextValue: IPublishersContext = {
    publishers,
    loading,
    error,
  };

  return (
    <PublishersContext.Provider value={contextValue}>
      {children}
    </PublishersContext.Provider>
  );
};

export default PublishersContextProvider;
