import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { ItemBox } from "./itemBox";
export function InformationBox() {
  return (
    <Grid
      marginTop={5}
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      gap={4}
    >
      <GridItem as={Flex}>
        <ItemBox
          title="Garantia"
          content="Todos los productos cuentan con garantía"
          icon="/ifboxes/truck.svg"
        ></ItemBox>
      </GridItem>
      <GridItem as={Flex}>
        <ItemBox
          title="Envio Gratis"
          content="Consulta nuestros puntos de envió"
          icon="/ifboxes/return.svg"
        ></ItemBox>
      </GridItem>
      <GridItem as={Flex}>
        <ItemBox
          title="Atención personalizada"
          content="Soporte y asesoramiento informático"
          icon="/ifboxes/support.svg"
        ></ItemBox>
      </GridItem>
      <GridItem as={Flex}>
        <ItemBox
          title="Pago seguro"
          content="Aceptamos todas las tarjetas"
          icon="/ifboxes/support.svg"
        ></ItemBox>
      </GridItem>
    </Grid>
  );
}
