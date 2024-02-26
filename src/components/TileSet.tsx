import { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles";

interface TilesProps {
  tilesx: number[];
  sel: any;
  callback: Function;
  selection: boolean;
}

const TileSet: FC<TilesProps> = ({ tilesx, sel, callback, selection }) => {
  const select = (i: number) => {
    callback(i, selection ? "X" : "O");
  };

  return (
    <View style={styles.tileset}>
      {tilesx.map((i) => (
        <TouchableOpacity
          disabled={!!sel[`tile${i}`]}
          onPress={() => select(i)}
          key={i}
          style={styles.tile}
        >
          <Text style={styles.selection}>{sel[`tile${i}`]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TileSet;