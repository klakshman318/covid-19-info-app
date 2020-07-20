import PropTypes from 'prop-types';
import React from 'react';
import {Platform, StyleSheet, View, Animated, Easing, TouchableWithoutFeedback} from 'react-native';

const radius = 10;
const isWeb = Platform.OS === 'web';
const useNativeDriver = !isWeb;

let baseContainerStyles = {};

if(isWeb) {
    baseContainerStyles = {
        cursor: 'pointer',
        userSelect: 'none'
    };
}

class Ripple extends React.PureComponent {

    constructor(props) {
        super(props);
        this.unique = 0;
        this.mounted = false;
        this.state = {
            width: 0,
            height: 0,
            ripples: []
        };
    }

    componentDidMount() {
        this.mounted = true;
        if (this.props.customRef) {
            this.props.customRef(this);
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    onLayout = (event) => {
        let {width, height} = event.nativeEvent.layout;
        let {onLayout} = this.props;

        if ('function' === typeof onLayout) {
            onLayout(event);
        }

        this.setState({width, height});
    }

    onPress = (event) => {
        if(this.props.disabled) {
            return;
        }
        let {ripples} = this.state;
        let {onPress, rippleSequential, isPicker} = this.props;

        let {nativeEvent} = event;

        if (!rippleSequential || !ripples.length) {
            if ('function' === typeof onPress) {
                if(isWeb && isPicker) {
                    onPress(event, nativeEvent);
                } else {
                    requestAnimationFrame(() => onPress(event, nativeEvent));
                }
                
            }
            this.startRipple(event);
        }
    }

    onLongPress = (event) => {
        let {onLongPress} = this.props;

        if ('function' === typeof onLongPress) {
            requestAnimationFrame(() => onLongPress(event));
        }

        this.startRipple(event);
    }

    onPressIn = (event) => {
        let {onPressIn} = this.props;

        if ('function' === typeof onPressIn) {
            onPressIn(event);
        }
    }

    onPressOut = (event) => {
        let {onPressOut} = this.props;

        if ('function' === typeof onPressOut) {
            onPressOut(event);
        }
    }

    onAnimationEnd = () => {
        if (this.mounted) {
            this.setState(({ripples}) => ({ripples: ripples.slice(1)}));
        }
    }

    startRipple = (event) => {
        let {width, height} = this.state;
        let {rippleDuration, rippleCentered, rippleSize, onRippleAnimation} = this.props;

        let w2 = 0.5 * width;
        let h2 = 0.5 * height;

        let {locationX, locationY} = rippleCentered
            ? {
                locationX: w2,
                locationY: h2
            }
            : event.nativeEvent;

        let offsetX = Math.abs(w2 - locationX);
        let offsetY = Math.abs(h2 - locationY);

        let R = rippleSize > 0
            ? 0.5 * rippleSize
            : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

        let ripple = {
            unique: this.unique++,
            progress: new Animated.Value(0),
            locationX,
            locationY,
            R
        };

        let animation = Animated.timing(ripple.progress, {
            toValue: 1,
            easing: Easing.out(Easing.ease),
            duration: rippleDuration,
            useNativeDriver
        });

        onRippleAnimation(animation, this.onAnimationEnd);

        this.setState(({ripples}) => ({ripples: ripples.concat(ripple)}));
    }

    renderRipple = ({unique, progress, locationX, locationY, R}) => {
        let {rippleColor, rippleOpacity, rippleFades} = this.props;

        let rippleStyle = {
            top: locationY - radius,
            left: locationX - radius,
            backgroundColor: rippleColor,

            transform: [
                {
                    scale: progress.interpolate({
                        inputRange: [
                            0, 1
                        ],
                        outputRange: [
                            0.5 / radius,
                            R / radius
                        ]
                    })
                }
            ],

            opacity: rippleFades
                ? progress.interpolate({
                    inputRange: [
                        0, 1
                    ],
                    outputRange: [rippleOpacity, 0]
                })
                : rippleOpacity
        };

        return (<Animated.View style={[styles.ripple, rippleStyle]} key={unique}/>);
    }

    render() {
        let {ripples} = this.state;
        let {onPress, onPressIn, onPressOut, onLongPress, onLayout} = this;
        let {
            delayLongPress,
            delayPressIn,
            delayPressOut,
            disabled,
            hitSlop,
            pressRetentionOffset,
            children,
            rippleContainerBorderRadius,
            testID,
            nativeID,
            accessible,
            accessibilityLabel,
            onLayout: __ignored__,
            ...props
        } = this.props;

        let touchableProps = {
            delayLongPress,
            delayPressIn,
            delayPressOut,
            disabled,
            hitSlop,
            pressRetentionOffset,
            onPress,
            onPressIn,
            testID,
            nativeID,
            accessible,
            accessibilityLabel,
            onPressOut,
            onLongPress: props.onLongPress ? onLongPress : undefined,
            onLayout
        };

        let containerStyle = {
            borderRadius: rippleContainerBorderRadius
        };

        return (
            <TouchableWithoutFeedback {...touchableProps}>
                <Animated.View {...props} style={[props.style, baseContainerStyles]} pointerEvents='box-only'>
                    {children}
                    <View style={[styles.container, containerStyle]}>
                        {ripples.map(this.renderRipple)}
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        overflow: 'hidden'
    },

    ripple: {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        overflow: 'hidden',
        position: 'absolute'
    }
});

Ripple.defaultProps = {
    ...TouchableWithoutFeedback.defaultProps,
    rippleColor: 'rgb(0, 0, 0)',
    rippleOpacity: 0.30,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,
    onRippleAnimation: (animation, callback) => animation.start(callback)
};

Ripple.propTypes = {
    ...Animated.View.propTypes,
    ...TouchableWithoutFeedback.propTypes,
    rippleColor: PropTypes.string,
    rippleOpacity: PropTypes.number,
    rippleDuration: PropTypes.number,
    rippleSize: PropTypes.number,
    rippleContainerBorderRadius: PropTypes.number,
    rippleCentered: PropTypes.bool,
    rippleSequential: PropTypes.bool,
    rippleFades: PropTypes.bool,
    disabled: PropTypes.bool,
    onRippleAnimation: PropTypes.func
};

export default Ripple;

export {
    styles,
    radius
};
