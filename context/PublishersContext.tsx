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
  addPublisher: (newPublisher: IPublisher) => void;
  editPublisher: (publisher: IPublisher) => void;
  removePublisher: (id: number) => void;
  updatePublisherNewspapersCount: (id: number, type: string) => void;
}

export const PublishersContext = createContext<IPublishersContext>({
  publishers: [],
  loading: false,
  error: null,
  addPublisher: (newPublisher: IPublisher) => {},
  removePublisher: (id: number) => {},
  editPublisher: (publisher: IPublisher) => {},
  updatePublisherNewspapersCount: (id: number, type: string) => {},
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

  const addPublisher = (newPublisher: IPublisher) => {
    setPublishers((prevState) => {
      return [...prevState, newPublisher];
    });
  };

  const editPublisher = (publisher: IPublisher) => {
    const { id, names, joinedDate } = publisher;
    const publishersCopy = [...publishers];
    const publisherIndex = publishersCopy.findIndex((p) => p.id === id);
    publishers[publisherIndex].joinedDate = joinedDate;
    publishers[publisherIndex].names = names;
    setPublishers(publishersCopy);
  };

  const updatePublisherNewspapersCount = (id: number, type: string) => {
    const publishersCopy = [...publishers];
    const publisherIndex = publishersCopy.findIndex((p) => p.id === id);
    publishers[publisherIndex]._count.newsPapers =
      type === "ADD"
        ? publishers[publisherIndex]._count.newsPapers + 1
        : publishers[publisherIndex]._count.newsPapers - 1;
    setPublishers(publishersCopy);
  };

  const removePublisher = (id: number) => {
    const filteredPublishers = publishers.filter((pub) => pub.id !== id);
    setPublishers(filteredPublishers);
  };

  const contextValue: IPublishersContext = {
    publishers,
    loading,
    error,
    addPublisher,
    removePublisher,
    editPublisher,
    updatePublisherNewspapersCount,
  };

  return (
    <PublishersContext.Provider value={contextValue}>
      {children}
    </PublishersContext.Provider>
  );
};

export default PublishersContextProvider;
