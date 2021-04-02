import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getADList, getCategoryList, getPostList } from "../api";
import "../Style/main.scss";
import Nav from "./Nav";

const Main = () => {
  const [list, setList] = useState([]);
  const [adList, setAdList] = useState([]);

  const fetchPostList = async () => {
    let temp = await getPostList();
    setList(temp);
  };

  const fetchADList = async () => {
    let temp = await getADList();
    setAdList(temp);
  };

  useEffect(() => {
    fetchPostList();
    fetchADList();
  }, []);

  // category_id : 1 => apple
  // category_id : 2 => banana
  // category_id : 3 => coconut
  // 이걸로 바꿔서 return 해주면 됨. 따라서 category는 불러올 필요 없음.

  console.log(list);
  console.log(adList);

  return (
    <main>
      <Nav />
      <div className="main__login">
        <span>로그인</span>
      </div>
      {list.map((item, index) => (
        <div className="main__container">
          <Link key={index} to={`/` + item.id}>
            {item.title}
          </Link>
        </div>
      ))}
      {adList.map((item, index) => (
        <div>{item.contents}</div>
      ))}
    </main>
  );
};

export default Main;
