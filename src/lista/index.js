import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data,
            img: this.props.data.like ? require('../img/likeada.png') : require('../img/like.png'),
            curtida: this.props.data.like,
            likes: this.props.data.likes
        };

        this.curtir = this.curtir.bind(this);
    }

    curtir() {
        if (this.state.curtida === false) {
            this.setState({
                img: require('../img/likeada.png'),
                curtida: true,
                likes: this.state.likes + 1
            })
        } else {
            this.setState({
                img: require('../img/like.png'),
                curtida: false,
                likes: this.state.likes - 1
            })
        }

    }

    render() {
        return (
            <View style={style.container}>
                <View style={{ marginStart: 20, marginEnd: 20 }}>
                    <View style={style.headerPost}>
                        <Image source={{ uri: this.state.feed.imgPerfil }} style={style.imgPerfil} />
                        <View style={style.containerText}>
                            <Text style={style.nomeUsuario}> {this.state.feed.nome} </Text>
                            <TouchableOpacity style={style.btnMais}>
                                <Text style={style.btnMaisText}>•</Text>
                                <Text style={style.btnMaisText}>•</Text>
                                <Text style={style.btnMaisText}>•</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={{ uri: this.state.feed.imgPublicacao }} style={style.imgPublicacao} />
                    <View style={style.footer}>
                        <View>
                            <View style={style.descricao}>
                                <Text> {this.state.feed.descricao} </Text>
                            </View>
                            <Text style={style.curtidas}> {this.state.likes} curtidas</Text>
                        </View>
                        <TouchableOpacity onPress={this.curtir}>
                            <Image source={this.state.img}
                                style={style.imgCurtida} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    headerPost: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    nomeUsuario: {
        fontWeight: 'bold',
        paddingLeft: 5
    },
    containerText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnMais: {
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center'

    },
    btnMaisText: {
        margin: -7,
    },
    imgPublicacao: {
        flex: 1,
        width: '100%',
        height: 300,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    curtidas: {
        fontWeight: 'bold',
    },
    footer: {
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },
    imgCurtida: {
        width: 30,
        height: 30,
        marginLeft: -30
    },
    descricao: {
        width: '94%',

    }
})