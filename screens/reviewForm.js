import { View, TextInput, Button, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik, validateYupSchema} from 'formik';
import React from 'react';
import * as yup from 'yup';


//creating a validation for the form using yup
const formValidtaion = yup.object({
    title: yup.string().required().min(4),
    detail: yup.string().required().min(10),
    rating: yup.string().required().test('is-num-1-5', 'rating must be between 1 to 5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})


const ReviewForm = ({addTvshow}) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
                <Text>Please add a Review</Text>
                <Formik
                    initialValues={{ title: '', detail:'', rating:'' }}
                    validationSchema = {formValidtaion}
                    onSubmit={values => {
                        console.log(values)
                        addTvshow(values)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('email')}
                            value={values.title}
                            placeholder='title'
                        />
                        <Text>{touched.title && errors.title}</Text>
                        <TextInput
                            style={globalStyles.input}
                            onChangeText={handleChange('detail')}
                            onBlur={handleBlur('detail')}
                            value={values.detail}
                            placeholder='detail'
                        />
                        <Text>{touched.detail && errors.detail}</Text>
                        <TextInput
                            style={globalStyles.input}
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                            placeholder='rating must be from 1-5'
                            keyboardType='numeric'
                        />
                        <Text>{touched.rating && errors.rating}</Text>
                        <Button onPress={handleSubmit} title="Submit" color='maroon' />
                    </View>
                    )}
                </Formik>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ReviewForm
