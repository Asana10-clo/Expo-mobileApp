import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"


export default function Login() {
    return (
    <View style={{flex: 1, alignItems: "center", backgroundColor:"pink", justifyContent: "center"}}>

            <Image
         style= {{
             width: 200,
             height: 200,
             borderRadius: 10,
             marginBottom: 50,
             borderRadius: 20,
             transform: [{rotate: "45deg"}]



         }}
         source={{
             url: "https://images.unsplash.com/photo-1634167175847-bc840240f16f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

         }}
           />

           <Text style={{color:"blue", fontSize: 24, }}>Hi, Welcome </Text>
           
           <Text style={{color:"black",fontSize: 30,fontWeight: 500 }}>POWER BIKE SHOP</Text>
           <TouchableOpacity style={{
               backgroundColor: "#e3e3e3",
               padding: 10, 
               paddingHorizontal: 55,
               borderRadius: 10,
               flexDirection: "row",
               marginTop: 20,
               alignItems: "center"
               }}
            >
                <Image
                 style={{height: 10, }} 
                   source={{
                       url: "https://th.bing.com/th/id/OIP.F3ApqRN3Gd_Aq2E8C5BR7QHaGH?w=191&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7"

                }}
                
                />
               <Text style={{fontsize: 20, marginLeft: 15}}>Login with Gmail</Text>

           </TouchableOpacity>
           <TouchableOpacity 
           style={{
               backgroundColor: "black",
               borderRadius: 10,
               flexDirection: "row",
               padding: 10, 
               paddingHorizontal: 55,
               borderRadius: 10,
               marginTop: 20,
               alignItems: "center"
               }}
            >
               <Text style={{fontSize: 18, color: "white", marginLeft: 15}}>Login with name</Text>
               </TouchableOpacity>
        
             <TouchableOpacity>
                <Text style={{marginTop: 10, fontWeight: 500, color: "grey",}}>
                    Not a member?(" ")
                    <Text style={{color: "orange", fontWeight: "bold"}}> SignUp</Text>


                </Text>


              </TouchableOpacity>
    
    
    
    </View>

  );



}