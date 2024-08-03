import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function UpdateTodo({ task }) {
  const [newTodoval, setNewTodoval] = useState(task.title);

  const updateTask = async (id, title) => {
    try {
      const { data } = await axios.post(`/api/tasks/${id}`, {
        title,
      });
      toast.success('Task updated');
      setTaskList(taskList.map((task) => (task._id === id ? data : task)));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              update todo
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={newTodoval}
              onChange={(e) => {
                setNewTodoval(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                updateTask(task._id, newTodoval);
              }}
            >
              Save changes
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateTodo;
