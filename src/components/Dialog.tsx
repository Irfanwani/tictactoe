import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

interface DialogProps {
  winner: string;
  callback: any;
}

const Dialog: FC<DialogProps> = ({ winner, callback }) => {
  return (
    <View style={styles.dialog}>
      <Text style={styles.title}>Player {winner} WON!!!</Text>
      <TouchableOpacity onPress={callback} style={styles.restart}>
        <Text style={styles.restarttext}>Restart</Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

export default Dialog;
