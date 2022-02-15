import { useState, useEffect, useRef } from "react";

import { Textarea } from "@chakra-ui/react";

export const TextareaReSize = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [value, setValue] = useState<String>("");

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [value]);

  return (
    <>
      <Textarea
        ref={textareaRef}
        style={styles.textareaDefaultStyle}
        onChange={(e) => setValue((e.target as HTMLTextAreaElement).value)}
      >
        {value}
      </Textarea>
    </>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textareaDefaultStyle: {
    padding: 5,
    width: 400,
    display: "block",
    resize: "none",
    backgroundColor: "#eee",
  },
};
