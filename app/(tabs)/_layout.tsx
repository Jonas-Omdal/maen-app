import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { DARKTHEME } from "../../constants/theme";

const CustomTabBarIcon = ({ name, size, focused }) => {
    const activeColor = DARKTHEME.colors.primary;
    const inactiveColor = `${DARKTHEME.colors.primary}99`;

    const iconColor = focused ? activeColor : inactiveColor;

    return <Ionicons name={name} size={size} color={iconColor} />;
};


export default () => {
    return (
        <Tabs screenOptions={{ tabBarShowLabel: false, tabBarStyle: { backgroundColor: DARKTHEME.colors.secondary } }}>
            <Tabs.Screen name="home" options={{
                tabBarIcon: ({ size, focused }) => (
                    <CustomTabBarIcon name="ios-home" size={size} focused={focused} />
                ),
            }} />

            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({ size, focused }) => (
                    <CustomTabBarIcon name="ios-person" size={size} focused={focused} />
                ),
            }} />
        </Tabs >
    )
}