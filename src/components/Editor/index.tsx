import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// É possível que o usuário escolha um theme diferente para o SyntaxHighlighter
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Editor = () => {
  const codeString = "const soma = (num) => num + 1";
  const [code, setCode] = useState(codeString);

  return (
    <Box>
      <Textarea
        spellCheck="false"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Tab" && !e.shiftKey) {
            // É possível configurar o tabsize para 4, por exemplo
            document.execCommand("insertText", false, "  ");
            e.preventDefault();
            return false;
          }
        }}
        zIndex="1"
        position="absolute"
        width="600px"
        minHeight="100px"
        h="auto"
        padding="2rem"
        borderRadius="5px"
        resize="none"
        border="none"
        fontFamily="monospace"
        fontSize=".8rem"
        lineHeight="20px"
        color="transparent"
        background="transparent"
        css={{
          caretColor: "#ff00ff",
        }}
        _focus={{
          boxShadow: "none",
        }}
      />

      <SyntaxHighlighter
        language="javascript"
        style={gruvboxDark}
        customStyle={{
          width: "600px",
          height: "fit-content",
          minHeight: "100px",
          fontSize: ".8rem",
          fontFamily: "monospace",
          padding: "2rem",
          borderRadius: "5px",
          zIndex: "0",
          lineHeight: "20px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};
