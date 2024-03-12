import { StyleSheet } from "react-native";
import * as colors from "../../theme/colors";

const styles = StyleSheet.create({
  container: {},
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 184,
    marginBottom: 259,
    marginLeft: 20,
    marginRight: 20,
  },
  cardImage: {
    height: 154,
    width: 154,
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "center",
    color: colors.cardHeadingColor,
    lineHeight: 32.4,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    alignSelf: "center",
    color: colors.cardTextColor,
  },
});

export default styles;
