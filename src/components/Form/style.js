import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form:{
        alignItems: "center",
        width:"100%",
        height:"100%",
        marginTop:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor: "#ffff"

    },
    formContent:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,

    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    formButton:{
        backgroundColor:"#05668d",
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center",
        width:"90%",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30

    },
    textButton:{
        fontSize:20,
        color:"#ffffff"
    }
});

export default styles