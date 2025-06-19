import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: 'center',
          alignItems: 'center',
          // paddingVertical: 10,
          // paddingHorizontal: 5,
          // borderRadius: 10,
        },

        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#7F8C8D',
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderTopWidth: 0,
          borderRadius: 40,
          position: 'absolute',
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0d23',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ color, fontSize: focused ? 24 : 20 }}>
              {focused ? '🏠' : '🏡 '}
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ color, fontSize: focused ? 24 : 20 }}>
              {focused ? '🔍' : '🔎 '}
            </Text>
            // <Text style={{ color }}>🔍</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ color, fontSize: focused ? 24 : 20 }}>
              {focused ? '💾' : '💾   '}
            </Text>
            // <Text style={{ color }}>💾</Text>
          ),
        }}
      />



      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Text style={{ color, fontSize: focused ? 24 : 20 }}>
              {focused ? '👤' : '👤 '}
            </Text>),
        }}
      />
    </Tabs>

  )
}

const styles = StyleSheet.create({})