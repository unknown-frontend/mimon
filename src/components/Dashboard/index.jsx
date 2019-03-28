import React, { Component } from 'react';
import PropTypes from 'prop-types';

// component
import { Map } from "../Shared";
// helpers
import { dustColorSettings } from '../../helpers'

export default class Dashboard extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    getDustApi: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      dustValue: []
    };
  };

  handleClick = async (type) => {
    const params = {
      ServiceKey: '0pxSj7PKhfTprucTsXeCwEtDG%2BWQmnY%2BPB79ZLVzNEaRsYstZ409X7k7lK6wIXfTniQ8IXNuv6%2FvZemQcLM1rQ%3D%3D',
      numOfRows: '25',
      pageNo: '1',
      sidoName: '서울',
      searchCondition: 'DAILY',
      _returnType: 'json'
    };

    const { payload: { list } } = await this.props.getDustApi(params);

    const newDust = list.map(item => {
      return {
        id: item.cityNameEng,
        color: dustColorSettings(type === 'fine' ? item.pm10Value : item.pm25Value, type)
      }
    });

    this.setState({
      dustValue: newDust
    });
  };

  render() {
    const { dustValue } = this.state;
    return (
      <div>
        <button onClick={() => this.handleClick('fine')}>미세먼지 상황보기</button>
        <button onClick={() => this.handleClick('ultra')}>초미세먼지 상황보기</button>
        <div>
          <h1>서울 미세먼지</h1>
          <Map dustValue={dustValue}/>
        </div>
      </div>
    )
  };
}