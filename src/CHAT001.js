import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetcher from './fetcher';
const CHAT001 = () => {
  const [friends, setFriends] = useState([]);

  const navigate = useNavigate();

  const goTo002 = async (id) => {
    const res = await fetcher('get', `/sakura/${id}`);
    console.log(typeof res, res);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    navigate('/CHAT002', { state: res });
  };

  useEffect(() => {
    const getTotalApi = async () => {
      const res = await fetcher('get', '/chat');
      console.log(res);
    };
    getTotalApi();
  }, []);
  return (
    <div>
      <button onClick={() => goTo002(2)}>click</button>
    </div>
  );
};

export default CHAT001;
