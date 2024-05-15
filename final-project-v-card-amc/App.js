import React from 'react';
import { StyleSheet, View, ScrollView,} from 'react-native';
import ProfileCard from './components/ProfileCard';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <ProfileCard
          name="Sean Michael Manaog"
          bio="''I am an 3rd year BSIT student, My hobbies is about playing guitar and web development. My favorite quote is: 'The only way to do great work is to love what you do''."
          //titles
          information="INFORMATION"
          appointment="Make an Appointment"
          services="OUR SERVICES"
          gallery="GALLERY"
          product="PRODUCT"
          testimonial="TESTIMONIAL"
          blog="BLOG"
          qrCode="SCAN QR CODE"
          businessHour="BUSINESS HOURS"
          contactUs="CONTACT US"
          locations= "MY LOCATION"

          //images
          image1={require('./assets/img1.jpg')}
          image2={require('./assets/img2.jpg')}
          image3={require('./assets/img3.jpg')}
          image4={require('./assets/img4.jpg')}
          testImage1={require('./assets/whitman.jpg')}
          testImage2={require('./assets/marcus.png')}
          ryzenPicture={require('./assets/ryzen.jpg')}
          headsetPicture={require('./assets/headset.jpg')}
          monitorPicture={require('./assets/monitor.jpg')}
          profilePicture={require('./assets/profile-pic.jpg')}
          coverPicture={require('./assets/cover-pic.jpg')}
          webdevPicture={require('./assets/web-dev.png')}
          designPicture={require('./assets/graphic.png')}
          blogImage1 ={require('./assets/blog1.jpeg')}
          blogImage2 ={require('./assets/blog2.jpg')}
          blogImage3 ={require('./assets/blog3.jpg')}
          codeImage={require('./assets/qrCode.png')}
          //Text
          quoteText="''Keep your face always toward the sunshine, and shadows will fall behind you''."
          quoteText2="''The happiness of your life depends on the quality of your thoughts''."
          author1="Walt Whitman"
          author2="Marcus Aurelius"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

export default App;
