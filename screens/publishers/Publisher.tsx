import { FC, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { getPublisher } from "../../api/api";
import { GlobalStyles } from "../../constants/styles";

import { AppBar, AppContainer, AppIndicator, AppText } from "../../components/UI";
import {
  PublisherHeader,
  PublisherNewsPapers,
} from "../../components/publisher";
import { formatDate } from "../../helpers/date";

interface INewsPaper {
  id: number;
  abstract: string;
  link: string;
  image: string;
  creationDate: Date;
  title: string;
}

interface IPublisherDetails {
  id: number;
  names: string;
  joinedDate: Date;
  newsPapers: INewsPaper[];
}

interface IPublisherState {
  publisher: IPublisherDetails | null;
  loading: boolean;
}

const Publisher: FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const [publisherState, setPublisherState] = useState<IPublisherState>({
    publisher: null,
    loading: false,
  });
  const { publisherId } = route.params;

  useEffect(() => {
    const fetchPublisher = async () => {
      setPublisherState((prevState) => {
        return { ...prevState, loading: true };
      });
      const publisher: IPublisherDetails = await getPublisher(publisherId);
      setPublisherState({
        loading: false,
        publisher,
      });
    };
    fetchPublisher();
  }, []);

  const goBack = () => navigation.goBack();
  const { loading, publisher } = publisherState;
  return (
    <AppContainer>
      {loading ? (
        <AppIndicator />
      ) : (
        // app bar
        <>
          <AppBar
            title={publisherState.publisher?.names!}
            actionIcon={
              <Entypo
                name="add-to-list"
                size={32}
                color={GlobalStyles.colors.light}
              />
            }
            backIcon={
              <AntDesign
                name="back"
                size={32}
                color={GlobalStyles.colors.light}
                onPress={goBack}
              />
            }
          />

          {/* body */}
          <ScrollView>
            <View style={styles.container}>
              {/* header */}
              <PublisherHeader
                joinedDate={formatDate(publisher?.joinedDate!)}
                names={publisher?.names}
              />

              {/* newspapers */}
              <View>
                <AppText labelStyles={styles.newspapersTitle}>{publisher?.names}'s Newspapers</AppText>
                <PublisherNewsPapers newspapers={publisher?.newsPapers} />
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </AppContainer>
  );
};

export default Publisher;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    flex: 1,
    gap:16
  },
  newspapersTitle: {
    textAlign: 'center',
    fontSize: 16
  }
});
