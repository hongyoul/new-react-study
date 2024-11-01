// useParams: 현재 URL 주소에서 파라미터를 꺼내오는 기능
import { useParams } from 'react-router-dom';

// json파일에서 중복데이터를 가져온다
import data from './data.json';

function Topic() {

  // useParams를 사용하여 파라미터 추출
  let params = useParams();

  // 값을 못찾았을 때는 대비해서 초기화
  let findTopic = data.find((topic) => {
    if(topic.id === Number(params.topic_id)) {
      return true;
    }
  });

  // topic을 찾지 못한 경우에는 값을 초기화
  if(findTopic === undefined) {
    findTopic = {
      title: 'Sorry',
      description: 'Not found'
    }
  }

  return (
    <div>
      <h3>{findTopic.title}</h3>
      {findTopic.description}
    </div>
  );
}

export default Topic;
