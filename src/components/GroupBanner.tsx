import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
type Props = {
  data: any;
};
export function GroupBanner({ data }: Props) {
  for (let i = 0; i < data.length; i++) {
    let url = data[i].UrlBanner.replace("/swdb/", "/");
    data[i].UrlBanner = url;
  }
  return (
    <Container>
      <Grid
        marginTop={5}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        {data.map((item: any, i: any) => {
          return (
            <GridItem
              position="relative"
              w="100%"
              h={300}
              key={i}
              borderRadius={10}
            >
              <Image src={item.UrlBanner} style={{borderRadius:10}} fill={true} alt=""></Image>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}
