import { StyleSheet, Dimensions } from "react-native";

// styles down here
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  tile: {
    height: Dimensions.get("window").width / 3.1,
    width: Dimensions.get("window").width / 3.1,
    borderColor: "teal",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tileset: {
    flexDirection: "row",
  },
  selection: {
    fontSize: 70,
    fontWeight: "600",
    color: "orange",
  },
  restart: {
    backgroundColor: "grey",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  restarttext: {
    color: "cyan",
  },
  dialog: {
    position: 'absolute',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
  }
});

export default styles;