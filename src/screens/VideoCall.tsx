import { ThemedView } from '@/components/ThemedView';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { mediaDevices, RTCView } from 'react-native-webrtc';
import { ThemedText } from '@/components/ThemedText';
export const VideoCall = ({ route }: any) => {
  const { user } = route.params;
  const [localStream, setLocalStream] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  // Request camera/mic permissions
  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }
  };
  useEffect(() => {
    requestPermissions();

    // Get local stream (camera + mic)
    mediaDevices
      .getUserMedia({
        audio: true,
        video: {
          frameRate: 30,
          facingMode: 'user',
        },
      })
      .then(stream => {
        setLocalStream(stream);
      })
      .catch(err => {
        console.error('getUserMedia error:', err);
      });
  }, []);

  return (
    <ThemedView style={styles.container}>
      {/* Remote Video (Full Screen) */}
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/33676574/pexels-photo-33676574.jpeg',
        }} // remote video placeholder
        style={styles.remoteVideo}
      >
        {/* Header */}
        <ThemedView
          style={{
            ...styles.header,
          }}
        >
          <ThemedText type="title">{user.name || user.phone}</ThemedText>
          <ThemedText type="small">Ringing…</ThemedText>
        </ThemedView>

        {/* Local Video Preview */}
        <ThemedView style={styles.localVideoWrapper}>
          {/* Local video preview */}
          {localStream && (
            <RTCView
              streamURL={localStream.toURL()}
              style={styles.localVideo}
              objectFit="cover"
              mirror
            />
          )}
        </ThemedView>

        {/* Controls */}
        <ThemedView style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <IconSymbol name={'SwitchCamera'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setIsMuted(!isMuted)}
          >
            <IconSymbol name={isMuted ? 'MicOff' : 'Mic'} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.controlButton, styles.endCall]}>
            <IconSymbol name="Phone" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => setIsVideoOn(!isVideoOn)}
          >
            <IconSymbol name={isVideoOn ? 'VideoOff' : 'Video'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton}>
            <IconSymbol name="Volume2" />
          </TouchableOpacity>
        </ThemedView>
      </ImageBackground>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  remoteVideo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },

  localVideoWrapper: {
    position: 'absolute',
    top: 100,
    right: 16,
    width: 100,
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
  },
  localVideo: {
    width: '100%',
    height: '100%',
  },
  controls: {
    margin: 30,
    padding: 16,
    borderColor: 'gray',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  controlButton: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  endCall: {
    backgroundColor: 'red',
  },
});

export default VideoCall;
