import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      },
    home: {
      textAlign: 'center',
      },
    homeText:{
      fontFamily:'Biggie',
      fontSize: 15,
      padding:5,
      },
    image:{
      height:20,
      width:100,
      },
    ratingView:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      },
  });


  export const images = {
    ratings:{
      '1': require('../assets/rating1.png'),
      '2': require('../assets/rating2.jpg'),
      '3': require('../assets/rating3.png'),
      '4': require('../assets/rating4.png'),
      '4': require('../assets/rating5.png'),
    }
  }