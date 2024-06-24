import { useState } from "react";
import { addTask, deleteTask, toggleTaskCompletion } from "../../service/crud/todoService";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    const newTasks = addTask(tasks, task);
    setTasks(newTasks);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = deleteTask(tasks, index);
    setTasks(newTasks);
  };

  const handleToggleTaskCompletion = (index) => {
    const newTasks = toggleTaskCompletion(tasks, index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={handleAddTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {tasks.map((t, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={t.completed} onChange={() => handleToggleTaskCompletion(index)}>
                <Text as={t.completed ? "s" : ""}>{t.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => handleDeleteTask(index)}
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;