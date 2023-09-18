import { useRouter } from 'next/router';
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function BackButton() {
  const router = useRouter();

  return (
    <Button className="respButton" inverted color="orange" floated="right" onClick={() => router.push('/admin/portal')}>
      <Icon name="backward" />
      To Admin
    </Button>
  );
}

export default BackButton;
