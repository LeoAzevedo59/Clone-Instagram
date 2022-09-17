import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Lista from './src/lista';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [{
        id: 1,
        nome: 'Lorrayne Larissa',
        descricao: 'Curtindo a praia ❤️🏖️',
        imgPerfil: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/164902735_2185786561552039_5405666450135501061_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hesla584wzMAX8kLaVJ&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_4rlVwQ8bIkSl-J3RAB4ms1tiWBMWMELJwkHwnEyC6Bw&oe=633E3278',
        imgPublicacao: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/79928003_3126321177593892_2475771075292561408_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=84a396&_nc_ohc=jLH0w1dBypEAX-4Lp8j&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT8yYtzUy8HQf8pKhnNBzXuPDRkLoe80kbikDgszv3Mm0g&oe=63417F70',
        like: false,
        likes: 0
      },
      {
        id: 2,
        nome: 'Leo Azevedo',
        imgPerfil: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/273784041_3886129534946382_7127368584682755047_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_5VBnA6D4WkAX-x-VuN&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-Aj2V8Kf2O5gWumRtO4LMFES66f37EyU4VvzjeVHZxnw&oe=63206537',
        descricao: 'Aniversário com a família 🎂💝',
        imgPublicacao: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/89385538_2274207086214994_7978294097582489600_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=84a396&_nc_ohc=7LoTa3IlZrQAX8VF_XH&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_TYHt6wI6Ho1NRDZ7m3KupNOJWh-PXZFVIegWbiq-M1w&oe=633F630A',
        like: true,
        likes: 3
      },
      {
        id: 3,
        nome: 'Lorrayne Larissa',
        descricao: '💘',
        imgPerfil: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/164902735_2185786561552039_5405666450135501061_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hesla584wzMAX8kLaVJ&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_4rlVwQ8bIkSl-J3RAB4ms1tiWBMWMELJwkHwnEyC6Bw&oe=633E3278',
        imgPublicacao: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/56268532_2872011346358211_7633439929162268672_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=84a396&_nc_ohc=YQ2KdFBTzYgAX_0KuRY&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-EEGOpqOIGg5GQbi_jI4AZYqpGQCH0MNTsGk6295fsdQ&oe=633E7DAF',
        like: false,
        likes: 5
      },
      {
        id: 4,
        nome: 'Lorrayne Larissa',
        descricao: 'Viver, viver e ser livre, Saber dar valor para as coisas mais simples. Só o amor constrói pontes indestrutíveis. ❤️',
        imgPerfil: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/164902735_2185786561552039_5405666450135501061_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hesla584wzMAX8kLaVJ&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_4rlVwQ8bIkSl-J3RAB4ms1tiWBMWMELJwkHwnEyC6Bw&oe=633E3278',
        imgPublicacao: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/50545001_2816091421950204_6803380504994250752_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=84a396&_nc_ohc=-ELRXx4MNUoAX-3ROeH&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT9a49QRTmvrpsVtrWBapksnMrOYy_xGfJA0A-YYFm7kMw&oe=633E922A',
        like: false,
        likes: 5
      }
      ]
    };
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity>
            <Image source={require('./src/img/logo.png')} style={style.logo} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./src/img/send.png')} style={style.send} />
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.feed}
          renderItem={({item}) => <Lista data={item}/>}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {

  },
  send: {
    width: 25,
    height: 25,
  }

})