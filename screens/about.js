import React from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import ReviewForm from './reviewForm';
import {globalStyles} from '../styles/global';
import { Formik } from 'formik';


export default function About(props) {
    return (
        <View>
            <Text>This is the about page</Text>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
                )}
            </Formik>
        </View>
    )
}
