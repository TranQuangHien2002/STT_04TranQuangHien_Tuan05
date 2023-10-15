import { useState } from 'react';
import { View, Text, Image, Pressable, SafeAreaView, StyleSheet } from 'react-native';


export default function ChooseColorProduct({ route, navigation }) {
  const { productDetail, productColorSelected, setProductColorSelected } = route.params;

  const [productDetailSelected, setProductDetailSelected] = useState({
    path: productColorSelected?.path,
  });

  const handleSelectColor = (color) => {
    setProductDetailSelected({
      ...productDetailSelected,
      path: color.path,
      name: color.name,
      code: color.code,
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rowContainer}>
        <View style={styles.leftColumn}>
          {productDetailSelected?.path ? (
            <Image
              source={productDetailSelected?.path}
              resizeMode='contain'
              style={styles.productImage}
            />
          ) : <></>}
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.productName}>
            Điện Thoại Vsmart Joy 3
            Hàng chính hãng
          </Text>
          {productDetailSelected?.name ? (
            <View style={styles.selectedColorContainer}>
              <Text style={styles.selectedColorLabel}>Màu: </Text>
              <Text style={styles.selectedColorName}>{productDetailSelected.name}</Text>
            </View>
          ) : <></>}
          {productDetailSelected?.name ? (
            <View style={styles.supplierText}>
              <Text style={styles.supplierText}>Cung cấp bởi </Text>
              <Text style={styles.supplierText}>{productDetail.supplier}</Text>
            </View>
          ) : <></>}
          {productDetailSelected?.name ? (
            <View>
              <Text style={styles.priceText}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "VND" }).format(productDetail.price)}
              </Text>
            </View>
          ) : <></>}
        </View>
      </View>
      <View style={styles.colorSelectionContainer}>
        <Text style={styles.chooseColorText}>Chọn một màu bên dưới: </Text>
        <View style={styles.colorSelection}>
          {productDetail?.colors?.map((color, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => { handleSelectColor(color) }}
              >
                <View style={[styles.colorOption, { backgroundColor: color.code }]} />
              </Pressable>
            );
          })}
        </View>
        <Pressable style={styles.doneButton} onPress={() => {
          setProductColorSelected(productDetailSelected);
          navigation.navigate("ProductDetail");
        }}>
          <Text style={styles.doneButtonText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
  },
  leftColumn: {
    flex: 1,
  },
  productImage: {
    width: 102,
    height: 132,
  },
  rightColumn: {
    flex: 2,
    paddingHorizontal: 15,
  },
  productName: {
    fontSize: 15,
    marginTop: 12,
    width: "80%",
    fontWeight: "500",
  },
  selectedColorText: {
    fontSize: 15,
  },
  supplierText: {
    fontSize: 15,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  colorSelectionContainer: {
    flexGrow: 1,
    padding: 20,
  },
  chooseColorText: {
    fontSize: 18,
    fontWeight: "500",
  },
  colorSelection: {
    alignItems: "center",
  },
  colorOption: {
    width: 80,
    height: 85,
    marginVertical: 7,
  },
  doneButton: {
    marginTop: "auto",
  },
  doneButtonText: {
    backgroundColor: "#4d6dc1",
    fontSize: 20,
    textAlign: "center",
    padding: 12,
    borderRadius: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  selectedColorContainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Centered vertically
    marginTop: 8, // Adjust as needed
  },
  selectedColorLabel: {
    fontSize: 15,
  },
  selectedColorName: {
    fontSize: 15,
    fontWeight: 'bold', // Example: Make the color name bold
    marginLeft: 4, // Add spacing between label and name
  },
});
