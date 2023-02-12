import {
  Box,
  Text,
  Grid,
  Heading,
  CardHeader,
  CardBody,
  Card,
  Container,
  Flex,
  CardFooter,
  Button,
} from "@chakra-ui/react"
import _ from "lodash";
import { useMemo, useState } from "react";
import { ModelType } from "../db/Model";
import { Product, ProductType } from "../db/product.db";
import { icons } from "../icons";


type Basket = {
  productId: string,
  count: number,
  price: number,
}

const Home = () => {
  const [basket, setBasket] = useState<Basket[]>([])
  const products = Product.query().get();

  const findIndexInBasket = (productId: string) => {
    return _.findIndex(basket, {productId})
  }

  const totalOf = (productId: string) => {
    const item = findIndexInBasket(productId);
    if (item > -1) {
      return basket[item].count;
    }

    return 0;
  }

  const handleIncrease = (product: ModelType<ProductType>) => {
    const itemIndex = findIndexInBasket(product.id);
    if (itemIndex > -1) {
      const newBasket = [...basket]
      newBasket[itemIndex].count = newBasket[itemIndex].count + 1;
      return setBasket(newBasket);
    }

    return setBasket([
      ...basket,
      {
        productId: product.id,
        price: product.price,
        count: 1
      }
    ]);
  }

  const handleDecrease = (product: ModelType<ProductType>) => {
    const itemIndex = findIndexInBasket(product.id);
    if (itemIndex > -1) {
      const newBasket = [...basket]
      newBasket[itemIndex].count = newBasket[itemIndex].count - 1;
      if (newBasket[itemIndex].count === 0) {
        newBasket.splice(itemIndex, 1);
      }
      return setBasket(newBasket);
    }
  }

  const total = useMemo(() => basket.reduce((acc, item) => (item.count * item.price) + acc, 0), [basket])

  return (
    <Box py={10}>
      <Container textAlign="center" fontSize="xl">
        <Heading>Total: {new Intl.NumberFormat('pt-PT').format(total)}€</Heading>
        <Grid minH="100vh" templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} p={3}>
          {
            products.map(
              (product) => {
                const total = totalOf(product.id);
              return (
              <Card>
                <CardHeader>
                  <Heading size='md'>
                    <Flex justifyContent={"center"} textAlign={"center"} fontSize="2xl">
                    {icons[product.icon as keyof typeof icons]}
                    </Flex>
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text>{product.name}</Text>
                  <Text>{new Intl.NumberFormat('pt-PT').format(product.price)}€</Text>
                </CardBody>
                <CardFooter>
                  <Button onClick={() => handleDecrease(product)} disabled={total > 0}>-</Button>
                  <Text fontWeight={"bold"}>{total}</Text>
                  <Button onClick={() => handleIncrease(product)}>+</Button>
                </CardFooter>
              </Card>)
          })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default Home;