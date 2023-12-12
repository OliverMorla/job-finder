import {
  Text,
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
          source={icons.user}
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

const ScreenHeaderBtnWithText = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export { ScreenHeaderRightButtons, ScreenHeaderBtn, ScreenHeaderBtnWithText };
