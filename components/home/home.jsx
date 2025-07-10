import React from 'react';
import { View } from 'react-native';
import ControlButtons from '../controlButtons/controlButtons';
import DisplayScreen from '../displayScreen/displayScreen';
import Playlist from '../playlist/playlist';
import Equalizer from '../equalizer/equalizer';

const Home = () => {
    return (
        <View>
            <DisplayScreen />
            <ControlButtons />
            <Equalizer />
            <Playlist />
        </View>
    )
};

export default Home;
