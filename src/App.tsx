import './App.less';
import React, { FC } from 'react';
import { Col, Layout, Row, Timeline, Typography } from 'antd';
import { CheckCircleOutlined, EnvironmentOutlined, LoadingOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;
const { Paragraph, Title } = Typography;
const { Item } = Timeline;

const App: FC = () => (
  <>
    <Layout>
      <Content>
        <Row className="text-center">
          <Col span={20} offset={2}>
            <Title>
              <br></br>Welcome to dontspell.net!
            </Title>
            <Title level={4}>
              The online community for drawing/word games
              <br></br><small><i>Coming soon&trade;</i></small>
              <br></br>&nbsp;
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <Title level={3} className="text-center">
              The gameplan
              <br></br>&nbsp;
            </Title>
            <Timeline mode={'right'}>
              <Item label="3-12-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />}>
                Seriously consider making a site
              </Item>
              <Item label="4-9-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />}>
                Buy domain
              </Item>
              <Item label="5-8-21" dot={<LoadingOutlined style={{ fontSize: '16px' }} spin />}>
                Learn JavaScript frameworks
              </Item>
              <Item label="7-21-21" color="red" dot={<EnvironmentOutlined style={{ fontSize: '24px' }} />}>
                Start building
              </Item>
              <Item label="TBD" color="lightGray">Launch the site</Item>
            </Timeline>
          </Col>
        </Row>
      </Content>
      <Footer>
        <Row className="text-center">
          <Col span={20} offset={2}>
            <Paragraph italic={true}>
              <small>&copy;2021 Stephen Barrack</small>
            </Paragraph>
          </Col>
        </Row>
      </Footer>
    </Layout>
  </>
);

export default App;
