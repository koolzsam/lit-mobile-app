import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { styled } from 'nativewind';

const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledView = styled(View);
const StyledPressable = styled(Pressable);
const StyledAnimatedView = styled(Animated.View);

export const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const {
    handleSubmit,
    formState: { errors: errorData },
    setValue,
    register,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginUser = (data) => {
    console.log(data);
    props.onSubmit(data);
    // An API Call
  };

  const onPress = () => {
    // redirect to sign-up site in browser
    console.log("Redirected");
  }

  const skipLogin = () => {
    console.log("Skipping Login");
    props.onSkip();
  }

  const onError = (errors) => {
    if (errors.email) {
      console.log("Entered in on Error");
      emailInputRef.current.focus();
    } else if (errors.password) {
      passwordInputRef.current.focus();
    }
  };
  useEffect(() => {
    if (errorData.email) {
      emailInputRef.current.focus();
    } else if (errorData.password) {
      passwordInputRef.current.focus();
    }
  }, [errorData.email?.message, errorData.password?.message]);

  return (
    <StyledView className="flex-1 items-center bg-white relative">
      <StyledAnimatedView entering={FadeInDown} className="flex-1 items-center justify-center">
        <Text style={{ fontWeight: "700", fontSize: 24, textAlign: "center" }}>Welcome Back!</Text>
        <Text style={{ fontWeight: "500", fontSize: 16, textAlign: "center", color: "gray", paddingTop: 12 }}>Please sign in to your account</Text>
      </StyledAnimatedView>
      <Animated.View entering={FadeIn} style={styles.formWrapper}>
        <StyledTextInput className="px-2 py-3 rounded-lg bg-transparent my-1 mx-4 border-2 border-gray-200"
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder='email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCompleteType='email'
          onChangeText={(text) => setValue("email", text)}
          returnKeyType='next'
          onSubmitEditing={() => passwordInputRef.current.focus()}
          ref={emailInputRef}
          autoFocus
        />
        <StyledTextInput className="px-2 py-3 rounded-lg bg-transparent my-1 mx-4 border-2 border-gray-200"
          placeholder='password'
          {...register("password", {
            minLength: { value: 8, message: "Password should have minimum 8 characters" },
            maxLength: { value: 15, message: "Password should have maximum 8 characters" },
          })}
          onChangeText={(text) => setValue("password", text)}
          secureTextEntry
          keyboardType='visible-password'
          returnKeyType='go'
          ref={passwordInputRef}
          onSubmitEditing={handleSubmit(loginUser, onError)}
        />
        <StyledView className="flex flex-row justify-end items-center">
          <StyledPressable className="flex items-end p-1 mr-4 mt-2 rounded-md active:opacity-75" onPress={() => null}>
            <StyledText className="font-medium text-gray-500">Forgot password?</StyledText>
          </StyledPressable>
        </StyledView>
      </Animated.View>
      <Animated.View entering={FadeInDown} style={styles.buttonsWrapper}>
        <Pressable onPress={handleSubmit(loginUser)} style={({ pressed }) => [styles.primaryButtonStyle, pressed ? styles.pressedPrimaryButtonStyle : {}]}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </Pressable>
        <Pressable onPress={onPress} style={({ pressed }) => [styles.secondaryButtonStyle, pressed ? styles.pressedSecondaryButtonStyle : {}]}>
          <Text style={styles.secondaryButtonText}>Don't have an account? Sign up</Text>
        </Pressable>
        <StyledPressable onPress={skipLogin} className="flex items-center p-1 mr-4 -mt-4 active:opacity-75">
          <StyledText className="font-medium text-lg text-gray-400">Continue without an account</StyledText>
        </StyledPressable>
      </Animated.View>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  formWrapper: { flex: 1, width: Dimensions.get("screen").width, paddingHorizontal: 16, justifyContent: "center" },
  buttonsWrapper: { flex: 1, width: "100%", justifyContent: "flex-end", paddingHorizontal: 16, paddingBottom: 16 },
  primaryButtonStyle: {
    paddingHorizontal: 8,
    backgroundColor: "#6569A5",
    margin: 16,
    minHeight: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  pressedPrimaryButtonStyle: {
    backgroundColor: "#3d3f68",
  },
  secondaryButtonStyle: {
    paddingHorizontal: 8,
    backgroundColor: "white",
    margin: 16,
    minHeight: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  pressedSecondaryButtonStyle: {
    backgroundColor: "#e6e6f0",
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6569A5",
  }
});
