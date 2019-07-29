import styles from './index.less';
import { connect } from 'dva';
import { Row, Col} from 'antd';

function Summoner({dispatch,summoner,summonerdata }) {
  // const { summonerdata } = props;
  // const onClick = (data) => {
  //   dispatch({
  //     type: 'summoner/save',
  //     payload: {
  //       summonerdata:data
  //     },
  //   })
  // }
  return (
    <div className={styles.normal}>
      <Row>
        {(summoner.summoneritems) && summoner.summoneritems.map(data => (
          <Col key={data.item_id} span={3} className={styles.item}> 
            <img src={`//game.gtimg.cn/images/yxzj/img201606/summoner/${data.summoner_id}.jpg`}/>
            <p>{data.summoner_name}</p>
          </Col>
        ))}
      </Row>
      {/* <div className={styles.big}>
        <img src={`//game.gtimg.cn/images/yxzj/img201606/summoner/${(summonerdata) && summonerdata.summoner_id}-big.jpg`}/>
        <div>{(summonerdata) && summonerdata.summoner_name}</div>
      </div> */}
    </div>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);