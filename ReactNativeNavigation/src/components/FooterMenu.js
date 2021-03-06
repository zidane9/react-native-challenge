import React from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

const FooterMenu = (props) => {
  const { navigate } = props.navigation;
  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => navigate('Main') }>
          <Icon name="home" />
          <Text>Home</Text>
        </Button>
        <Button vertical onPress={() => navigate('CameraApp') }>
          <Icon name="camera" />
          <Text>Camera</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}

export default FooterMenu;
