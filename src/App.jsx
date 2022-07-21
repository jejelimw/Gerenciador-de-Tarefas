import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import TaskDetails from './components/TaskDetails';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import './App.css';

const App = () => {
   const [tasks, setTasks] = useState([
     {  
          id: '1',
          title: 'Estudar React',
          completed: false,
     },
     {
        id: '2',
        title: 'Terminar o projeto da TT',
        completed: true,
     },
   ])

   const handleTaskClick = (taskId) => {
       const newTasks = tasks.map((task) => {
         if(task.id === taskId) return { ...task, completed: !task.completed}
          
         return task;
       })

       setTasks(newTasks);
   }

   const handleTaskAddition = (taskTitle) => {
      const newTasks = [...tasks, {
         title: taskTitle,
         id: Math.random(10),
         completed: false,
      }]

       setTasks(newTasks);
   }

   const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)
      setTasks(newTasks);
   }

    return (
         <Router>  
           <div className="container">
              <Header />
              <Route 
                  path='/' 
                  exact 
                  render={() => (
                     <>                         
                         <AddTask handleTaskAddition={handleTaskAddition} />
                         <Tasks
                              tasks={tasks}
                              handleTaskClick={handleTaskClick}
                              handleTaskDeletion={handleTaskDeletion}
                        />
                         
                     </>
                 )}

              />
              <Route  path='/:taskTitle' exact component={TaskDetails} />
            
           </div>
                                                    
         </Router>
     )
};

export default App;
