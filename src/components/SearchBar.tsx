import React, {useState} from 'react'
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
const { Search } = Input;

// :FC ??
// redux typescript

export default function DateBar() {
  const [search, setSearch] = useState<string>('')
  const onSearch =(value: string): void =>{
    setSearch(value)
    console.log(search);
    
  }

  return (
    <div>
   <Space direction="vertical">

    <Search
      style={{margin: "15px"}}
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  
  </Space>
    </div>
  )
}