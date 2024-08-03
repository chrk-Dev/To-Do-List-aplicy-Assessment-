import axios from 'axios';
import React, { useState, useEffect } from 'react';

import toast from 'react-hot-toast';

import { Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { UpdateTodo } from './updateTodo';

function todos() {
  const [todoes, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const getTasks = async () => {
    try {
      const { data } = await axios.get('/api/tasks/mytasks');
      setTodos(
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleCheckboxClick = async (todo) => {
    try {
      await axios.put(`/api/tasks/${todo._id}`, {
        completed: !todo.completed,
      });
      toast.success('Task updated successfully');
    } catch (err) {
      console.log(err);
      toast.error('erro');
    }
    getTasks();
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (newTodo.length <= 0) {
      toast.error('Task is empty');
      return;
    }
    try {
      const { data } = await axios.post('/api/tasks/', {
        title: newTodo,
      });
      toast.success('New task added');
      setNewTodo('');
      setTodos([{ ...data }, ...todos]);
    } catch (err) {
      console.log(err);
    }
    getTasks();
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success('Task deleted');
      setTodos(todoes.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-card-foreground">Todo App</h1>
        <div className="flex mb-4">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 mr-2 bg-muted text-muted-foreground rounded-md px-3 py-2"
          />
          <Button onClick={addTodo} className="bg-primary text-primary-foreground rounded-md px-3 py-2">
            Add
          </Button>
        </div>
        <ul className="space-y-2">
          {todoes.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between bg-muted rounded-md px-3 py-2 ${
                todoes.completed ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-center">
                <Checkbox checked={todo.completed} className="mr-2" onCheckedChange={() => handleCheckboxClick(todo)} />
                {todo.completed ? (
                  <del className="text-muted-foreground">{todo.title}</del>
                ) : (
                  <span className="text-card-foreground">{todo.title}</span>
                )}
              </div>
              <div className="flex items-center" />
              <div className="flex gap-1 items-center">

                <UpdateTodo task={todo} />
                <button
                  type="button"
                  className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
                  onClick={()=>{deleteTodo(todo._id)}}
                >
                  <Trash2 />
                </button>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default todos;
