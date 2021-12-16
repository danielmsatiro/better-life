import { Container } from "./styles";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Loading() {
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 36, color: "var(--black-purple)" }}
      spin
    />
  );
  return (
    <Container>
      <Spin indicator={antIcon} />
    </Container>
  );
}

export default Loading;
