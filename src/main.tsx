import { useState, FC, useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import TileSet from "./components/TileSet";
import Dialog from "./components/Dialog";

import styles from "./styles";

const tiles1: number[] = [0, 1, 2];
const tiles2: number[] = [3, 4, 5];
const tiles3: number[] = [6, 7, 8];

const App: FC = () => {
  const [st, setSt] = useState<Object>({});
  const [selection, setSelection] = useState(true);
  const [winner, setWinner] = useState("");

  const callback = (i: number, selection: string) => {
    setSt((prev) => ({ ...prev, [`tile${i}`]: selection }));
    setSelection((prev) => !prev);
  };

  useEffect(() => {
    if (Object.keys(st).length >= 5) {
      if (st["tile2"]) {
        if (st["tile2"] == st["tile4"] && st["tile2"] == st["tile6"]) {
          setWinner(st["tile2"]);

          return;
        }
      }

      if (st["tile0"]) {
        if (
          (st["tile0"] == st["tile4"] && st["tile0"] == st["tile8"]) ||
          (st["tile0"] == st["tile1"] && st["tile0"] == st["tile2"]) ||
          (st["tile0"] == st["tile3"] && st["tile0"] == st["tile6"])
        ) {
          setWinner(st["tile0"]);

          return;
        }
      }

      if (st["tile4"]) {
        if (
          (st["tile4"] == st["tile1"] && st["tile4"] == st["tile7"]) ||
          (st["tile4"] == st["tile3"] && st["tile4"] == st["tile5"])
        ) {
          setWinner(st["tile4"]);

          return;
        }
      }

      if (st["tile8"]) {
        if (
          (st["tile8"] == st["tile5"] && st["tile8"] == st["tile2"]) ||
          (st["tile8"] == st["tile7"] && st["tile8"] == st["tile6"])
        ) {
          setWinner(st["tile8"]);

          return;
        }
      }
    }
  }, [st]);

  const restart = () => {
    setSt({});
    setSelection(true);
    setWinner("");
  };

  if (winner) {
    return (
      <View style={styles.view}>
        <Dialog winner={winner} callback={restart} />
      </View>
    );
  }
  return (
    <View style={styles.view}>
      <Text style={styles.title}>TicTacToe</Text>
      <TileSet
        tilesx={tiles1}
        sel={st}
        callback={callback}
        selection={selection}
      />
      <TileSet
        tilesx={tiles2}
        sel={st}
        callback={callback}
        selection={selection}
      />
      <TileSet
        tilesx={tiles3}
        sel={st}
        callback={callback}
        selection={selection}
      />

      <TouchableOpacity onPress={restart} style={styles.restart}>
        <Text style={styles.restarttext}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
