import react from 'react';
import {View, Image, Text, Button, Linking, ScrollView} from 'react-native';

const About = () => {
  const url ='https://www.instagram.com/_frhnzki/'
  Linking.openURL(url);
}

const Canva = () => {
  const url =''
  Linking.openURL(url);
}


const Figma = () => {
  const url ='https://dribbble.com/shots/21338293-Landing-Page-Gadgetin'
  Linking.openURL(url)
}

const Mobile = () => {
  const url ='https://dribbble.com/shots/21524363-Movie-App-Movie-kers'
  Linking.openURL(url)
}


const App = () => {
  return(
    <ScrollView>
    <View style={{backgroundColor:'#f1f1f1', flex:1}}>
      <View style={{alignItems:'center', paddingTop:50}}>
      <Image style={{width:140, height:140, borderRadius:15}} source={require('./assets/owow.jpg')}/>
      </View>
      <Text style={{paddingTop:'20px', fontWeight:'bold', fontSize:40,        textAlign:'center', fontFamily:'poppins'}}>Farhan Zaki N</Text>
      <Text style={{paddingLeft:30, paddingRight:30, paddingTop:5, textAlign:'center', fontFamily:'poppins', fontSize:13, color:'rgba(30,30,30,0.40)'}}>
      Hello everyone, I'm Farhan Zaki, a student from SMK Telkom Purwokerto majoring in RPL, I enjoy studying at SMK Telkom Purwokerto
      </Text>
      <View style={{paddingLeft:40, paddingRight:40, paddingTop:15}}>
      <Button title='About me' color='#610C9F' onPress={About}/>
      </View>
      <Text style={{paddingTop:60, fontFamily:'Poppins', fontWeight:'bold', textAlign:'center', fontSize:20}}>Recent Portofolio
      </Text>

      <View style={{alignItems:'center', paddingTop:15, }}>
      <Image style={{width:260, height:150, borderRadius:5}} source={require('./assets/canva.png')}/>
      </View>
      <Text style={{paddingTop:10, textAlign:'center', fontFamily:'poppins', fontWeight:'bold', fontSize:15}}>
      Canva Template - Warung Sila
      </Text>
      <Text style={{textAlign:'center', fontFamily:'poppins', fontSize:11, paddingTop:2, color:'rgba(30,30,30,0.40)'}}>
      This portfolio is the portfolio at the time of PKL</Text>
      <View style={{paddingLeft:60, paddingRight:60, paddingTop:10}}>
      <Button title='My POrtofolio' color='#610C9F' onPress={Canva}/>
      </View>

      <View style={{alignItems:'center', paddingTop:55}}>
      <Image style={{width:260, height:190, borderRadius:5}} source={require('./assets/UX_Design.png')}/>
      </View>
      <Text style={{paddingTop:10, textAlign:'center', fontFamily:'poppins', fontWeight:'bold', fontSize:15}}>
      UI/UX Design - Landing Page
      </Text>
      <Text style={{textAlign:'center', fontFamily:'poppins', fontSize:11, paddingTop:2, color:'rgba(30,30,30,0.40)', paddingLeft:25, paddingRight:25}}>
      I made this portfolio when I was a street vendor at Selesa Studio</Text>
      <View style={{paddingLeft:60, paddingRight:60, paddingTop:10}}>
      <Button title='My POrtofolio' color='#610C9F' onPress={Figma}/>
      </View>

      <View style={{alignItems:'center', paddingTop:55, }}>
      <Image style={{width:260, height:190, borderRadius:5}} source={require('./assets/UX_Mobile.png')}/>
      </View>
      <Text style={{paddingTop:10, textAlign:'center', fontFamily:'poppins', fontWeight:'bold', fontSize:15}}>
      UI/UX Design - Mobile App
      </Text>
      <Text style={{textAlign:'center', fontFamily:'poppins', fontSize:11, paddingTop:2, color:'rgba(30,30,30,0.40)', paddingLeft:25, paddingRight:25,}}>
      This is a UI/UX Design portfolio in the form of a Mobile App</Text>
      <View style={{paddingLeft:60, paddingRight:60, paddingTop:10, paddingBottom:25}}>
      <Button title='My POrtofolio' color='#610C9F' onPress={Mobile}/>
      </View>
    </View>
  
    </ScrollView>
  );

}
export default App;