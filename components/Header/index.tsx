import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import icons from "../../constants/icons";
import { useAuth } from "../../providers/auth-provider";

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
    <TouchableOpacity onPress={onPress}>
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

const ScreenHeaderBtnWithText = ({ onPress }: { onPress: () => void }) => {
  const { session } = useAuth();
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text>Hello, {session ? session.user.displayName : "Guest"}</Text>
    </TouchableOpacity>
  );
};

export { ScreenHeaderRightButtons, ScreenHeaderBtn, ScreenHeaderBtnWithText };
