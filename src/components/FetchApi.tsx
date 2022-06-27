import React,{useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Divider, List, Avatar } from 'antd';
import axios from 'axios'

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
    userNumber: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos'
// all data & somedata
// datasource

interface TodoJson {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const getTodoFromJson = (json: TodoJson): Todo => ({
  id: json.id || 0,
  userId: json.userId || 0,
  title: json.title || "",
  completed: json.completed || false,
  userNumber: json.id + json.userId
})

const FetchApi = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        const fetchApiData = async () => {
            try {
              const response = await axios.get(url)
              const todoListJson: TodoJson[] = response.data
              const todos = todoListJson.map((json) => (getTodoFromJson(json)))
              setTodoList(todos)

            } catch (error) {
                console.log(error);
            }
          };
          fetchApiData();
      },[]);

    const renderFunction = (todo: Todo) => {
      return (
        <List.Item key={todo.id}>
          <List.Item.Meta 
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{todo.title}</a>}
            description={`USER NO: ${todo.userNumber}`}
            />
        </List.Item>

      )
    }
    return(
        <>
        <Divider orientation="left">Default Size</Divider>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={todoList}
          renderItem={renderFunction}
        />
      </>
    )
    }
  
  export default FetchApi;