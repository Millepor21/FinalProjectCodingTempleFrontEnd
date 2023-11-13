import { Container, Stack } from "react-bootstrap";

interface BodyProps {
    sidebar: boolean;
    children: JSX.Element[] | JSX.Element
}

function Body( { children }: BodyProps) {
  return (
    <Container>
        <Stack direction="horizontal">
            <Container className="child-container">{children}</Container>
        </Stack>
    </Container>
  )
}

export default Body