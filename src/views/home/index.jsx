import React, { memo, useEffect } from 'react'
import pfRequest from '@/services'
import { useState } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {
  // 定义状态
  const [ highScore, setHighScore ] = useState({})

  // 网络请求的代码
  useEffect(() => {
    pfRequest.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <HomeWrapper>
      <HomeBanner>
        <div className="content">
          <div className="good-price">
            <div className="title">
              <h2>{highScore.title}</h2>
              <h4>{highScore.subtitle}</h4>
            </div>
          </div>
        </div>
      </HomeBanner>
    </HomeWrapper>
  )
})

export default Home
