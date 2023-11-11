import {
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import icons from "../../constants/icons";

const ScreenHeaderBtn = ({
  iconUrl,
  onPress,
  dimensions,
}: {
  iconUrl: ImageSourcePropType;
  onPress: () => void;
  dimensions: {
    width: number;
    height: number;
  };
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      />
    </TouchableOpacity>
  );
};

const ScreenHeaderRightButtons = ({
  dimensions,
}: {
  dimensions: {
    width: number;
    height: number;
  };
}) => {
  return (
    <TouchableOpacity>
      <View className="flex flex-row gap-10">
        <Image
          source={icons.chatSquare}
          resizeMode="contain"
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
        />
        <Image
          source={icons.bell}
          resizeMode="contain"
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
        />
        <Image
          source={icons.menu}
          resizeMode="contain"
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export { ScreenHeaderRightButtons, ScreenHeaderBtn };
