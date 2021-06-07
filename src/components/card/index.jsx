import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Image } from 'react-native-elements';

export default function Card(props) {
  return (
    <View style={props.data.id === 2 ? styles.mainCardView1 : props.data.id % 2 === 1 ? styles.mainCardView2 : styles.mainCardView3}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.subCardView}>
          <Image
            source={{ uri: props.data.avatar }}
            resizeMode='contain'
            style={{
              height: 90,
              width: 90,
              backgroundColor: props.data.id === 2 ? '': 'rgba(196,160,230,255)',
              opacity: props.data.id === 2 ? 1 : 0.8
            }}
          />
        </View>
        <View style={{ marginLeft: 12, width: '100%' }}>
          <Text
            style={{
              fontSize: 14,
              color: props.data.id === 2 ? "white" : "black",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textTransform: "capitalize",
            }}
          >
            {props.data.first_name + ' ' + props.data.last_name}
          </Text>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
              width: "85%",
            }}
          >
            <Text
              style={{
                color: props.data.id === 2 ? "white" : "grey",
                fontSize: 12,
              }}
            >
              {props.data.email}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 25,
          maxWidth: '100%',
          marginRight: '1rem',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {
          props.data.id === 2 ? (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icon
              name='phone'
              type='font-awesome'
              color='white'
            />
            <View style={{width: '10px'}}/>
            <Icon
              name='chatbox-outline'
              type='ionicon'
              color='white'
            />
            </View>
          ) : props.data.id === 5 ? (
            <View style={{backgroundColor: 'red', width: 10, height: 10, margin: 0, borderRadius: 10}} />

            ):(
            <View style={{backgroundColor: 'green', width: 10, height: 10, margin: 0, borderRadius: 10}} />
          )

        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardView1: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'rgba(196,160,230,255)'
  },
  mainCardView2: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'rgba(243,243,243,255)'
  },
  mainCardView3: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'white'
  },
  subCardView: {
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
});
