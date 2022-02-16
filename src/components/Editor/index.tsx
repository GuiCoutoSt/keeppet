import { Box, Textarea } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// É possível que o usuário escolha um theme diferente para o SyntaxHighlighter
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Editor = () => {
  const codeString = "const soma = (num) => num + 1";
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
    <Box width="600px" whiteSpace="pre-wrap">
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
        w="600px"
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
        style={gruvboxDark}
        customStyle={{
          display: "inline-block",
          width: "600px",
          height: "fit-content",
          minHeight: "100px",
          fontSize: ".8rem",
          fontFamily: "monospace",
          padding: "2rem",
          borderRadius: "5px",
          zIndex: "1",
          lineHeight: "20px",
          whiteSpace: "pre-wrap",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};
