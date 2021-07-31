import * as React from 'react';
import {Text,View,SafeAreaView,Platform,StyleSheet,StatusBar,ImageBackground, TextInput} from 'react-native';
import axios from 'axios';
import MapView,{Marker} from 'react-native-maps'
import {WebView} from 'react-native-webview';

export default class IssLocationScreen extends React.Component {
constructor(props){
    super(props)
    this.state = {
        location:{}
    }
}

componentDidMount(){
    this.getIssLocation();
}

getIssLocation=()=>{
axios.get(
    "https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
    ).then(response=>{
    this.setState({location:response.data})
})
.catch(error=>{
    alert(error.message)
})
}

    render() {
        if(Object.keys(this.state.location).length===0){
            return (
                <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        else{
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>
                    <View style={styles.tittleContainer}>
                        <Text style={styles.tittleText}>Star Map</Text>
                    </View>
                    <View>
                        <TextInput
                        style={{height:40, borderColor:'gray', borderWeight:'1'}}
                        placeholder="Enter your latitude"
                        placeholderTextColor="#ffff#000000"
                        onChangeText={(text=>{
                            this.setState({
                                latitude:text
                            })
                        })}/>
                    </View>
                    <View styles={styles.mapContainer}>
                        <MapView styles={styles.map}
                        region={{
                            latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude,
                            latitudeDelta:100,
                            longitudeDelta:100,
                        }}>
                        <Marker
                        cordinate={{lattitude:this.state.location.latitude, longitude:this.state.location.longitude}}>
                            <Image source={require('../assets/star_map.png')} style={{width:50, height:50}}></Image>
                        </Marker>
                        </MapView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS==="android"?StatusBar.currentHeight:0,
    },
    backgroundImage: {
        flex:1,
        resizeMode:'cover',
    },
    tittleContainer: {
        flex:0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tittleText: {
        fontSize:30,
        fontWeight:'bold',
        color:'white',
    },
    mapContainer: {
        flex:0.6,
    },
    map: {
        width:"100%",
        height:"100%",
    },
})