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
        <Button vertical >
          <Icon name="apps" />
          <Text>Apps</Text>
        </Button>
        <Button vertical>
          <Icon name="camera" onPress={() => navigate('CameraApp') }/>
          <Text>Camera</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}

export default FooterMenu;