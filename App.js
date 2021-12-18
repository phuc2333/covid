import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput,CheckBox } from 'react-native';
import { TouchableOpacity } from "react-native-web";


export default function App() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thông tin</Text>
      <View style={styles.container}>
      <Text style={styles.text2}>Vui lòng nhập số điện thoại để đăng ký/đăng nhập ứng dụng PC/Covid</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 50,
          marginBottom:20,
          width:300,
          paddingLeft:10,
        }}
        placeholder="Nhập số điện thoại"
      />
      <View style={{flexDirection:'row',marginLeft:20,marginRight:20, marginBottom:20,}}>
      <CheckBox
         value={isSelected}
         onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={{marginLeft:10,}}>Xác nhận bạn đã đọc và đồng ý với điều khoản sử dụng</Text>
      </View>
      <TouchableOpacity>
        <View style={{backgroundColor:'green',width:200,height:40,borderRadius:10,justifyContent:'center',paddingLeft:70}}>
        <Text style={{color:'white'}}>Tiếp tục</Text>
        </View>
       
        </TouchableOpacity>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  checkbox: {
    alignSelf: "center",
  },
  text:{
    color:'green',
    fontSize:30,
    marginBottom:100,
    marginTop:50
  },
  text2:{
    color:'black',
    fontSize:14,
    marginBottom:20,
    marginLeft:30,
    marginRight:30,
   
  },
});

// import React, { useState } from "react";
// import { StyleSheet, Text, View,TextInput,CheckBox,Image } from 'react-native';
// import { TouchableOpacity } from "react-native-web";


// export default function App() {
 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Quản lý mã QR</Text>
      
//       <View style={styles.container}>
//       <Text style={{fontSize:20,fontWeight:'bold'}}>Mã QR của tôi</Text>
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'data:image/png;base64,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',
//         }}
//       />
//       <TouchableOpacity>
//         <View style={{backgroundColor:'green',width:200,height:40,borderRadius:10,justifyContent:'center',paddingLeft:60}}>
//         <Text style={{color:'white'}}>Sửa thông tin</Text>
//         </View>
       
//         </TouchableOpacity>
//       </View>
//     </View>
   
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//    // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tinyLogo: {
//     width: 200,
//     height: 200,
//     marginBottom:20,
//   },
//   checkbox: {
//     alignSelf: "center",
//   },
//   text:{
//     color:'green',
//     fontSize:30,
//     marginBottom:100,
//     marginTop:50
//   },
//   text2:{
//     color:'black',
//     fontSize:14,
//     marginBottom:20,
//     marginLeft:30,
//     marginRight:30,
   
//   },
// });


// import React, { useState } from "react";
// import { StyleSheet, Text, View,TextInput,CheckBox,Image, ScrollView } from 'react-native';
// import { TouchableOpacity } from "react-native-web";
// import DropDownPicker from 'react-native-dropdown-picker';
// import { RadioButton } from 'react-native-paper';

// export default function App() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Nam', value: 'nam'},
//     {label: 'Nữ', value: 'nữ'}
//   ]);
//   // ngay
//   const [openday, setOpenday] = useState(false);
//   const [valueday, setValueday] = useState(null);
//   const [itemsday, setItemsday] = useState([
//     {label: '01', value: '01'},
//     {label: '02', value: '02'}
//   ]);
//   // thang
//   const [openmoth, setOpenmonth] = useState(false);
//   const [valuemonth, setValuemonth] = useState(null);
//   const [itemsmonth, setItemsmonth] = useState([
//     {label: '01', value: '01'},
//     {label: '02', value: '02'}
//   ]);
//     // nam
//     const [openyear, setOpenyear] = useState(false);
//     const [valueyear, setValueyear] = useState(null);
//     const [itemsyear, setItemsyear] = useState([
//       {label: '2001', value: '2001'},
//       {label: '2002', value: '2002'}
//     ]);
//     // tinh
//     const [opentinh, setOpentinh] = useState(false);
//     const [valuetinh, setValuetinh] = useState(null);
//     const [itemstinh, setItemstinh] = useState([
//       {label: 'Bac Ninh', value: 'Bac Ninh'},
//       {label: 'Thai Nguyen', value: 'Thai Nguyen'}
//     ]);
//     // huyen
//     const [openhuyen, setOpenhuyen] = useState(false);
//     const [valuehuyen, setValuehuyen] = useState(null);
//     const [itemshuyen, setItemshuyen] = useState([
//       {label: 'Que Vo', value: 'Que Vo'},
//       {label: 'Loc Xuong', value: 'Loc Xuong'}
//     ]);
//     // xa
//     const [openxa, setOpenxa] = useState(false);
//     const [valuexa, setValuexa] = useState(null);
//     const [itemsxa, setItemsxa] = useState([
//       {label: 'Dao Vien', value: 'Dao Vien'},
//       {label: 'Khai Nguyen', value: 'Khai Nguyen'}
//     ]);
//     // radio
//     const [checked, setChecked] = React.useState('first');
//   return (
//     <ScrollView>
//        <View style={styles.container}>
//       <Text style={styles.text}>Khai báo y tế</Text>
      
//       <View style={styles.container}>
//         <View style={{flex:1,}}>
//         <Text style={{fontSize:14,color:'red',margin:10,}}>Khuyến cáo:Khai báo thông tin sai là vi phạm pháp luật Việt Nam và
//                      có thể xử lý hình sự
//       </Text>
//         </View>
     
//       <View>
//         <Text>Thông tin cá nhân *</Text>
//         <TextInput
//         style={{height: 30,width:340,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10}}
//         placeholder="Họ và tên(ghi chữ IN HOA)"
//       />
//       <Text>Giới tính *</Text>
//        <DropDownPicker
//        style={{height: 30,width:340,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3,marginBottom:10}}
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//       placeholder="Giới tính"
    
//     />
//       <Text>Ngày tháng năm sinh *</Text>
//     <View style={{flexDirection:'row',justifyContent:"space-between"}}>
//       <View>
//       <DropDownPicker
//        style={{height: 30,width:80,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
//       open={openday}
//       value={valueday}
//       items={itemsday}
//       setOpen={setOpenday}
//       setValue={setValueday}
//       setItems={setItemsday}
//       placeholder="Ngày"
//       dropDownContainerStyle={{
//         backgroundColor: "#dfdfdf",
//         width:80,
//       }}
//     />
//       </View>
//    <View>
//    <DropDownPicker
//        style={{height: 30,width:80,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
//       open={openmoth}
//       value={valuemonth}
//       items={itemsmonth}
//       setOpen={setOpenmonth}
//       setValue={setValuemonth}
//       setItems={setItemsmonth}
//       placeholder="Tháng"
//       dropDownContainerStyle={{
//         backgroundColor: "#dfdfdf",
//         width:80,
//       }}
//     />
//    </View>
//      <View>
//      <DropDownPicker
//       style={{height: 30,width:80,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
//       open={openyear}
//       value={valueyear}
//       items={itemsyear}
//       setOpen={setOpenyear}
//       setValue={setValueyear}
//       setItems={setItemsyear}
//       placeholder="Năm"
//       dropDownContainerStyle={{
//         backgroundColor: "#dfdfdf",
//         width:80,
//       }}
//     /></View>    
     
//     </View>
//     <TextInput
//         style={{height: 30,width:340,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10}}
//         placeholder="CMND/CCCD/Hộ chiếu"
//       />
//       <View>
//       <Text>Thông tin cá nhân khác *</Text>
//       <TextInput
//         style={{height: 30,width:340,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10}}
//         placeholder="Số thẻ bảo hiểm y tế"
//       />
//          <TextInput
//         style={{height: 30,width:340,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10}}
//         placeholder="Email"
//       />
//          <TextInput
//         style={{height: 30,width:340,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10}}
//         placeholder="Quốc tịch"
//       />
//       </View>

//       <View>
//         <Text>Nơi cư trú *</Text>
//         <DropDownPicker
//       style={{height: 30,width:340,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
//       open={opentinh}
//       value={valuetinh}
//       items={itemstinh}
//       setOpen={setOpentinh}
//       setValue={setValuetinh}
//       setItems={setItemstinh}
//       placeholder="Tỉnh thành"
//       dropDownContainerStyle={{
//         backgroundColor: "rgb(235,248,238)",
        
//       }}
//     />
//       <DropDownPicker
//       style={{height: 30,width:340,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
//       open={openhuyen}
//       value={valuehuyen}
//       items={itemshuyen}
//       setOpen={setOpenhuyen}
//       setValue={setValuehuyen}
//       setItems={setItemshuyen}
//       placeholder="Quận huyện"
//       dropDownContainerStyle={{
//         backgroundColor: "rgb(235,248,238)",
        
//       }}
//     />
//       <DropDownPicker
//       style={{height: 30,width:340,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3,marginBottom:30}}
//       open={openxa}
//       value={valuexa}
//       items={itemsxa}
//       setOpen={setOpenxa}
//       setValue={setValuexa}
//       setItems={setItemsxa}
//       placeholder="Phường xã"
//       dropDownContainerStyle={{
//         backgroundColor: "rgb(235,248,238)",
        
//       }}
//     />
//       </View>

//       <View style={{backgroundColor:'rgb(235,248,238)',borderRadius:10,marginBottom:20}}>
//         <Text>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với ai không?*</Text>
        
//         <View style={{flexDirection:'row',justifyContent:'center'}}>
//           <View style={{margin:6}}><Text>Có</Text></View>
        
//         <RadioButton
//         value="first"
//        // status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
//           <View style={{margin:6}}><Text>Không</Text></View>
//       <RadioButton
//         value="first"
//         status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
    
//         </View>
//       </View>

      
//       <View style={{backgroundColor:'rgb(235,248,238)',borderRadius:10,marginBottom:20}}>
//         <Text>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với ai không?*</Text>
        
//         <View style={{flexDirection:'row',justifyContent:'center'}}>
//           <View style={{margin:6}}><Text>Có</Text></View>
        
//         <RadioButton
//         value="first"
//        // status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
//           <View style={{margin:6}}><Text>Không</Text></View>
//       <RadioButton
//         value="first"
//         status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
    
//         </View>
//       </View>

      
//       <View style={{backgroundColor:'rgb(235,248,238)',borderRadius:10,marginBottom:20}}>
//         <Text>Trong vòng 14 ngày qua Anh/Chị có các dấu hiệu ho, sốt không?*</Text>
        
//         <View style={{flexDirection:'row',justifyContent:'center'}}>
//           <View style={{margin:6}}><Text>Có</Text></View>
        
//         <RadioButton
//         value="first"
//        // status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
//           <View style={{margin:6}}><Text>Không</Text></View>
//       <RadioButton
//         value="first"
//         status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
    
//         </View>
//       </View>

//      </View>
//       </View>
//       <TouchableOpacity>
//         <View style={{backgroundColor:'green',width:200,height:40,borderRadius:10,justifyContent:'center',paddingLeft:60}}>
//         <Text style={{color:'white'}}>Gửi tờ khai</Text>
//         </View>
       
//         </TouchableOpacity>
//       </View>
   
//     </ScrollView>
   
   
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//    // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin:10,
//   },
//   tinyLogo: {
//     width: 200,
//     height: 200,
//     marginBottom:20,
//   },
//   checkbox: {
//     alignSelf: "center",
//   },
//   text:{
//     color:'green',
//     fontSize:30,
//     marginBottom:10,
//     marginTop:50
//   },
//   text2:{
//     color:'black',
//     fontSize:14,
//     marginBottom:20,
//     marginLeft:30,
//     marginRight:30,
   
//   },
// });
