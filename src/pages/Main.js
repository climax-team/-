import React, { useState } from "react";

const Main = () => {
    const [start, setStart] = useState("출발지");
    const [arrival, setArrival] = useState("도착지");
    const [daegu, setDaegu] = useState("선택");

    const SChange = (e) => {
        setStart(e.target.value)
    }

    const AChange = (e) => {
        setArrival(e.target.value)
        setDaegu("선택")
    }
    const DChange = (e) => {
        setDaegu(e.target.value)
    }
    return (
        <div className="body">
            <h1>원하는 지역을 선택해주세요</h1>
            <select name="start" onChange={SChange} onChangeCapture={SChange}>
                <option value="출발지">출발지</option>
                <option value="의성읍">의성읍</option>
                <option value="안계면">안계면</option>
                <option value="금성면">금성면</option>
                <option value="다인면">다인면</option>
                <option value="봉양면">봉양면</option>
                <option value="비안면">비안면</option>
                <option value="안평면">안평면</option>
                <option value="단촌면">단촌면</option>
                <option value="옥산면">옥산면</option>
                <option value="단밀면">단밀면</option>
                <option value="단복면">단북면</option>
                <option value="구천면">구천면</option>
                <option value="점곡면">점곡면</option>
                <option value="사곡면">사곡면</option>
                <option value="춘산면">춘산면</option>
                <option value="가음면">가음면</option>
                <option value="안산면">안사면</option>
                <option value="신평면">신평면</option>
            </select>
            <select name="arrival" onChange={AChange} onChangeCapture={AChange}>
                <option value="도착지">도착지</option>
                <option value="대구">대구</option>
                <option value="서울">서울</option>
                <option value="구미">구미</option>
                <option value="안동">안동</option>
                <option value="군위">군위</option>
                <option value="대전">대전</option>
            </select>
            {arrival === "대구" ?
                <select name="arrival" onChange={DChange} onChangeCapture={DChange}>
                    <option value="선택">선택</option>
                    <option value="동대구">동대구</option>
                    <option value="북대구">북대구</option>
                </select>

                :
                <></>
            }
            <div className="output">
                {start === "출발지" || arrival === "도착지" ?
                    <label>
                        출발지 또는 도착지를 선택해주세요
                    </label>
                    :
                    <></>
                }

                {start === "의성읍" && arrival === "구미" ?
                    <div>
                        <ul>
                            <br />
                            <label>(의성 시외 버스터미널)</label>
                            <hr />
                            <li>시간</li>
                            <label>잔여좌석 / 총좌석</label>
                            <hr />
                            <li>08 : 30</li>
                            <label>31석 / 총 41석</label>
                            <hr />
                            <li>12 : 00</li>
                            <label>35석 / 총 41석</label>
                            <hr />
                            <li>16 : 40 </li>
                            <label>34석 / 총 41석</label>
                            <hr />
                            <li>20 : 40</li>
                            <label>32석 / 총 41석</label>
                            <hr />
                        </ul>
                    </div>
                    :
                    <></>
                }
                {start === "의성읍" && daegu === "북대구" ?
                    <div>
                        <ul>
                            <br />
                            <label>(의성 시외 버스터미널)</label>
                            <hr />
                            <li>시간</li>
                            <label>잔여좌석 / 총좌석</label>
                            <hr />
                            <li>07 : 10</li>
                            <label>6석 / 총 41석</label>
                            <hr />
                            <li>09 : 35</li>
                            <label>8석 / 총 41석</label>
                            <hr />
                            <li>12 : 40</li>
                            <label>7석 / 총 41석</label>
                            <hr />
                            <li>13 : 30</li>
                            <label>18석 / 총 41석</label>
                            <hr />
                            <li>16 : 30</li>
                            <label>25석 / 총 41석</label>
                            <hr />
                            <li>18 : 10</li>
                            <label>33석 / 총 41석</label>
                            <hr />
                            <li>18 : 50</li>
                            <label>32석 / 총 41석</label>
                            <hr />
                        </ul>
                    </div>
                    :
                    <></>
                }
                {start === "의성읍" && daegu === "동대구" ?
                    <div>
                        <ul>
                            <br />
                            <label>(의성 시외 버스터미널)</label>
                            <hr />
                            <li>시간</li>
                            <label>잔여좌석 / 총좌석</label>
                            <br />
                            <hr />
                            <li>11 : 10</li>
                            <label>28석 / 총 28석</label>
                            <hr />
                            <li>12 : 00</li>
                            <label>28석 / 총 28석</label>
                            <hr />
                        </ul>
                    </div>
                    :
                    <></>
                }
                 {start === "봉양면" && arrival === "구미" ?
                    <div>
                        <ul>
                            <br />
                            <label>(도리원 시외 버스정류장)</label>
                            <hr />
                            <li>시간</li>
                            <label>잔여좌석 / 총좌석</label>
                            <hr />
                            <li>08 : 50</li>
                            <label>31석 / 총 41석</label>
                            <hr />
                            <li>12 : 20</li>
                            <label>35석 / 총 41석</label>
                            <hr />
                            <li>17 : 00 </li>
                            <label>34석 / 총 41석</label>
                            <hr />
                            <li>21 : 00</li>
                            <label>32석 / 총 41석</label>
                            <hr />
                        </ul>
                    </div>
                    :
                    <></>
                }
                {start === "봉양면" && daegu === "북대구" ?
                    <div>
                        <ul>
                            <br />
                            <label>(도리원 시외 버스터미널)</label>
                            <hr />
                            <li>시간</li>
                            <label>잔여좌석 / 총좌석</label>
                            <hr />
                            <li>07 : 32</li>
                            <label>6석 / 총 41석</label>
                            <hr />
                            <li>08 : 52</li>
                            <label>8석 / 총 41석</label>
                            <hr />
                            <li>10 : 52</li>
                            <label>7석 / 총 41석</label>
                            <hr />
                            <li>12 : 22</li>
                            <label>18석 / 총 41석</label>
                            <hr />
                            <li>13 : 57</li>
                            <label>25석 / 총 41석</label>
                            <hr />
                            <li>15 : 12</li>
                            <label>33석 / 총 41석</label>
                            <hr />
                            <li>16 : 47</li>
                            <label>32석 / 총 41석</label>
                            <hr />
                            <li>18 : 12</li>
                            <label>32석 / 총 41석</label>
                            <hr />
                            <li>19 : 37</li>
                            <label>32석 / 총 41석</label>
                            <hr />
                            <li>20 : 52</li>
                            <label>32석 / 총 41석</label>
                            <hr />
                        </ul>
                    </div>
                    :
                    <></>
                }
                {start === "봉양면" && daegu === "동대구" ?
                    <div>
                        <ul>
                            <br />
                            <label>(도리원 시외 버스터미널)</label>
                            <hr />
                            <li>시간</li>
                            <label>잔여좌석 / 총좌석</label>
                            <br />
                            <hr />
                            <li>11 : 10</li>
                            <label>28석 / 총 28석</label>
                            <hr />
                            <li>12 : 00</li>
                            <label>28석 / 총 28석</label>
                            <hr />
                        </ul>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Main;