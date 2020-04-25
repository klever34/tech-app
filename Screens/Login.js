import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../context";

const numberInputHandler = (inputText) => {
  //   setEnteredValue(inputText.replace(/[^0-9]/g, ""));
};

const passwordInputHandler = (inputText) => {
  //   setEnteredValue(inputText.replace(/[^0-9]/g, ""));
};

const Login = (props) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <LinearGradient colors={["#4568DC", "#0083B0"]}>
          <View style={styles.imgContainer}>
            <Image source={require("../assets/images/vampfi.png")} />
          </View>
        </LinearGradient>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Log In</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#000"
              style={styles.txtInput}
              keyboardType="number-pad"
              returnKeyType="next"
              onChangeText={numberInputHandler}
              value=""
            />
          </View>
          <View style={styles.inputWithIcon}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#000"
              style={(styles.txtInput, { flex: 1 })}
              secureTextEntry={true}
              returnKeyType="done"
              onChangeText={passwordInputHandler}
              value=""
            />
            <Image
              source={require("../assets/images/eye.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
          <TouchableOpacity style={styles.btnContainer} onPress={() => signIn()}>
            <Text style={styles.btn}>Log In</Text>
            <ActivityIndicator size="small" color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  inputContainer: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
  },
  inputText: {
    fontSize: 22,
    padding: 30,
    marginVertical: 20,
  },
  input: {
    height: 70,
    width: "90%",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    marginVertical: 30,
  },
  inputWithIcon: {
    height: 70,
    width: "90%",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  txtInput: {
    width: "100%",
  },
  btnContainer: {
    backgroundColor: "#1984E6",
    height: 50,
    width: "90%",
    paddingVertical: 5,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  btn: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 16,
    paddingRight: 10,
  },
});

export default Login;
