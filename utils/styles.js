import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor:'#203040',
        '& a':{
            color:'#fff',
            marginLeft:10
        }  
    },
    brand:{
     fontSize:'25px',
     fontWeight:'bold', 
    },
    grow:{
      flexGrow:1
    },
    main:{
        minHeight: '80vh',
     },
     section: {
      marginTop: 10,
      marginBottom: 10,
    },
     footer: {
        textAlign: 'center',
        backgroundColor:'#203040',
        color:'#fff',
        height:'10vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'50px'

      },
})
export default useStyles