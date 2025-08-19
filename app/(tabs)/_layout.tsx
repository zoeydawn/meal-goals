import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, Pressable } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useAddFoodModalStore } from '@/store/useAddFoodModalStore'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { setShowModal, showModal } = useAddFoodModalStore()
  const activeColor = Colors[colorScheme ?? 'light'].tint

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add food',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="plus"
              color={showModal ? activeColor : color}
            />
          ),
          tabBarButton: (props) => (
            <Pressable
              style={props.style}
              accessibilityState={props.accessibilityState}
              onPress={() => setShowModal(true)}
            >
              {props.children}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: 'Goals',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="star.fill" color={color} />
          ),
        }}
      />{' '}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
