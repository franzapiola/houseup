import * as React from 'react';
import { View, Modal, Image, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import { Text } from '@atoms';
import styles from './styles';
import { Colors } from '@globalStyles';

interface ImageItemWithViewerProps {
  imgUrl: string;
  label: string;
}

const ImageItemWithViewer: React.FC<ImageItemWithViewerProps> = ({
  imgUrl,
  label,
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.imgWrapper}>
          <Image source={{ uri: imgUrl }} style={styles.img} />
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true}>
        <ImageViewer
          renderIndicator={() => <></>}
          renderHeader={() => (
            <Text type="title" style={styles.viewerLabel}>
              {label}
            </Text>
          )}
          renderFooter={() => (
            <View style={styles.viewerFooterRow}>
              <TouchableOpacity style={styles.viewerOption}>
                <Text style={styles.viewerOptionsText}>Fijar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewerOption}>
                <Text style={styles.viewerOptionsText}>Borrar</Text>
              </TouchableOpacity>
            </View>
          )}
          backgroundColor={Colors.darkTranslucent}
          enableSwipeDown
          saveToLocalByLongPress={false}
          onCancel={() => setModalVisible(false)}
          imageUrls={[
            {
              url: imgUrl,
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default ImageItemWithViewer;
