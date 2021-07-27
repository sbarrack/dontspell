import './Scoreboard.less';
import React from 'react';
import { Table, Tag } from 'antd';

const headers = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name:any) => <>
        {name.tag}{name.badges.length > 0 &&
          <>
            &nbsp;&nbsp;{
              name.badges.map((badge:any) => {
                if (badge.color) {
                  return <Tag color={badge.color}>{badge.label}</Tag>;
                } else {
                  return <Tag color="gray">{badge.label}</Tag>;
                }
              })
            }
          </>
        }
      </>,
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
    render: (score:any) => <>
      {score.value}{score.isReviewed ?
      <>{!score.isValid &&
        <>&nbsp;&nbsp;<Tag color="red">INVALID</Tag></>
      }</> :
      <>&nbsp;&nbsp;<Tag color="gray">IN REVIEW</Tag></>
      }
    </>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date:any) => <>
      {date.toLocaleDateString()}
    </>,
  },
];

const data = [
  {
    key: '1',
    name: {
      tag: 'Dick Dastardly',
      badges: [
        {
          label: 'Cool guy',
          color: 'blue',
        },
      ],
    },
    score: {
      value: 6308,
      isReviewed: true,
      isValid: true,
    },
    date: new Date('7/26/21'),
  },
  {
    key: '2',
    name: {
      tag: 'Sargeant Pickles',
      badges: [],
    },
    score: {
      value: 8574,
      isReviewed: false,
    },
    date: new Date('7/25/21'),
  },
  {
    key: '3',
    name: {
      tag: 'Giant Rat',
      badges: [
        {
          label: 'Stinky',
          color: 'green',
        },
        {
          label: 'Mean',
        },
      ],
    },
    score: {
      value: 11278,
      isReviewed: true,
      isValid: false,
    },
    date: new Date('7/24/21'),
  },
];

class Scoreboard extends React.Component {
  render() {
    return (<Table columns={headers} dataSource={data} />);
  }
}

export default Scoreboard;
