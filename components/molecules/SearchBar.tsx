import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import style from '../../styles/common';

interface SearchBarProps {
    onSearch: (query: string) => void;
}


const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            onSearch(searchQuery);
        }
    };

    return (
        <View style={styles.searchBarContainer}>
            <TextInput
                placeholder="Search..."
                placeholderTextColor={style.content.card.backgroundColor}
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
            />
            <AntDesign
                name="search1"
                size={24}
                color={style.content.card.backgroundColor}
                style={styles.searchIcon}
                onPress={handleSearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',

    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        color: style.content.card.backgroundColor,
    },
    searchIcon: {
        marginLeft: 10,
    },
});

export default SearchBar