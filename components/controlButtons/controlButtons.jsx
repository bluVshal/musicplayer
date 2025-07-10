import React from 'react'
import { StyleSheet, Button, View } from 'react-native';

const ControlButtons = () => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.controlContainer}>
                <Button style={styles.controlButton} title="|◄" accessibilityLabel="Previous"></Button>
                <Button style={styles.controlButton} title="►" accessibilityLabel="Play"></Button>
                <Button style={styles.controlButton} title="||" accessibilityLabel="Pause"></Button>
                <Button style={styles.controlButton} title="■" accessibilityLabel="Stop"></Button>
                <Button style={styles.controlButton} title="►|" accessibilityLabel="Next"></Button>
            </View>
            <View style={styles.controlContainer}>
                <Button style={styles.controlButton} title="±" accessibilityLabel="Eject"></Button>
            </View>
        </View>
    )
};

export default ControlButtons;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    controlContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    controlButton: {
        color:"#841584"
    }
});