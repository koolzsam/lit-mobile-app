import React from 'react';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedProps,
  runOnJS,
} from 'react-native-reanimated';
import { SliderTrack } from './style';

const ATextInput = Animated.createAnimatedComponent(TextInput);
const WIDTH = Dimensions.get('window').width - 40;
const KONBSIZE = 20;
const MAXWIDTH = WIDTH - KONBSIZE / 2 + 6;

const RangeSlider = ({ min = 0, max = 100, steps = 1, onValueChange }) => {

  const x = useSharedValue(0);
  const x2 = useSharedValue(MAXWIDTH);
  const sc = useSharedValue(1);
  const sc2 = useSharedValue(1);

  const gestureHandler1 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value =
        ctx.startX + event.translationX < 0
          ? 0
          : ctx.startX + event.translationX > x2.value
            ? x2.value
            : ctx.startX + event.translationX;
      sc.value = 1.3;
    },
    onEnd: () => {
      sc.value = 1;
      runOnJS(onValueChange)({
        min: Math.round((min + (x.value / MAXWIDTH) * (max - min)) / steps) * steps,
        max: Math.round((min + (x2.value / MAXWIDTH) * (max - min)) / steps) * steps,
      });
    },
  });

  const gestureHandler2 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x2.value;
    },
    onActive: (event, ctx) => {
      x2.value =
        ctx.startX + event.translationX < x.value
          ? x.value
          : ctx.startX + event.translationX > MAXWIDTH
            ? MAXWIDTH
            : ctx.startX + event.translationX;
      sc2.value = 1.3;
    },
    onEnd: () => {
      sc2.value = 1;
      runOnJS(onValueChange)({
        min: Math.round((min + (x.value / MAXWIDTH) * (max - min)) / steps) * steps,
        max: Math.round((min + (x2.value / MAXWIDTH) * (max - min)) / steps) * steps,
      });
    },
  });

  const styleLine = useAnimatedStyle(() => {
    return {
      backgroundColor: '#025A63',
      height: 4,
      marginTop: -3,
      borderRadius: 3,
      width: x2.value - x.value,
      transform: [{ translateX: x.value }],
    };
  });
  const knobStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          scale: sc.value,
        },
        { rotate: '45deg' },
      ],
    };
  });
  const knobStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x2.value,
        },
        {
          scale: sc2.value,
        },
        { rotate: '45deg' },
      ],
    };
  });

  const animatedLabel1 = useAnimatedProps(() => {
    return {
      text: `${'\u20B9'} ${Math.round((min + (x.value / MAXWIDTH) * (max - min)) / steps) * steps}`,
    };
  });
  const animatedLabel2 = useAnimatedProps(() => {
    return {
      text: `${'\u20B9'} ${Math.round((min + (x2.value / MAXWIDTH) * (max - min)) / steps) * steps}`,
    };
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.labelsContainer}>
          <ATextInput
            defaultValue={'0'}
            editable={false}
            style={styles.label}
            animatedProps={animatedLabel1}
          />
          <ATextInput
            defaultValue={'0'}
            editable={false}
            style={styles.label}
            animatedProps={animatedLabel2}
          />
        </View>
        <SliderTrack />
        <Animated.View style={styleLine} />
        <View>
          <PanGestureHandler onGestureEvent={gestureHandler1}>
            <Animated.View style={[styles.knob, knobStyle1]} />
          </PanGestureHandler>
          <PanGestureHandler onGestureEvent={gestureHandler2}>
            <Animated.View style={[styles.knob, knobStyle2]} />
          </PanGestureHandler>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    // paddingVertical: 20,
  },
  header: {
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderColor: '#cccdb2',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  labelsContainer: {
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  label: {
    color: '#333',
    fontSize: 24,
  },

  knob: {
    position: 'absolute',
    height: 15,
    width: 15,
    borderRadius: 7,
    borderColor: '#025A63',
    borderWidth: 2,
    backgroundColor: '#025A63',
    marginTop: -9,
    marginLeft: -8,
  },
  currentValue: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
});
export default RangeSlider;