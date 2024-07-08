import { View, Text, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function HomeScreen() {
  const router = useRouter();

  return (
      <StyledView className="flex-1 justify-center items-center mt-8">
        <StyledText className="text-2xl font-bold text-gray-800 text-center">
          Home Screen hello my
        </StyledText>
      </StyledView>
  );
}