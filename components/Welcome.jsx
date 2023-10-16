import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Welcome = () => {
  const [connection, setConnection] = useState(true);
  const [textMessage, setMessage] = useState("Active connection");
  const [color, setColor] = useState("#14ba1a");
  useEffect(() => {
    if (!connection) {
      setColor("#c71c2d");
      setMessage("Connection failed");
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.messageBar}>
        <Text style={styles.headText}>Welcome</Text>
      </View>
      <View style={styles.status}>
        <Entypo name="dot-single" size={100} color={color} />
        <Text style={styles.connection}>{textMessage}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.appButtonText}>Check Speed</Text>
      </TouchableOpacity>
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
  status: {
    paddingTop:40,
    flexDirection: "row",
  },
  connection: {
    paddingTop: 35,
    fontSize: 20,
    marginLeft: -15,
  },
  button: {
    backgroundColor: "#a202c9",
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    marginTop: 80,
  },
  appButtonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Welcome;
