import { View, TextInput, Button, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import React from 'react';




const ReviewForm = ({addTvshow}) => {
    return (
        <View >
            <Text>Please add a Review</Text>
            <Formik
                initialValues={{ title: '', detail:'', rating:'' }}
                onSubmit={values => {
                    console.log(values)
                    addTvshow(values)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('email')}
                        value={values.title}
                        placeholder='title'
                    />
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={handleChange('detail')}
                        onBlur={handleBlur('detail')}
                        value={values.detail}
                        placeholder='detail'
                    />
                    <TextInput
                        style={globalStyles.input}
                        onChangeText={handleChange('rating')}
                        onBlur={handleBlur('rating')}
                        value={values.rating}
                        placeholder='rating'
                        keyboardType='numeric'
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
