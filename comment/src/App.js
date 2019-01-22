import React, { Component } from 'react';
import cardImg from './images/1.jpg';
import welfareImg from './images/2.jpg';
import otherImg from './images/3.jpg';
import './App.css';

//完整列表
const goodsList = [
 {
  goodsId: 0, 
  title: "资生堂海外旗舰店",
  cardImg: cardImg,
  cardTitle: "12月新会员满50减10",
  cardTips: "满50减10 全店通用",
  welfareImg: welfareImg,
  welfareTitle: "新会员0.01元购5片面膜",
  integration: 0,
  price: 0.01
 },
 {
  goodsId: 1, 
  title: "资生堂天猫旗舰店",
  cardImg: otherImg,
  cardTitle: "12月新会员满30减10",
  cardTips: "满30减10 全店通用",
  welfareImg: cardImg,
  welfareTitle: "新会员0.01元购6片面膜",
  integration: 0,
  price: 0.01
 },
 {
  goodsId: 2, 
  title: "兰蔻海外旗舰店",
  cardImg: welfareImg,
  cardTitle: "12月新会员满50减10",
  cardTips: "满50减10 全店通用",
  welfareImg: cardImg,
  welfareTitle: "新会员0.01元购5片眼贴",
  integration: 0,
  price: 0.01
 },
 {
  goodsId: 3, 
  title: "兰蔻天猫旗舰店",
  cardImg: cardImg,
  cardTitle: "12月新会员满10.1减10",
  cardTips: "满10.1减10 全店通用",
  welfareImg: otherImg,
  welfareTitle: "新会员0.01元购5片眼贴",
  integration: 0,
  price: 0.01
 },
 {
  goodsId: 4, 
  title: "最后一个旗舰店",
  cardImg: cardImg,
  cardTitle: "全年新会员满99.1减99",
  cardTips: "满99.1减99 全店通用",
  welfareImg: welfareImg,
  welfareTitle: "新会员0.01元购5片眼贴",
  integration: 0,
  price: 0.01
 }   
]
const initList = goodsList.filter(item => {
  return item.goodsId < 3;
});
let flag = true;
//缩减组件 done
//缩减本地状态属性 done
//不改变数据列表完成需求 done
//图片样式 done
//列表文字与图片对齐
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag
    };
    // this.init();
  }

  componentDidMount() {
    this.init();
  }

  init() {
    //起始列表是三个
    this.setState({
      goodsList: initList
    })
  }

  loadMore = () => {
    this.setState({
      flag: flag ? flag = false : flag = true
    })
    console.log(flag);
  }

  render() {
    const { loadText, flag } = this.state;
    return (
      <div className="App">
        {
          flag
          ? <Product list={initList} loadText={loadText} onClick={this.loadMore}>查看更多</Product>
          : <Product list={goodsList} loadText={loadText} onClick={this.loadMore}>收起</Product>
        }        
      </div>
    );
  }
}

class Product extends Component {
  render() {
    const { list, onClick, children } = this.props;
    return (
      <div className="container">
        {list.map((item) => {
          return (
            <div key={item.goodsId} className="goods-item">
              <div className="goods-title">
                {item.title}
              </div>
              {/* goods-content */}
              <div className="goods-content">
                {/* card */}
                <Card className="card" imgSrc={item.cardImg} cardTitle={item.cardTitle} cardTips={item.cardTips} />
                {/* welfare */}
                <Card className="welfare" imgSrc={item.welfareImg} cardTitle={item.welfareTitle} cardTipsPlus={{integration:item.integration, price:item.price }}  />
              </div>
            </div>
          )
      })}
      <a className="more" href="javascript:;" onClick={onClick} >{children}</a>
      </div>
    )
  }
}

class Card extends Component {
  render() {
    const { imgSrc, cardTitle, cardTips, cardTipsPlus, className } = this.props;
    return (
      <a className={className} href="javascript:;">
        <div className="cardImg">
          <img src={imgSrc} alt=""/>
        </div>
        <ul className="indroduce">
          <li>{cardTitle}</li>
          {
            cardTipsPlus
            ? <li><span className="intergation">{cardTipsPlus.integration}积分</span><span className="price">+{cardTipsPlus.price}元</span></li>
            : <li>{cardTips}</li>
          }
        </ul>
      </a>
    )
  }
}

export default App;
