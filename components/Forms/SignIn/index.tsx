import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import icons from "../../../constants/icons";
import colors from "../../../constants/colors";

const SignInForm = () => {
  return (
    <View>
      <Text>Let's you in</Text>
      <View>
        <View>
          <View>
            <Image
              source={icons.mail}
              style={{
                width: 25,
                height: 25,
              }}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.light.text}
            />
          </View>
          <View>
            <TextInput placeholder="Password" />
          </View>
        </View>
        <TouchableOpacity>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInForm;
