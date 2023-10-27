import { Container, Stack } from "react-bootstrap";
import Sidebar from "./Sidebar"

interface BodyProps {
    sidebar: boolean;
    children: JSX.Element[] | JSX.Element
}

function Body( { sidebar, children }: BodyProps) {
  return (
    <Container>
        <Stack direction="horizontal">
            {sidebar && <Sidebar />}
            <Container className="child-container">{children}</Container>
        </Stack>
    </Container>
  )
}

export default Body