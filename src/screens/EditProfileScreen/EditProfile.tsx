import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import user from "../../assets/data/user.json";
import React from "react";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import { useForm, Controller, Control } from "react-hook-form";
import { IUser } from "../../types/models";

type EditableUserField = "name" | "username" | "bio" | "website"

type EditableUser = Pick<IUser,EditableUserField >

interface CustomInput {
  control: Control<EditableUser, object>;
  name: EditableUserField;
  label: string;
  mutiline?: boolean;
  rules?: object
}

const CustomInput = ({
  label,
  name,
  control,
  mutiline = false,
  rules = {}
}: CustomInput) => (
    <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {  
       return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={{flex: 1}}>
            <TextInput value={value} onChangeText={onChange} onBlur={onBlur} placeholder={label} style={[styles.input, {borderColor: error ? colors.accent : colors.black}]} multiline />
            {error && <Text style={{color: colors.accent}}>{error.message || "Error"}</Text>}
        </View>
      </View>
    )
    }}
  />
)

const EditProfile = () => {
  const { control, handleSubmit} = useForm<EditableUser>({
    defaultValues: {
        name: user.name,
        username: user.username,
        website: user.website,
        bio: user.bio
    }
  });

  // Onsubmit
  const onSubmit = (data: EditableUser) => {
    console.log("Submit", data);
  };
  return (
    <View style={styles.page}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <Text style={styles.textButton}>Edit profile photo</Text>
      <CustomInput name="name" control={control} rules={{required: "Name is required"}} label="Name" />
      <CustomInput name="username" control={control} rules={{required: "Username is required"}} label="Username" />
      <CustomInput name="website" control={control} rules={{required: "Website is required"}} label="Website" />
      <CustomInput name="bio" control={control} rules={{required: "Bio is required", maxLength: {value:200, message: "Bio should be less than 200"}}} label="Bio" mutiline />
      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    alignItems: "center",
  },
  avatar: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    alignSelf: "stretch",
  },
  label: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
    color: colors.black,
  },
});

export default EditProfile;
