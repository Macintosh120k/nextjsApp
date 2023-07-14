import { slugify } from "@/utils/slugify";
import { Box, Container, Grid } from "@chakra-ui/react";
import { ResponseApi } from "@/models/ResponseApi";
import DemoHeader from "@/components/demoHeader";
import { Product } from "@/components/Product";
type Props = {
  product: ResponseApi;
};
export default function CategoriePage({ product }: Props) {
  product.Data.forEach((x: any) => {
    let url = x.ImagenP != null ? x.ImagenP.replace("/swdb/", "/") : "";
    x.ImagenP = url;
    let contentText1 = x.Otros.replace(
      "<div class='d-flex flex-column lh-1'>",
      "<ul>"
    );
    x.Otros = contentText1;

    let contentText2 = x.Otros.replace("</div>", "</ul>");
    x.Otros = contentText2;

    let contentText3 = x.Otros.replace(new RegExp("<small>-", "g"), "<li>");
    x.Otros = contentText3;

    let contentText4 = x.Otros.replace(new RegExp("</small>", "g"), "</li>");
    x.Otros = contentText4;
  });
  return (
    <>
      <DemoHeader></DemoHeader>
      <Container>
        <Grid
          templateColumns={{
            base: "repeat(auto-fill, minmax(190px, 1fr))",
            md: "repeat(auto-fill, minmax(220px, 1fr))",
          }}
          gap={1}
        >
          {product.Data.map((item: any, i: any) => {
            return (
              <Box key={i}>
                <Product data={item}></Product>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
export async function getStaticPaths() {
  const products = await fetch(`${process.env.API_URL}/Categorias/List`).then(
    (res) => res.json()
  );
  const slugs: string[] = products.Data.map((product: any) => {
    return `${slugify(product.DenoCat)}-${product.Codigo}`;
  });
  return {
    paths: slugs.map((cate) => ({ params: { cate } })),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { cate: string } }) {
  const codigo = context.params.cate.split("-").pop();
  const product: any = await fetch(
    `${process.env.API_URL}/Productos/?Codigo=${codigo}`
  ).then((res) => res.json());
  return {
    props: {
      product,
    },
  };
}
