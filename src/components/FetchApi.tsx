import React,{useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Divider, List, Typography } from 'antd';
import axios from 'axios'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
// all data & somedata
// datasource


const FetchApi = () => {
    const [data, setData] = useState<Todo[]>([]);

    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        const fetchApiData = async () => {
            try {
                axios.get(url).then(response =>{
                    console.log(response.data);
                    const todo = response.data as Todo
                    const id = todo.id;
                    const title = todo.title;
                    const fininshed = todo.completed;      
                    console.log(`
                    the todo with id: ${id}
                    Has a title of: ${title}
                    Is it finished? ${fininshed}
                    `);
                    setData(todo)
                    // logTodo(id, title, fininshed);
                })
            } catch (error) {
                console.log(error);
            }
          };
          fetchApiData();
      },[]);

    return(
        <>
        <Divider orientation="left">Default Size</Divider>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
        //   dataSource={}
        />
      </>
    )
  
    }
  
  export default FetchApi;