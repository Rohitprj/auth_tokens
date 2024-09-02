import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function index() {
  const [data, setData] = useState(null);
  const bearerTokenAuth = async () => {
    try {
      const token = "yourBearerToken";
      const response = await axios.get(
        "https://tcbackend.ddns.net/api/user/guest-token",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error with Bearer Token Auth:", error);
    }
  };
  useEffect(() => {
    bearerTokenAuth();
  }, []);
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
