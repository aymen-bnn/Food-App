import { StyleSheet, Text, View,Image,TextInput,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialcomunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-web';
import colors from '../assets/colors/colors';
import catData from '../Data/catData'
//Feather load
Feather.loadFont();


export default Home=>{
    const renderItem= (({item})=>{
        return(
            <View style={styles.catView}>
                <Image 
                    source={item.img}
                    style={styles.catimg}/>
                <Text style={styles.catText} >
                    {item.title}
                </Text>
            </View>
        )});
    return(
        <View style={styles.container}>
            <SafeAreaView>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Image 
                        source={require('../assets/images/profile.png')}
                        style={styles.profileImage}/>
                    <Feather 
                        name='menu' 
                        size={30} 
                        color={colors.textDark} />
                </View>
                <View style={styles.menutitle}>
                    <Text 
                        style={styles.menuTitle}
                        color={colors.thirdly}
                        >Food Menu
                    </Text>
                </View>
                {/* Food Menu Search */}
                <View style={styles.searchView}>
                    <TextInput
                    style={styles.searchBar}
                    placeholder="Search Food"
                    />
                    <Feather
                    name='search'
                    size={30}
                    color={colors.textDark}
                    style={styles.searchButton}
                    />
                </View>
                {/* Categories */}
                <View>
                    <Text style={styles.popTitle}>Categories</Text>
                    <FlatList
                        data={catData}
                        renderItem={renderItem}
                        keyExtractor={item=>item.id}
                        horizontal={true}
                        style={styles.catList}
                    />
                </View>
                <View style={styles.popularNow}>
                    <Text style={styles.popTitle}>
                        Popular Now
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:20,
    },
    profileImage:{
        height:50,
        width:50,
        borderRadius:50,

    },
    menuTitle:{

        fontSize:30,
        textAlign:'center',
        color:"#ff3300",
        fontWeight:'700',
    },
    menutitle:{
        borderBottom:'2px solid #ff3300',
    },
    searchBar:{
        marginHorizontal:20,
        marginVertical:20,
        paddingHorizontal:20,
        paddingVertical:10,
        borderWidth:1,
        backgroundColor:'#FFFFFF',
        flex:1,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
    },
    searchView:{
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:10,
    },
    searchButton:{
        color:'#ff3300',
    },
    popTitle:{
        fontSize:20,
        fontWeight:'900',
    },
    catList:{
        paddingVertical:20,
    },
    catView:{
        flexDirection:'row',
        alignItems:'center',
        padding:12,
        backgroundColor:'white',
        marginRight:20,
        borderRadius:50,  
    },
    
    catimg:{
        height:50,
        width:50,
        borderRadius:50,
    },
    catText:{
        fontWeight:'700',
        paddingHorizontal:15,
    },
});