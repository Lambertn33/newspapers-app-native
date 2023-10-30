import { StyleSheet } from "react-native";
import { FC, useState, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";

import { getNewspaper } from "../../api/api";
import { AppBar, AppContainer, AppIndicator } from "../../components/UI";

import { GlobalStyles } from "../../constants/styles";

interface INewspaperDetails {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  abstract: string;
  link: string;
  publisher: {
    id: number;
    names: string;
  };
}

interface INewspaperState {
  newspaper: INewspaperDetails | null;
  loading: boolean;
}

const NewsPaper: FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const [newspaperState, setNewspaperState] = useState<INewspaperState>({
    newspaper: null,
    loading: false,
  });
  const { newspaperId } = route.params;
  
  useEffect(() => {
    const fetchNewspaper = async () => {
      setNewspaperState((prevState) => {
        return { ...prevState, loading: true };
      });
      const newspaper: INewspaperDetails = await getNewspaper(newspaperId);
      setNewspaperState({
        loading: false,
        newspaper,
      });
    };
    fetchNewspaper();
  }, []);

  const goBack = () => navigation.goBack();
  const { loading, newspaper } = newspaperState;

  return (
    <AppContainer>
      {loading ? (
        <AppIndicator />
      ) : (
        <>
          <AppBar
            title={newspaperState.newspaper?.title!}
            backIcon={
              <AntDesign
                name="back"
                size={32}
                color={GlobalStyles.colors.light}
                onPress={goBack}
              />
            }
          />
        </>
      )}
    </AppContainer>
  );
};

export default NewsPaper;

const styles = StyleSheet.create({});
