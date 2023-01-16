import { Text } from "@mantine/core";

function Footer() {
  return (
    <footer
      style={{ position: "absolute", bottom: "0px", marginBottom: "10px"             }}
    >
      <Text align="center" c="dimmed" size={11}>
        @2023 ALL RIGHTS RESERVED
      </Text>
    </footer>
  );
}

export default Footer;
