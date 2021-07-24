import './App.less';
import React from 'react';
import { Col, Layout, Modal, Progress, Row, Space, Timeline, Typography } from 'antd';
import { CheckCircleOutlined, EnvironmentOutlined, GithubOutlined, LoadingOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;
const { Paragraph, Title } = Typography;
const { Item } = Timeline;

const modalContent: any = {
  terms: <>
    <h1>Website Terms and Conditions of Use</h1>

    <h2>1. Terms</h2>
    <p>
      By accessing this Website, accessible from <a href="/">https://dontspell.net/</a>,
      you are agreeing to be bound by these Website Terms and Conditions
      of Use and agree that you are responsible for the agreement with any
      applicable local laws. If you disagree with any of these terms, you
      are prohibited from accessing this site. The materials contained in
      this Website are protected by copyright and trade mark law.
    </p>

    <h2>2. Use License</h2>
    <p>
      Permission is granted to temporarily download one copy of the materials
      on Dontspell.net's Website for personal, non-commercial transitory
      viewing only. This is the grant of a license, not a transfer of title,
      and under this license you may not:
    </p>
    <ul>
      <li>modify or copy the materials;</li>
      <li>
        use the materials for any commercial purpose or for any
        public display;
      </li>
      <li>
        attempt to reverse engineer any software contained on
        Dontspell.net's Website;
      </li>
      <li>
        remove any copyright or other proprietary notations from the
        materials; or
      </li>
      <li>
        transferring the materials to another person or "mirror" the
        materials on any other server.
      </li>
    </ul>
    <p>
      This will let Dontspell.net to terminate upon violations of any of
      these restrictions. Upon termination, your viewing right will also
      be terminated and you should destroy any downloaded materials in
      your possession whether it is printed or electronic format.
    </p>

    <h2>3. Disclaimer</h2>
    <p>
      All the materials on Dontspell.net’s Website are provided "as is".
      Dontspell.net makes no warranties, may it be expressed or implied,
      therefore negates all other warranties. Furthermore, Dontspell.net
      does not make any representations concerning the accuracy or
      reliability of the use of the materials on its Website or otherwise
      relating to such materials or any sites linked to this Website.
    </p>

    <h2>4. Limitations</h2>
    <p>
      Dontspell.net or its suppliers will not be held accountable for any
      damages that will arise with the use or inability to use the
      materials on Dontspell.net’s Website, even if Dontspell.net or an
      authorized representative of this Website has been notified, orally
      or written, of the possibility of such damage. Some jurisdiction
      does not allow limitations on implied warranties or limitations
      of liability for incidental damages, these limitations may not apply
      to you.
    </p>

    <h2>5. Revisions and Errata</h2>
    <p>
      The materials appearing on Dontspell.net’s Website may include
      technical, typographical, or photographic errors. Dontspell.net will
      not promise that any of the materials in this Website are accurate,
      complete, or current. Dontspell.net may change the materials
      contained on its Website at any time without notice. Dontspell.net
      does not make any commitment to update the materials.
    </p>

    <h2>6. Links</h2>
    <p>
      Dontspell.net has not reviewed all of the sites linked to its
      Website and is not responsible for the contents of any such linked
      site. The presence of any link does not imply endorsement by
      Dontspell.net of the site. The use of any linked website is at the
      user’s own risk.
    </p>

    <h2>7. Site Terms of Use Modifications</h2>
    <p>
      Dontspell.net may revise these Terms of Use for its Website at any
      time without prior notice. By using this Website, you are agreeing
      to be bound by the current version of these Terms and Conditions of
      Use.
    </p>

    <h2>8. Your Privacy</h2>
    <p>Please read our <a href="/privacy">Privacy Policy</a>.</p>

    <h2>9. Governing Law</h2>
    <p>
      Any claim related to Dontspell.net's Website shall be governed by
      the laws of US without regards to its conflict of law provisions.
    </p>
  </>,

  privacy: <>
    <h1>Privacy Policy for Dontspell.net</h1>
    <p>
      At Dontspell.net, accessible from <a href="/">https://dontspell.net/</a>,
      one of our main priorities is the privacy of our visitors. This
      Privacy Policy document contains types of information that is collected
      and recorded by Dontspell.net and how we use it.
    </p>
    <p>If you have additional questions or require more information about
      our Privacy Policy, do not hesitate
      to <a href="mailto:dev@dontspell.net">contact us</a>.
    </p>

    <h2>General Data Protection Regulation (GDPR)</h2>
    <p>We are a Data Controller of your information.</p>
    <p>
      Dontspell.net legal basis for collecting and using the personal
      information described in this Privacy Policy depends on the Personal
      Information we collect and the specific context in which we collect
      the information:
    </p>
    <ul>
      <li>Dontspell.net needs to perform a contract with you</li>
      <li>You have given Dontspell.net permission to do so</li>
      <li>
        Processing your personal information is in Dontspell.net
        legitimate interests
      </li>
      <li>Dontspell.net needs to comply with the law</li>
    </ul>
    <p>
      Dontspell.net will retain your personal information only for as long
      as is necessary for the purposes set out in this Privacy Policy. We
      will retain and use your information to the extent necessary to
      comply with our legal obligations, resolve disputes, and enforce our
      policies.
    </p>
    <p>
      If you are a resident of the European Economic Area (EEA), you
      have certain data protection rights. If you wish to be informed
      what Personal Information we hold about you and if you want it to be
      removed from our systems,
      please <a href="mailto:dev@dontspell.net">contact us</a>.
    </p>
    <p>
      In certain circumstances, you have the following data protection
      rights:
    </p>
    <ul>
      <li>
        The right to access, update or to delete the information we have
        on you.
      </li>
      <li>The right of rectification.</li>
      <li>The right to object.</li>
      <li>The right of restriction.</li>
      <li>The right to data portability</li>
      <li>The right to withdraw consent</li>
    </ul>
    <h2>Log Files</h2>
    <p>
      Dontspell.net follows a standard procedure of using log files.
      These files log visitors when they visit websites. All hosting
      companies do this and a part of hosting services' analytics. The
      information collected by log files include internet protocol (IP)
      addresses, browser type, Internet Service Provider (ISP), date and
      time stamp, referring/exit pages, and possibly the number of clicks.
      These are not linked to any information that is personally
      identifiable. The purpose of the information is for analyzing
      trends, administering the site, tracking users' movement on the
      website, and gathering demographic information.
    </p>

    <h2>Cookies and Web Beacons</h2>
    <p>
      Like any other website, Dontspell.net uses 'cookies'. These cookies
      are used to store information including visitors' preferences, and
      the pages on the website that the visitor accessed or visited. The
      information is used to optimize the users' experience by customizing
      our web page content based on visitors' browser type and/or other
      information.
    </p>
    <p>For more general information on cookies, please
      read <a href="https://www.privacypolicyonline.com/what-are-cookies/">
        "What Are Cookies"
      </a>.
    </p>

    <h2>Privacy Policies</h2>
    <p>
      You may consult this list to find the Privacy Policy for each of
      the advertising partners of Dontspell.net.
    </p>
    <p>
      Third-party ad servers or ad networks uses technologies like
      cookies, JavaScript, or Web Beacons that are used in their
      respective advertisements and links that appear on Dontspell.net,
      which are sent directly to users' browser. They automatically
      receive your IP address when this occurs. These technologies are
      used to measure the effectiveness of their advertising campaigns
      and/or to personalize the advertising content that you see on
      websites that you visit.
    </p>
    <p>
      Note that Dontspell.net has no access to or control over these
      cookies that are used by third-party advertisers.
    </p>

    <h2>Third Party Privacy Policies</h2>
    <p>
      Dontspell.net's Privacy Policy does not apply to other advertisers
      or websites. Thus, we are advising you to consult the respective
      Privacy Policies of these third-party ad servers for more detailed
      information. It may include their practices and instructions about
      how to opt-out of certain options.
    </p>
    <p>
      You can choose to disable cookies through your individual browser
      options. To know more detailed information about cookie management
      with specific web browsers, it can be found at the browsers'
      respective websites.
    </p>

    <h2>Children's Information</h2>
    <p>
      Another part of our priority is adding protection for children
      while using the internet. We encourage parents and guardians to
      observe, participate in, and/or monitor and guide their online
      activity.
    </p>
    <p>
      Dontspell.net does not knowingly collect any Personal Identifiable
      Information from children under the age of 13. If you think that
      your child provided this kind of information on our website, we
      strongly encourage you
      to <a href="mailto:dev@dontspell.net">contact us</a> immediately and
      we will do our best efforts to promptly remove such information from
      our records.
    </p>

    <h2>Online Privacy Policy Only</h2>
    <p>
      Our Privacy Policy applies only to our online activities and is
      valid for visitors to our website with regards to the information
      that they shared and/or collect in Dontspell.net. This policy is not
      applicable to any information collected offline or via channels
      other than this website.
    </p>

    <h2>Consent</h2>
    <p>
      By using our website, you hereby consent to our Privacy Policy and
      agree to its <a href="/terms">terms</a>.
    </p>
  </>,
};


class App extends React.Component<{}, { isModalVisible: boolean, whichModalContent: string, }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isModalVisible: false,
      whichModalContent: 'terms',
    }
  }

  componentDidMount() {
    document.querySelectorAll('[href^="/"]').forEach(link => {
      link.addEventListener('click', this.showModal);
    });
  }

  componentDidUpdate() {
    document.querySelectorAll('[href^="/"]').forEach(link => {
      link.removeEventListener('click', this.showModal);
      link.addEventListener('click', this.showModal);
    });
  }

  componentWillUnmount() {
    document.querySelectorAll('[href^="/"]').forEach(link => {
      link.removeEventListener('click', this.showModal);
    });
  }

  showModal = (e: any) => {
    const target = e.target.attributes.getNamedItem('href').value.slice(1);
    if (!target) return;

    const modal = document.querySelector('.ant-modal-wrap');

    e.preventDefault();
    this.setState((_state, _props) => ({
      isModalVisible: true,
      whichModalContent: target,
    }));

    if (modal) {
      modal.scrollTo(0, 0);
    }
  };

  hideModal = (_e: any) => {
    this.setState((_state, _props) => ({
      isModalVisible: false,
    }));
  }

  scaleTime = (days: number) => {
    return { paddingBottom: days * 1.2, };
  }

  render() {
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
                  of their individual spheres of influence. DontSpell.net solves
                  that problem by providing you a place to share those with your friends,
                  the people around you, and the world.
                  <br />&nbsp;
                </Paragraph>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 20, offset: 2, }} lg={{ span: 10, offset: 7, }} xl={{ span: 6, offset: 9, }}>
                <Title level={5}>
                  Current progress
                </Title>
                <Progress percent={15} status="active" />
                <br />&nbsp;
                <br />&nbsp;
                <Timeline mode={'right'} reverse={true}>
                  <Item label="3-12-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />} style={this.scaleTime(28)}>
                    Brainstorm
                  </Item>
                  <Item label="4-9-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />} style={this.scaleTime(29)}>
                    Reserve domain
                  </Item>
                  <Item label="5-8-21" color="green" dot={<CheckCircleOutlined style={{ fontSize: '24px' }} />} style={this.scaleTime(75)}>
                    Start coding
                  </Item>
                  <Item label="7-22-21" color="red" dot={<EnvironmentOutlined style={{ fontSize: '24px' }} />} style={this.scaleTime(44)}>
                    Initial deployment
                  </Item>
                  <Item dot={<LoadingOutlined style={{ fontSize: '16px' }} spin />} style={this.scaleTime(44)}>
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
                <a href="/terms">
                  Terms of Service
                </a> &nbsp;{" "}
                <a href="/privacy">
                  Privacy Policy
                </a> &nbsp;{" "}
                <a href="mailto:dev@dontspell.net">
                  Contact
                </a>
                <Paragraph italic={true}>
                  <small>&copy;2021 Stephen Barrack</small>
                </Paragraph>
              </Col>
            </Row>
          </Footer>
        </Layout>
        <Modal visible={this.state.isModalVisible} footer={null} onCancel={this.hideModal} width={800}>
          {modalContent[this.state.whichModalContent]}
        </Modal>
      </>
    );
  }
}

export default App;
