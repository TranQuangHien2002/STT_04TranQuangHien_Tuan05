import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { StyleSheet } from 'react-native';

export default function ProductDetail({ navigation, route }) {
    const [productDetail, setProductDetail] = useState({
        name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
        star: 5,
        price: 1790000,
        priceUnit: "đ",
        review: 828,
        supplier: "Tiki Tradding",
        colors: [
            {
                name: "Xanh nhạt",
                code: "#C5F1FB",
                path: require("../../../assets/vs_blue.png"),
            },
            {
                name: "Đỏ",
                code: "#F30D0D",
                path: require("../../../assets/vs_red.png"),
            },
            {
                name: "Đen",
                code: "#000000",
                path: require("../../../assets/vs_black.png"),
            },
            {
                name: "Xanh đậm",
                code: "#234896",
                path: require("../../../assets/vs_silver.png"),
            },
        ],
    });
    const [productColorSelected, setProductColorSelected] = useState(() => productDetail?.colors?.[0]);
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
          },
          contentContainer: {
            flex: 1,
            padding: 30,
          },
        imageContainer: {
            flex: 1,
            paddingVertical: 15,
            paddingHorizontal: 25,
        },
        image: {
            width: "100%",
            height: "100%",
        },
        productName: {
            fontSize: 15,
            fontWeight: "400",
        },
        starContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
        },
        star: {
            fontSize: 24,
        },
        reviewText: {
            fontSize: 15,
        },
        priceContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
        },
        price: {
            fontSize: 18,
            fontWeight: "bold",
        },
        originalPrice: {
            fontSize: 16,
            fontWeight: "bold",
            textDecorationLine: "line-through",
            color: "#999",
            marginLeft: 10,
        },
        discountText: {
            color: "#fa0000",
            fontSize: 12,
            fontWeight: "700",
            marginRight: 10,
        },
        askImage: {
            width: 20,
            height: 20,
        },
        chooseColorButton: {
            borderRadius: 12,
            justifyContent: "center",
            borderWidth: 1,
            marginTop: 20,
            position: "relative",
            paddingHorizontal: 20,
        },
        chooseColorButtonText: {
            textAlign: "center",
            paddingVertical: 8,
            fontSize: 15,
            fontWeight: "500",
        },
        rightArrow: {
            position: "absolute",
            right: 0,
            top: "50%",
            transform: [{ translateY: -12 }],
            paddingHorizontal: 10,
        },
        buyButton: {
            backgroundColor: "#EE0A0A",
            marginTop: "auto",
            borderRadius: 12,
        },
        buyButtonText: {
            textAlign: "center",
            color: "#fff",
            padding: 12,
            fontSize: 20,
            fontWeight: "500",
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    {productColorSelected?.path ? (
                        <Image
                            source={productColorSelected?.path}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    ) : (
                        <></>
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.productName}>{productDetail?.name}</Text>
                    <View style={styles.starContainer}>
                        <View style={{ flexDirection: "row" }}>
                            {Array(5)
                                .fill(0)
                                .map((item, index) => {
                                    if (index < productDetail?.star) {
                                        return <Entypo name="star" key={index} style={styles.star} color="#E0E41A" />;
                                    }
                                    return <Entypo name="star" key={index} style={styles.star} color="#CCC" />;
                                })}
                        </View>
                        <Text style={styles.reviewText}>(Xem {productDetail?.review} đánh giá)</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd" }).format(productDetail.price)}
                        </Text>
                        <Text style={styles.originalPrice}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd" }).format(productDetail.price)}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
                        <Text style={styles.discountText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                        <Image
                            source={require("../../../assets/Ask.png")}
                            style={styles.askImage}
                            resizeMode='contain'
                        />
                    </View>
                    <Pressable
                        style={styles.chooseColorButton}
                        onPress={() => navigation.navigate("ChooseColorProduct", { productDetail, productColorSelected, setProductColorSelected })}
                    >
                        <Text style={styles.chooseColorButtonText}>{productDetail?.colors?.length} MÀU - CHỌN MÀU</Text>
                        <FontAwesome name="angle-right" size={24} color="black" style={styles.rightArrow} />
                    </Pressable>
                    <Pressable style={styles.buyButton}>
                        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}
