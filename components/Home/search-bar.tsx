import { View, TouchableOpacity, TextInput, Image } from "react-native";
import icons from "../../constants/icons";

const SearchBar = () => {
  return (
    <View>
      <View className="relative">
        <Image
          source={icons.search}
          style={{
            width: 25,
            height: 25,
          }}
          className="absolute z-10 top-3 left-2"
        />
        <TextInput
          onChange={() => {}}
          placeholder="Job title, keywords, or company"
          placeholderTextColor={"gray"}
          className="w-full p-4 pl-8 bg-white rounded-lg shadow-md text-black"
        />
      </View>
      <View className="relative">
        <Image
          source={icons.pin}
          style={{
            width: 25,
            height: 25,
          }}
          className="absolute z-10 top-4 left-2"
        />
        <TextInput
          onChange={() => {}}
          placeholder="New York, USA"
          placeholderTextColor={"gray"}
          className="w-full p-4 pl-8 bg-white rounded-lg shadow-md text-black mt-1"
        />
      </View>
    </View>
  );
};

export default SearchBar;
