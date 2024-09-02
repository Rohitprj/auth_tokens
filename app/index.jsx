import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Monogram from "../assets/images/Monogram.png";
import Like from "../assets/images/Like";
import LocationCheck from "../assets/images/LocationCheck";
import ListOpt from "../assets/images/ListOpt";

const DropdownSectionList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [selectedItem1, setSelectedItem1] = useState(null);
  const [isDropdownVisible1, setDropdownVisible1] = useState(false);

  const [selectedItem2, setSelectedItem2] = useState(null);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const [selectedItem3, setSelectedItem3] = useState(null);
  const [isDropdownVisible3, setDropdownVisible3] = useState(false);

  const [selectedItem4, setSelectedItem4] = useState(null);
  const [isDropdownVisible4, setDropdownVisible4] = useState(false);

  const DATA = [
    {
      title: 1,
      data: [
        {
          name: "Chihuly Garden",
          image: Monogram,
          icon: <Like />,
          iconType: <LocationCheck />,
          iconExp: <ListOpt />,
        },
        {
          name: "Space Needle",
          image: Monogram,
          icon: <Like />,
          iconType: <LocationCheck />,
          iconExp: <ListOpt />,
        },
        {
          name: "Pike Place",
          image: Monogram,
          icon: <Like />,
          iconType: <LocationCheck />,
          iconExp: <ListOpt />,
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        setSelectedItem(item.name);
        setDropdownVisible(false);
      }}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View>{item.iconType}</View>
          <View>{item.icon}</View>
        </View>
        <View style={styles.customIcon}>{item.iconExp}</View>
      </View>
    </Pressable>
  );
  const renderItem1 = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        setSelectedItem1(item.name);
        setDropdownVisible1(false);
      }}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View>{item.iconType}</View>
          <View>{item.icon}</View>
        </View>
        <View style={styles.customIcon}>{item.iconExp}</View>
      </View>
    </Pressable>
  );
  const renderItem2 = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        setSelectedItem2(item.name);
        setDropdownVisible2(false);
      }}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View>{item.iconType}</View>
          <View>{item.icon}</View>
        </View>
        <View style={styles.customIcon}>{item.iconExp}</View>
      </View>
    </Pressable>
  );
  const renderItem3 = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        setSelectedItem3(item.name);
        setDropdownVisible3(false);
      }}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View>{item.iconType}</View>
          <View>{item.icon}</View>
        </View>
        <View style={styles.customIcon}>{item.iconExp}</View>
      </View>
    </Pressable>
  );
  const renderItem4 = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        setSelectedItem4(item.name);
        setDropdownVisible4(false);
      }}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View>{item.iconType}</View>
          <View>{item.icon}</View>
        </View>
        <View style={styles.customIcon}>{item.iconExp}</View>
      </View>
    </Pressable>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setDropdownVisible(!isDropdownVisible)}
        >
          <Text>
            {selectedItem ? (
              selectedItem
            ) : (
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#5A37E7" }}
              >
                Day 1{"  "}
                <Text
                  style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                >
                  3 Activities
                </Text>
              </Text>
            )}
          </Text>
        </Pressable>

        {isDropdownVisible && (
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem}
            // renderSectionHeader={renderSectionHeader}
            style={styles.dropdownList}
            scrollEnabled={false}
          />
        )}
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setDropdownVisible1(!isDropdownVisible1)}
        >
          <Text>
            {selectedItem1 ? (
              selectedItem1
            ) : (
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#5A37E7" }}
              >
                Day 2{"  "}
                <Text
                  style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                >
                  3 Activities
                </Text>
              </Text>
            )}
          </Text>
        </Pressable>

        {isDropdownVisible1 && (
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem1}
            // renderSectionHeader={renderSectionHeader}
            style={styles.dropdownList}
            scrollEnabled={false}
          />
        )}
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setDropdownVisible2(!isDropdownVisible2)}
        >
          <Text>
            {selectedItem2 ? (
              selectedItem2
            ) : (
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#5A37E7" }}
              >
                Day 3{"  "}
                <Text
                  style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                >
                  5 Activities
                </Text>
              </Text>
            )}
          </Text>
        </Pressable>

        {isDropdownVisible2 && (
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem2}
            // renderSectionHeader={renderSectionHeader}
            style={styles.dropdownList}
            scrollEnabled={false}
          />
        )}
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setDropdownVisible3(!isDropdownVisible3)}
        >
          <Text>
            {selectedItem3 ? (
              selectedItem3
            ) : (
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#5A37E7" }}
              >
                Day 4{"  "}
                <Text
                  style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                >
                  5 Activities
                </Text>
              </Text>
            )}
          </Text>
        </Pressable>

        {isDropdownVisible3 && (
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem3}
            // renderSectionHeader={renderSectionHeader}
            style={styles.dropdownList}
            scrollEnabled={false}
          />
        )}
      </View>
      <View style={styles.container}>
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setDropdownVisible4(!isDropdownVisible4)}
        >
          <Text>
            {selectedItem4 ? (
              selectedItem4
            ) : (
              <Text
                style={{ fontSize: 16, fontWeight: "600", color: "#5A37E7" }}
              >
                Day 5{"  "}
                <Text
                  style={{ fontSize: 16, fontWeight: "300", color: "black" }}
                >
                  5 Activities
                </Text>
              </Text>
            )}
          </Text>
        </Pressable>

        {isDropdownVisible4 && (
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem4}
            // renderSectionHeader={renderSectionHeader}
            style={styles.dropdownList}
            scrollEnabled={false}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
  },
  dropdownList: {
    // marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  itemIcon: {
    // marginLeft: 10,
  },
  customIcon: {
    // marginLeft: 10,
  },
});
export default DropdownSectionList;
