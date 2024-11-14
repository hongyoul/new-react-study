import React from 'react'
import { CustomCard, CustomConatainer } from '../components/Styles'

// 홈 화면을 반환하는 컴포넌트

const Home = () => {
  return (
    <CustomCard>
      <CustomConatainer>
        {/* 로그인 사용자 정보 구역 */}
        <h3>Home</h3>
        <a>로그인 사용자 정보 구역입니다.</a>
      </CustomConatainer>
    </CustomCard>
  )
}

export default Home