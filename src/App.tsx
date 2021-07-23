import './App.less';
import React, { FC } from 'react';
import { Col, Layout, Progress, Row, Space, Timeline, Typography } from 'antd';
import { CheckCircleOutlined, EnvironmentOutlined, GithubOutlined, LoadingOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;
const { Paragraph, Title } = Typography;
const { Item } = Timeline;

const App: FC = () => {
  return (
    <>
      <Layout className="text-center">
        <Content>
          <Row>
            <Col xs={{ span: 20, offset: 2, }}>
              <Title>
                <br />Welcome to <a href="/">DontSpell.net</a>!
              </Title>
              <Title level={4}>
                The online community for popular internet games
                <br /><small><i>Coming soon&trade;</i></small>
                <br />&nbsp;
              </Title>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 20, offset: 2, }} lg={{ span: 16, offset: 4, }} xl={{ span: 8, offset: 8, }}>
              <Title level={3}>
                The vision
              </Title>
              <Paragraph>
                This project aims to centralize all efforts to collaborate
                and compete on popular online games, primarily <a href="https://skribbl.io/" target="_blank" rel="noreferrer">skribbl.io</a>.
                Widely, things such as high scores, gorgeous drawings, exceptional
                use of word play, and hilarious gamer moments go unnoticed outside
                of their individual spheres of influence. <a href="/">DontSpell.net</a> solves
                that problem by providing you a place to share those with your friends,
                the people around you, and the world.
                <br />&nbsp;
              </Paragraph>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 20, offset: 2, }} lg={{ span: 8, offset: 8, }}  xl={{ span: 6, offset: 9, }}>
              <Title level={5}>
                Alpha dev progress
              </Title>
              <Progress percent={5} status="active" />
              <br />&nbsp;
              <br />&nbsp;
              <Timeline mode={'right'}>
                <Item label="3-12-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />} style={scaleTime(28)}>
                  Brainstorm
                </Item>
                <Item label="4-9-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />} style={scaleTime(29)}>
                  Buy domain
                </Item>
                <Item label="5-8-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />} style={scaleTime(75)}>
                  Start coding
                </Item>
                <Item label="7-22-21" color="red" dot={<EnvironmentOutlined style={{ fontSize: '24px' }} />} style={scaleTime(44)}>
                  Initial deployment
                </Item>
                <Item dot={<LoadingOutlined style={{ fontSize: '16px' }} spin />} style={scaleTime(44)}>
                  Alpha dev
                </Item>
                <Item label="TBD" color="white">
                  Launch
                </Item>
                <Item color="white">
                  Beta funding campaign
                </Item>
              </Timeline>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row>
            <Col xs={{ span: 20, offset: 2, }}>
              <Space size="middle">
                <a href="https://github.com/sbarrack/dontspell" target="_blank" rel="noreferrer">
                  <GithubOutlined style={{ fontSize: '36px' }} />
                </a>
              </Space>
              <br />&nbsp;
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 20, offset: 2, }}>
              <Space size="middle">
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="mailto:dev@dontspell.net">Contact</a>
              </Space>
              <Paragraph italic={true}>
                <small>&copy;2021 Stephen Barrack</small>
              </Paragraph>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
}

function scaleTime(days: number) {
  const timeScale = 1.2;
  return { paddingBottom: days * timeScale, };
}

export default App;
