import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBar}>
        <Text style={styles.headText}>NetCheck</Text>
      </View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput placeholder="Enter device name" style={styles.inputBar} />
        <Text style={styles.inputText}>Email</Text>
        <TextInput placeholder="Enter device name" style={styles.inputBar} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.appButtonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "100",
  },
  messageBar: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: "#a202c9",
  },
  headText: {
    color: "#fff",
    fontSize: 30,
  },
  inputBar: {
    borderColor: "#000",
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 20,
    margin: 10,
  },
  inputText: {
    fontSize: 20,
    padding: 10,
  },
  inputBox: {
    paddingTop: 70,
  },
  button: {
    backgroundColor: "#a202c9",
    marginLeft: 250,
    marginRight: 40,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    marginTop: 50,
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Detail;
