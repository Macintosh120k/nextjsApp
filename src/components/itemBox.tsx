import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
import Image from "next/image";
type Props = {
  title: string;
  content: string;
  icon: string;
};
export function ItemBox({ title, content, icon }: Props) {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "40px 1fr",
      }}
      alignItems="center"
      justifyItems="center"
      gap={{
        base: "1rem",
        sm: "0.5rem",
      }}
      boxShadow="1px 2px 2px 1px #f6f6f6"
      borderRadius={5}
      padding={4}
      w="100%"
    >
      <GridItem>
        <Image src={icon} width={40} height={40} alt=""></Image>
      </GridItem>
      <GridItem>
        <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
          {title}
        </Text>
          <Text fontSize="sm" color="#A9A9A9">{content}</Text>
      </GridItem>
    </Grid>
  );
}
