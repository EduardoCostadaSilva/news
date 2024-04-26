import { Button, StyleSheet, Text, View } from "react-native";


export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Resumo:</Text>
            <Text>Agora você pode publicar e ver notícias do mundo inteiro!!</Text>
            <Button
              onPress={() => navigation.navigate("Noticia")}
              title="Noticias"
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
