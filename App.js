import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, FAB, Image } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import { Card } from './src/components'

const url = "https://reqres.in/api/users?per_page=12";

async function fetchData() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json()
    return data

  } catch (error) {
    
  }
}
export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(async() => {
    const data = await fetchData()
    setContacts(data)
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.AppBar}>
          <Button
            icon={<Icon name='bars' size={25} color='white' />}
            iconRight
            title=''
            type='clear'
          />
          <Text style={styles.title}>CONTACTS</Text>
        </View>
        <View style={styles.content}>
          {contacts?.data?.map((contact) => {
            return <Card data={contact} />;
          })}
        </View>
        <FAB
          title=''
          placement='right'
          size='large'
          color='#01caa8'
          icon={{
            name: "add",
            color: "white",
          }}
          style={{ position: 'absolute', top: '10', left: '10'}}
        />
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  AppBar: {
    backgroundColor: "#01caa8",
    height: "8vh",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: "1rem",
  },
  content: {
    flex: 1,
    maxHeight: '91vh',
    overflowY: 'scroll'
  },
  title: {
    marginHorizontal: "auto",
    color: "white",
    fontSize: "15px",
    fontFamily: "sans-serif",
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subCardView: {
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});
