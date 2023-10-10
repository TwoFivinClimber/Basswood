import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Card, Divider, Header, Icon, Segment } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import AdminProductCard from '../../components/AdminProductCard';
import { useAuth } from '../../utils/authContext';
import checkAdmin from '../../utils/data/admin';
import { signOut } from '../../utils/auth';
import BackButton from '../../components/BackButton';
import ProductForm from '../../components/AdminProductCard/ProductForm';
import { getProducts } from '../../utils/data/product';

function ProductAdmin() {
  const user = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getTheContent = () => {
    getProducts().then(setProducts);
  };

  useEffect(() => {
    getTheContent();

    const logOut = () => {
      signOut().then((resp) => {
        // Safeguard against router firing before logout
        if (resp) {
          router.push('/admin');
        }
      });
    };

    if (user.uid) {
      checkAdmin(user.uid, '').then((resp) => {
        if (!resp) {
          logOut();
        }
      });
    } else {
      logOut();
    }
  }, [user, router]);

  return (
    <Segment basic>
      <Header as="h1">
        Manage Products
        <BackButton />
      </Header>
      <Segment style={{ minHeight: '100vh' }}>
        <Header as="h2">
          The Products
          <Button onClick={() => setShowForm(!showForm)} positive floated="right">
            <Icon name="add" />
            Add Product
          </Button>
        </Header>
        <Divider />
        <ProductForm onUpdate={getTheContent} obj={{}} showForm={showForm} setShowForm={setShowForm} />
        <Card.Group centered>
          {products.length ? products?.map((i) => (
            <AdminProductCard key={i.id} obj={i} onUpdate={getTheContent} />
          )) : <><br /> <Header content="Add Your Products Here" /> </>}
        </Card.Group>
      </Segment>
    </Segment>
  );
}

export default ProductAdmin;
