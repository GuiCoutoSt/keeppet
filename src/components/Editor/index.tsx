import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// É possível que o usuário escolha um theme diferente para o SyntaxHighlighter
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Editor = () => {
  const codeString = "const soma = (a, b) => a + b;";
  const [code, setCode] = useState(codeString);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [code]);

  return (
    <Flex
      position="relative"
      padding="20px 15px"
      border="2px solid"
      borderColor="gray.200"
      borderRadius="10px"
      h="fit-content"
      justifyContent="space-between"
    >
      <Flex flexDirection="column">
        <Flex justifyContent="space-between">
          {/* Snippet Title */}
          <Box w="90%">
            <Flex justifyContent="space-between">
              <Text
                border="2px solid"
                borderColor="transparent"
                fontSize="xl"
                fontWeight="bold"
              >
                Sum Function
              </Text>
              <Text
                right="5"
                w="fit-content"
                h="fit-content"
                fontSize="sm"
                fontWeight={500}
                fontStyle="italic"
                padding="1px 5px"
                borderRadius="5px"
                color="gray.500"
                bgColor="yellow.200"
              >
                javascript
              </Text>
            </Flex>

            {/* Snippet Description */}
            <Text mb="20px" fontSize="sm" fontStyle="italic">
              This is a simple example of a function that returns the sum of two
              numbers.
            </Text>
          </Box>
          <Flex flexDirection="column">
            <EditIcon
              color="gray.400"
              _hover={{
                color: "green.500",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
            <DeleteIcon
              color="gray.400"
              m="10px 0"
              _hover={{
                color: "red.500",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          </Flex>
        </Flex>

        <Box>
          <Textarea
            ref={textareaRef}
            onChange={(e) => setCode((e.target as HTMLTextAreaElement).value)}
            spellCheck="false"
            value={code}
            onKeyDown={(e) => {
              if (e.key === "Tab" && !e.shiftKey) {
                // É possível configurar o tabsize para 4, por exemplo
                document.execCommand("insertText", false, "  ");
                e.preventDefault();
                return false;
              }
            }}
            zIndex="0"
            position="absolute"
            minHeight="100px"
            w="100%"
            padding="1rem"
            borderRadius="5px"
            resize="none"
            border="none"
            fontFamily="monospace"
            fontSize=".8rem"
            lineHeight="20px"
            color="transparent"
            background="transparent"
            whiteSpace="pre-wrap"
            css={{
              caretColor: "#ff00ff",
            }}
            _focus={{
              boxShadow: "none",
            }}
          />

          <SyntaxHighlighter
            language="javascript"
            wrapLines={true}
            wrapLongLines={true}
            style={atelierCaveLight}
            customStyle={{
              display: "inline-block",
              width: "100%",
              height: "fit-content",
              minHeight: "100px",
              fontSize: ".8rem",
              fontFamily: "monospace",
              padding: "1rem",
              borderRadius: "5px",
              zIndex: "1",
              lineHeight: "20px",
              whiteSpace: "pre-wrap",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </Box>
      </Flex>
    </Flex>
  );
};
