import React from 'react'
import {HStack,Avatar,Text} from '@chakra-ui/react'
const Message = ({text,uri,user ='other'}) => {
  return (
    <HStack alignSelf={user==='me'?'flex-end':'flex-start'} borderRadius={'base'} bg="red" paddingY={"2"} paddingX={user === 'me' ? "4" : "2"}h={"50px"}>
        {
            user==='other' && <Avatar  src={uri}/>
        }
        <Text>{text}</Text>
        {
            user==='me' && <Avatar src={uri}/>
        }
    </HStack>
  )
}

export default Message
