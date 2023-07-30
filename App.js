import { useState } from 'react';
import { Text,TouchableOpacity,Alert,View } from 'react-native';
import { Box, Select, FormControl,Input, ScrollView,NativeBaseProvider,Image,Center,Button, VStack, Heading, HStack, Modal } from 'native-base'
import Task from './Components/Task';
import Complete from './Components/Complete';

export default function App() {

  const [task,setTask] = useState()
  const [service, setService] = useState("");
  const [showModal, setShowModal] = useState("")
  const [taskItems,setTaskItems] = useState([])
  const [done, setDone] = useState([])

  const handleAddTask = () =>{
    setTaskItems([...taskItems,service])
    setTask(null); 
 }

 const completeTaskYes = (index) =>{
  let itemsCopy=[...taskItems];
  setDone([...done,itemsCopy[index]])
  itemsCopy.splice(index,1);
  setTaskItems(itemsCopy);
}

 const completeTask = (index) =>{
  Alert.alert(
    "Confirmation Message" , "Is The Order Completed?", [
    {
      text:"Yes", onPress: ()=>
       {
        completeTaskYes(index);
        
      }
    },
    {
      text:"No", onPress: ()=>console.log("No")
    },
  ]
  );
}

  return (
    <NativeBaseProvider>

<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content w="80%">
        <Modal.Header>Order Detail</Modal.Header>
          <Modal.CloseButton onPress={()=>{
            setService("");
            setShowModal(false);
          }}/>

          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input/>
            </FormControl>

            <FormControl mt="3">
              <FormControl.Label>Phone Number</FormControl.Label>
              <Input/>
            </FormControl>

            <FormControl mt="3">
              <FormControl.Label>Table ID</FormControl.Label>
              <Input/>
            </FormControl>

            <FormControl mt="3">
              <FormControl.Label>Ordered Item</FormControl.Label>
                <Select selectedValue={service} placeholder="Choose Service" mt={1} 
                  onValueChange={itemValue => setService(itemValue)}>
                    <Select.Item label="Veg Item" value='Veg Item'/>
                    <Select.Item label="Non Veg Item" value="Non Veg Item" />
                    <Select.Item label="Vegan Item" value="Vegan Item" />
                    <Select.Item label="Seafood Item" value="Seafood item" />
              </Select>

            </FormControl>
          </Modal.Body>

          <Modal.Footer>
          <Button onPress={() => {
              setShowModal(false);
              setService("");
              handleAddTask();
            }}>
                Add Order
              </Button>
          </Modal.Footer>

        </Modal.Content>
      </Modal>

      <Box w='100%' h='100%' backgroundColor='primary.300'>
        <VStack space={'20%'} my={10} p={5}> 

        <Box backgroundColor={'muted.200'} borderRadius={20}>
          <Heading alignSelf={'center'} borderWidth={2} p={3} borderRadius={50}>Existing Orders</Heading>
          <ScrollView maxH={240}>
          {
            taskItems.map((item, index) =>{
              return (
                <TouchableOpacity key={index} onPress={ ()=>{ completeTask(index)}}>
                  <Text style={{alignSelf:'flex-end', fontWeight:'bold', width:'10%'}}>X</Text>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
          </ScrollView>
        </Box>


        <Box backgroundColor={'muted.200'} position={'absolute'} left={'5%'} top={'80%'} width={'100%'} borderRadius={20} >
          <Heading alignSelf={'center'} borderWidth={2} p={3} borderRadius={50}>Completed Orders</Heading>
          <ScrollView maxH={240}>
            {
              done.map((item) =>{
                return <Complete word={item}/>
              })
            }
          </ScrollView>

        </Box>
        </VStack>
 
        <Button position='absolute' bottom='8' 
        right='8' h={'8%'} w={'20%'} borderRadius={50} borderColor={'black'} borderWidth={3}
        onPress={() => setShowModal(true)}>
        Add+
      </Button>
      </Box>

      </NativeBaseProvider>
  );
}
