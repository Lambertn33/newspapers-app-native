import { FC } from "react";
import { StyleSheet, View } from "react-native";
import NewspaperItem from "./NewspaperItem";

interface INewspaper {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  publisher: {
    names: string;
  };
}

const NewspapersList: FC<{ newspapers: INewspaper[] }> = ({ newspapers }) => {
  return (
    <View style={styles.newspapersContainer}>
      {newspapers.map((newspaper) => (
        <NewspaperItem newspaper={newspaper} key={newspaper.id} />
      ))}
    </View>
  );
};

export default NewspapersList;

const styles = StyleSheet.create({
  newspapersContainer: {
    gap: 16,
  },
});
