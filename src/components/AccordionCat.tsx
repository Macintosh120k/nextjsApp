// import {
//   useDisclosure,
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Radio,
//   RadioGroup,
//   Stack,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// type Props = {
//   categories: any;
// };
// export function Sidebar({ categories }: Props) {
//   let data: any = [];
//   data = categories.Data;
//   const [selectedValues, setSelectedValues] = useState([]);

//   const handleRadioChange = (groupId: any, value: any) => {
//     setSelectedValues((prevValues: any) => ({
//       ...prevValues,
//       [groupId]: value,
//     }));
//   };
//   return (
//     <>
//       <Accordion defaultIndex={[0]} allowMultiple>
//         {data.map((item: any, i: any) => {
//           return (
//             <AccordionItem key={i}>
//               <h2>
//                 <AccordionButton>
//                   <Box as="span" flex="1" textAlign="left">
//                     {item.NombreMenuEc}
//                   </Box>
//                   <AccordionIcon />
//                 </AccordionButton>
//               </h2>
//               <AccordionPanel>
//                 <RadioGroup
//                   key={item.idMenuEc}
//                   name={`radio-group-${item.idMenuEc}`}
//                   value={selectedValues[item.idMenuEc] || ""}
//                   onChange={(value) => handleRadioChange(item.idMenuEc, value)}
//                 >
//                   <Stack>
//                     {item.MenusEc_Det.map((subItem: any, i2: any) => {
//                       return (
//                         <Radio key={i2} value={subItem.DenoDet}>
//                           {subItem.DenoDet}
//                         </Radio>
//                       );
//                     })}
//                   </Stack>
//                 </RadioGroup>
//               </AccordionPanel>
//             </AccordionItem>
//           );
//         })}
//       </Accordion>
//     </>
//   );
// }
