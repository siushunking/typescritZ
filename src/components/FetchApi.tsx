import React,{useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Divider, List, Avatar } from 'antd';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoList } from '../asyncAction';
import { Todo } from '../todoSlice';
import { RootState } from '../store';




const FetchApi = () => {
    // const [todoList, setTodoList] = useState<Todo[]>([]);
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchTodoList())
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