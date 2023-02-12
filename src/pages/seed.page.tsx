import { Button, Container, Divider, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useState } from 'react'
import { Product, ProductType } from '../db/product.db';
import { seedDB } from '../db/seed';

type States = 'default' | 'seeding' | 'seeded';

const Seed = () => {
  const [state, setState] = useState<States>('default');
  const [products, setProducts] = useState(Product.query().get())

  const handleSeedClick = () => {
    setState('seeding');
    seedDB()
    setState('seeded');
  }


  const handleRemove = (product: ProductType) => {
    Product.from(product).delete();
    setProducts(Product.query().get());
  }

  return (
    <Container mx={'auto'}>
      <h1>Seed</h1>
      <Button onClick={handleSeedClick} isLoading={state === 'seeding'}>
        Start Seed
      </Button>
      <Divider/>
      <h2>Contents</h2>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Products</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Icon</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
            <Tr>
              <Td>{product.name}</Td>
              <Td>{product.icon}</Td>
              <Td isNumeric>{product.price}</Td>
              <Td>
                <Button colorScheme={'red'} onClick={() => handleRemove(product)}>
                  Remove
                </Button>
              </Td>
            </Tr>
            ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Seed