import { MaterialIcons } from "@expo/vector-icons";
import {
    CameraCapturedPicture,
    CameraPictureOptions,
    CameraType,
    CameraView,
    FlashMode,
    useCameraPermissions
} from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    StyleSheet,
    View
} from "react-native";
import colors from "../../theme/colors";

const flashModes: FlashMode[] = [
  // Add type annotation to the array for clarity
  "off",
  "on",
  "auto",
  "torch",
];

type FlashIconName = "flash-off" | "flash-on" | "flash-auto" | "highlight"; // Include the torch icon name

const flashModeToIcon: Record<FlashMode, FlashIconName> = {
  off: "flash-off",
  on: "flash-on",
  auto: "flash-auto",
  torch: "highlight",
};

export default function PostUploadScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const [flashMode, setFlashMode] = useState<FlashMode>("off");
  const camera = useRef<CameraView>(null);
  const [picture, setPicture] = useState<CameraCapturedPicture>();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission]);

  //   take picture
  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };
    const res = await camera.current.takePictureAsync(options);
    setPicture(res);
  };

  const startRecording = async() => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options = {
      quality: "720p", // Choose one of '2160p', '1080p', '720p', '480p', or '288p'
      maxDuration: 60, // Max 60 seconds
      maxFileSize: 10 * 1024 * 1024, // Max 10 MB (in bytes)
      mute: false, // Include audio
    };
    setIsRecording(true)
    try {
        const result = await camera.current.recordAsync(options);
    } catch (err) {
        console.log(err);
    }

    setIsRecording(false)
    // console.log(result);
    
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  //   toggle front or back camera
  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const toggleFlashMode = () => {
    const currentIndex = flashModes.indexOf(flashMode);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlashMode(flashModes[nextIndex]); // Now, flashModes[nextIndex] will return 'off', 'on', etc., which are valid FlashMode types
  };

  console.log(flashMode);

  if (!permission) {
    return <ActivityIndicator />;
  }

  if (picture) {
    return (
      <View>
        <Image
          source={{ uri: picture.uri }}
          style={{ width: "100%", height: "100%" }}
        />
        <MaterialIcons
          onPress={() => setPicture(undefined)}
          name="close"
          size={35}
          color="white"
          style={{ position: "absolute", top: 50, left: 20 }}
        />
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <CameraView
        ref={camera}
        style={styles.camera}
        facing={facing}
        ratio="4:3"
        flash={flashMode}
        onCameraReady={() => setIsCameraReady(true)}
      />
      {/* <View style={styles.footer}>
                    <View/>
                    <Pressable style={styles.recordButton} onPress={takePicture}/>
                    <MaterialIcons name="flip-camera-android" size={24} color={"white"} onPress={toggleCameraFacing}/>
                </View> */}
      <View style={[styles.buttonContainer, { top: 25 }]}>
        <MaterialIcons
          name="close"
          color={colors.white}
          size={30}
        />
        <Pressable onPress={toggleFlashMode}>
          <MaterialIcons
            name={flashModeToIcon[flashMode]}
            color={colors.white}
            size={30}
          />
        </Pressable>
        <MaterialIcons
          name="settings"
          color={colors.white}
          size={30}
        />
      </View>

      <View style={[styles.buttonContainer, { bottom: 25 }]}>
        <MaterialIcons
          name="photo-library"
          color={colors.white}
          size={30}
        />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}
          >
            <View style={[styles.circle, {backgroundColor: isRecording ? colors.accent : colors.white}]} />
          </Pressable>
        )}
        <Pressable onPress={toggleCameraFacing}>
          <MaterialIcons
            name="flip-camera-android"
            color={colors.white}
            size={30}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  camera: {
    width: "100%",
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",

    position: "absolute",
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
});
