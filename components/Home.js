import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import Header from './Header';


class Home extends Component{
    render(){
        return (
            <View style = {styles.container}>
                <Header title = "Home Page" navigation = {this.props.navigation} />
                <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('premierleague', {leagueFlag: 'PL'})}>
                  <View style = {styles.home}>
                    <Image style = {styles.imgContainer}
                    source = {require('../images/premierleague.png')} />
                    <Text style = {styles.textAlign}>Premier League</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('laliga', {leagueFlag: 'LL'})}> 
                  <View style = {styles.home}>
                  <Image style = {styles.imgContainer}
                    source = {require('../images/laliga.png')} />
                    <Text style = {styles.textAlign}>La Liga</Text>
                  </View>  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('bundesliga', {leagueFlag: 'BUN'})}>
                  <View style = {styles.home}>
                  <Image style = {styles.imgContainer}
                    source = {require('../images/bundesliga.png')} />
                    <Text style = {styles.textAlign}>Bundesliga</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('seriea', {leagueFlag: 'SA'})}>
                  <View style = {styles.home}>
                  <Image style = {styles.imgContainer}
                    source = {require('../images/serieA.jpg')} />
                    <Text style = {styles.textAlign}>Serie A</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ligue1', {leagueFlag: 'L1'})}>
                  <View style = {styles.home}>
                  <Image style = {styles.imgContainer}
                    source = {require('../images/ligue1.png')} />
                    <Text style = {styles.textAlign}>Ligue 1</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style = {styles.home}>
                  <Image style = {styles.imgContainer}
                    source = {require('../images/eredivise.png')} />
                    <Text style = {styles.textAlign}>Eredivise</Text>
                  </View>
                </TouchableOpacity>
                  <View style = {styles.home}>
                  <Image style = {styles.imgContainer}
                    source = {require('../images/premjerleague.png')} />
                    <Text style = {styles.textAlign}>Premjer League</Text>
                  </View>
                  <View style = {styles.home}>
                  <Image style = {styles.imgContainer}
                    source = {require('../images/ekstraklasa.jpg')} />
                    <Text style = {styles.textAlign}>Ekstraklasa</Text>
                  </View>
                </ScrollView>
            </View>
          );
    }

}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        
      },
      home: {
        width: '90%',
        height: 100,
        marginLeft: 20,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        
      },
      imgContainer:{
        width: 60,
        height: 75,
        
      },
      textAlign:{
        fontWeight: 'bold',
        paddingLeft: 20
        
      }
})

export default Home;