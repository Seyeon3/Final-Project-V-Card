import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MapView, { Marker } from 'react-native-maps';

const ProfileCard = ({
  //titles
  name,
  bio,
  information,
  appointment,
  services,
  gallery,
  product,
  testimonial,
  blog,
  qrCode,
  businessHour,
  contactUs,
  locations,
  //images
  profilePicture,
  coverPicture,
  webdevPicture,
  designPicture,
  monitorPicture,
  headsetPicture,
  ryzenPicture,
  email,
  contactNumber,
  birthday,
  location,
  image1,
  image2,
  image3,
  image4,
  testImage1,
  testImage2,
  blogImage1,
  blogImage2,
  blogImage3,
  codeImage,
  //text
  quoteText,
  quoteText2,
  author1,
  author2,

  //form
  fullName,
  setFullName,
  emailAddres,
  setEmail,
  mobileNumber,
  setMobileNumber,
  message,
  setMessage,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isHourPickerVisible, setHourPickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle date selection
  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setDatePickerVisibility(false);
  };

  const handleHourConfirm = (hour) => {
    setSelectedTime(hour);
    setHourPickerVisibility(false);
  };

  const onAppoint = () => {
    Alert.alert('Congratulation!', 'You have been set an appointment', [
      { text: 'OK' },
    ]);
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
  };

  const renderPagination = () => (
    <Pagination
      dotsLength={4} // Total number of dots
      activeDotIndex={activeIndex}
      containerStyle={styles.paginationContainer}
      dotStyle={styles.dotStyle}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.8}
    />
  );

  const renderPaginations = () => (
    <Pagination
      dotsLength={3} // Total number of dots
      activeDotIndex={activeIndex}
      containerStyle={styles.productPagination}
      productDotStyles={styles.productDotStyles}
      inactiveDotOpacity={0.6}
      inactiveDotScale={0.8}
    />
  );
  const downloadQr = () => {
    Alert.alert('Downloaded!', 'Succesfully!', [{ text: 'OK' }]);
  };

  const businessHours = [
    { day: 'Monday', time: '7:30 AM - 3:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', time: '11:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '10:00 AM - 5:00 PM' },
    { day: 'Friday', time: '1:00 PM - 10:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ];
  const sendMessage = () => {
    Alert.alert('Thank you!', 'Your concern have been recieve!', [
      { text: 'OK' },
    ]);

    console.log('Full Name:', fullName);
    console.log('Email:', emailAddres);
    console.log('Mobile Number:', mobileNumber);
    console.log('Message:', message);
  };

  return (
    <View style={styles.container}>
      <Image source={coverPicture} style={styles.coverPicture} />
      <Image source={profilePicture} style={styles.profilePicture} />
      <View style={styles.rowContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.Ionicons}>
          <Ionicons name="logo-facebook" size={24} color="#4267B2" />
          <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
          <Ionicons name="logo-instagram" size={24} color="#E1306C" />
        </View>
      </View>
      <Text style={styles.bio}>{bio}</Text>
      {/* Information section Start */}
      <Text style={styles.information}>{information}</Text>
      <View style={styles.mailContainer}>
        <View style={styles.emailContainer}>
          <Ionicons name="mail" size={30} color="orange" />
          <Text style={styles.infoText}>
            Email: seanmanaog22@gmail.com {email}
          </Text>
        </View>
      </View>
      <View style={styles.callContainer}>
        <View style={styles.contactContainer}>
          <Ionicons name="call" size={30} color="green" />
          <Text style={styles.infoText}>
            Contact: 09611020471{contactNumber}
          </Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.bdayContainer}>
          <Ionicons name="calendar" size={30} color="blue" />
          <Text style={styles.infoText}>
            Birthday: October 02, 2002{birthday}
          </Text>
        </View>
      </View>
      <View style={styles.locateContainer}>
        <View style={styles.gpsContiner}>
          <Ionicons name="location" size={30} color="red" />
          <Text style={styles.infoText}>Location: Caloocan City{location}</Text>
        </View>
      </View>
      {/* Information section End */}

      {/* appointment section Start */}
      <Text style={styles.appointment}>{appointment}</Text>
      <View style={styles.appointmentContainer}>
        {/* Selected Date */}
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionLabel}>Selected Date:</Text>
          <Text style={styles.selectionValue}>
            {selectedDate ? selectedDate.toDateString() : 'No date selected'}
          </Text>
        </View>

        {/* Selected Hour */}
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionLabel}>Selected Hour:</Text>
          <Text style={styles.selectionValue}>
            {selectedTime
              ? selectedTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })
              : 'No hour selected'}
          </Text>
        </View>

        {/* Date Picker */}
        <TouchableOpacity
          onPress={() => setDatePickerVisibility(true)}
          style={styles.pickerButton}>
          <Text>Select Date</Text>
        </TouchableOpacity>

        {/* Hour Picker */}
        <TouchableOpacity
          onPress={() => setHourPickerVisibility(true)}
          style={styles.pickerButton}>
          <Text>Select Hour</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={onAppoint}
          style={[styles.button, styles.primaryButton]}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        {/* Date Time Pickers */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />
        <DateTimePickerModal
          isVisible={isHourPickerVisible}
          mode="time"
          onConfirm={handleHourConfirm}
          onCancel={() => setHourPickerVisibility(false)}
        />
      </View>
      {/* appointment section End */}

      {/* services section Start */}
      <Text style={styles.services}>{services}</Text>
      <View style={styles.webdevContainer}>
        <Image source={webdevPicture} style={styles.webdevPicture} />
        <Text style={styles.serviceText}>Website Designer</Text>
        <Text style={styles.captionText}>
          I specialize in creating beautiful and responsive websites tailored to
          your needs.
        </Text>
      </View>
      <View style={styles.photoContainer}>
        <Image source={designPicture} style={styles.designPicture} />
        <Text style={styles.serviceText}>Graphic Designer</Text>
        <Text style={styles.captionText}>
          I design stunning graphics and visuals to elevate your brand and
          captivate your audience.
        </Text>
      </View>
      {/* services section End */}

      {/* Gallery section Start */}
      <Text style={styles.gallery}>{gallery}</Text>
      <View style={styles.galleryContainer}>
        {/* create a carousel slide photo here*/}
        <Carousel
          data={[image1, image2, image3, image4]}
          renderItem={({ item }) => (
            <Image source={item} style={styles.imageGallery} />
          )}
          sliderWidth={400}
          itemWidth={300}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {renderPagination()}
      </View>
      {/* Gallery section End */}

      {/* Product section Start */}
      <Text style={styles.product}>{product}</Text>
      <View style={styles.productContainer}>
        <Carousel
          data={[
            {
              name: 'Xiaomi Mi Curved Monitor',
              price: '₱23,999.00',
              info: 'High-speed refresh rate for smooth action at lightning speeds',
              image: monitorPicture,
              link: 'https://pcx.com.ph/products/xiaomi-34-mi-curved-144hz-gaming-monitor?_pos=1&_sid=89c595318&_ss=r',
            },
            {
              name: 'PRO XGaming Headset',
              price: '₱5,995.00',
              info: 'High quality sound and noise cancellation features provide an immersive gaming experience.',
              image: headsetPicture,
              link: 'https://pcx.com.ph/products/logitech-g-pro-x-gaming-headset?_pos=1&_sid=4121df9ea&_ss=r',
            },

            {
              name: 'AMD Ryzen 5 5600G',
              price: '₱7,390.00',
              info: 'High quality speed of 3.6 GHz and can reach a max boost clock speed of 4.2 GHz.',
              image: ryzenPicture,
              link: 'https://pcx.com.ph/products/amd-ryzen-5-5600gt-desktop-processor-3-6-up-to-4-6ghz?_pos=3&_sid=1f71d6d39&_ss=r', 
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <View style={styles.productItem}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productInfo}>{item.info}</Text>
              </View>
            </TouchableOpacity>
          )}
          sliderWidth={400}
          itemWidth={300}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {renderPaginations()}
      </View>
      {/* Product section End */}

      {/* Testimonial section start */}
      <Text style={styles.testimonial}>{testimonial}</Text>
      <View style={styles.testimonialContainer}>
        <Image source={testImage1} style={styles.testimonialPic1} />
        <Text style={styles.quoteText}>{quoteText}</Text>
        <Text style={styles.author1}>{author1}</Text>
      </View>

      <View style={styles.testimonialContainers}>
        <Image source={testImage2} style={styles.testimonialPic2} />
        <Text style={styles.quoteText}>{quoteText2}</Text>
        <Text style={styles.author2}>{author2}</Text>
      </View>
      {/* Testimonial section End */}

      <Text style={styles.blog}>{blog}</Text>
      <View style={styles.blogContainer}>
        <Carousel
          data={[
            {
              name: 'Learn How To Photoshop',
              info: 'Learn about the latest trends and techniques in designing.',
              image: blogImage1,
            },
            {
              name: 'AI vs Human',
              info: 'Explore the capabilities, limitations, and ethical considerations surrounding AI and its impact on various aspects of society.',
              image: blogImage2,
            },
            {
              name: 'Technology',
              info: 'Stay updated with the latest advancements and innovations in technology.',
              image: blogImage3,
            },
          ]}
          renderItem={({ item }) => (
            <View style={styles.blogItem}>
              <Image source={item.image} style={styles.blogImage} />
              <Text style={styles.titleBlog}>{item.name}</Text>
              <Text style={styles.blogInfo}>{item.info}</Text>
            </View>
          )}
          sliderWidth={400}
          itemWidth={300}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {renderPaginations()}
      </View>
      {/* Blog section End */}

      {/* Qr Code section Start */}
      <Text style={styles.qrCode}>{qrCode}</Text>
      <View style={styles.qrContainer}>
        <Image source={codeImage} style={styles.codeImage} />
        <TouchableOpacity onPress={downloadQr} style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download QR Code</Text>
        </TouchableOpacity>
      </View>
      {/* Qr Code section End */}

      {/* Business Hour section Start */}
      <Text style={styles.businessHour}>{businessHour}</Text>
      <View style={styles.schedContainer}>
        {businessHours.map((schedule, index) => (
          <View key={index} style={styles.scheduleItem}>
            <Text style={styles.day}>{schedule.day}</Text>
            <Text style={styles.time}>{schedule.time}</Text>
          </View>
        ))}
      </View>
      {/* Business Hour section End */}

      {/* contact Us section Start */}
      <Text style={styles.contactUs}>{contactUs}</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Send Message"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.buttons}>
          <Text style={styles.textButton}>Send Message</Text>
        </TouchableOpacity>
      </View>
      {/* contact Us section End */}

      {/* location section start */}
      <Text style={styles.locations}>{locations}</Text>
      {/* Embedded Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 14.6656,
            longitude: 120.9842,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{ latitude: 14.6656, longitude: 120.9842 }}
            title="Bagaong Barrio, Caloocan City"
            description="Location: Bagaong Barrio, Caloocan City, Philippines"
          />
        </MapView>
      </View>
      {/* location section End */}

      {/* Copyright section Start */}
      <Text style={styles.footer}>
        &copy; {new Date().getFullYear()} Made by Sean Michael Manaog. All
        rights reserved.
      </Text>
      {/* Copyright section End */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  coverPicture: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    position: 'relative',
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
    top: 140,
    left: 20,
  },
  imageGallery: {
    width: 300,
    height: 250,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: 'skyblue',
    borderWidth: 2,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingTop: 60,
    bottom: 60,
    left: 130,
  },
  Ionicons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 24,
    marginRight: 10,
    color: '#000',
    justifyContent: 'space-between',
    right: 15,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    padding: 14,
    textAlign: 'justify',
    bottom: 25,
  },
  information: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 12,
  },

  appointment: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 12,
  },

  services: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 12,
  },

  gallery: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 240,
  },

  product: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 220,
  },

  testimonial: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 265,
  },

  blog: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 600,
  },

  qrCode: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 660,
  },

  businessHour: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 660,
    textAlign: 'center',
  },

  contactUs: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 660,
    textAlign: 'center',
  },

  locations: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 14,
    bottom: 660,
    textAlign: 'center',
  },

  mailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    bottom: 20,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    bottom: 20,
  },
  bdayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    bottom: 20,
  },
  gpsContiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    bottom: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
  },
  appointmentContainer: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    bottom: 20,
  },

  selectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  selectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  selectionValue: {
    fontSize: 16,
  },
  pickerButton: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '60%',
  },
  primaryButton: {
    backgroundColor: '#007bff',
    left: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  webdevContainer: {
    width: '48%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 25,
    bottom: 40,
    right: 100,
  },

  photoContainer: {
    width: '48%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 25,
    bottom: 246,
    left: 100,
  },
  serviceText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  captionText: {
    fontSize: 10,
    textAlign: 'center',
    top: 4,
  },

  webdevPicture: {
    width: '100%',
    height: 90,
    marginBottom: 5,
    resizeMode: 'cover',
    position: 'relative',
  },

  designPicture: {
    width: '100%',
    height: 90,
    marginBottom: 5,
    resizeMode: 'cover',
    position: 'relative',
  },

  galleryContainer: {
    width: '100%',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    bottom: 245,
  },

  productContainer: {
    width: '100%',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    bottom: 240,
  },

  productItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },

  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  productPrice: {
    fontSize: 16,
    color: 'green',
  },

  productInfo: {
    fontSize: 14,
    textAlign: 'center',
  },

  productPagination: {
    bottom: 10,
    alignSelf: 'center',
  },

  productDotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },

  testimonialContainer: {
    width: '48%',
    height: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 25,
    bottom: 295,
    right: 100,
  },
  testimonialContainers: {
    width: '48%',
    height: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 25,
    bottom: 620,
    left: 100,
  },
  testimonialPic1: {
    width: 70,
    height: 70,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#fff',
    left: 50,
  },

  testimonialPic2: {
    width: 70,
    height: 70,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#fff',
    left: 50,
  },
  quoteText: {
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    top: 20,
  },
  author1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'green',
    fontStyle: 'italic',
    textAlign: 'center',
    top: 57,
  },

  author2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'green',
    fontStyle: 'italic',
    textAlign: 'center',
    top: 70,
  },
  blogContainer: {
    width: '100%',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    bottom: 620,
  },

  blogItem: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  blogImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  titleBlog: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center',
  },
  blogInfo: {
    fontSize: 13,
    textAlign: 'center',
  },

  qrContainer: {
    width: '80%',
    height: 325,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 25,
    bottom: 680,
    alignItems: 'center',
  },
  codeImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  downloadButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  schedContainer: {
    width: '90%',
    padding: 10,
    marginTop: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    bottom: 688,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  day: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
  },

  formContainer: {
    width: '90%',
    height: 'auto',
    padding: 10,
    marginTop: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    bottom: 688,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageInput: {
    height: 80,
  },
  buttons: {
    backgroundColor: '#007bff',
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
  },
  mapContainer: {
    width: '90%',
    height: 300,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    marginTop: 10,
    bottom: 680,
  },

  map: {
    flex: 1,
  },

  footer: {
    fontSize: 12,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ProfileCard;
