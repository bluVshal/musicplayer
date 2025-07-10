import React from 'react';
import { View } from 'react-native';
import ControlButtons from '../controlButtons/controlButtons';
import DisplayEcran from '../displayEcran/displayEcran';
import Playlist from '../playlist/playlist';
import Equalizer from '../equalizer/equalizer';
import Equalizers from '../equalizer copy/equalizer';

const Home = () => {
    return (
        <View>
            <DisplayEcran />
            <ControlButtons />
            <Equalizer />
            <Playlist />
        </View>
    )
};

export default Home;
