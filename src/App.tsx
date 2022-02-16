import { Flex } from "@chakra-ui/react";
import { Editor } from "./components/Editor";

function App() {
  return (
    <Flex h="100vh" justifyContent="center" padding="30px 0">
      <Editor />
    </Flex>
  );
}

export default App;
