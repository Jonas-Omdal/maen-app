import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { THEME } from "../../constants/theme";

const CustomTabBarIcon = ({ name, size, focused }) => {
    const activeColor = THEME.colors.primary;
    const inactiveColor = `${THEME.colors.primary}80`;

    const iconColor = focused ? activeColor : inactiveColor;

    return <Ionicons name={name} size={size} color={iconColor} />;
};


export default () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: THEME.background.card, borderTopColor: 'none' },
            headerStyle: { backgroundColor: THEME.background.card, elevation: 0, shadowOpacity: 0 },
            headerTitleStyle: {
                color: THEME.text.regular,
            },
        }}>
            <Tabs.Screen name="home" options={{
                headerTitle: "Home",
                tabBarIcon: ({ size, focused }) => (
                    <CustomTabBarIcon name="ios-home" size={size} focused={focused} />
                ),
            }} />

            <Tabs.Screen name="profile" options={{
                headerTitle: "Profile",
                tabBarIcon: ({ size, focused }) => (
                    <CustomTabBarIcon name="ios-person" size={size} focused={focused} />
                ),
            }} />
        </Tabs>
    )
}
