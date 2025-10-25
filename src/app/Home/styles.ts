import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#d0d2d8",
    paddingTop: 62,
  },
  logo: {},
  form: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 10,
    marginTop: 32,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24,
  },
  filters: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderColor: "#E4E6EC",
    paddingBottom: 12,
  },
  clearButton: {
    marginLeft: "auto",
  },
  clearText: {
    color: "#828282",
    fontSize: 12,
    fontWeight: 600,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#EEF0F5",
    marginVertical: 16,
  },
  listContent: {
    paddingTop: 24,
    paddingBottom: 62,
  },
  emptyListText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
  },
});
