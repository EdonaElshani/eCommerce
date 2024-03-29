import { Button, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
    return (
        <Container>
            <Typography variant='h4'>
                Errors for testing purposes
            </Typography>
            <Button variant='contained' onClick={()=>agent.TestErrors.get400Error()}>Test 400 Error</Button>
            <Button variant='contained' onClick={() => agent.TestErrors.get401Error()}>Test 401 Error</Button>
            <Button variant='contained' onClick={() => agent.TestErrors.get404Error()}>Test 404 Error</Button>
            <Button variant='contained' onClick={() => agent.TestErrors.get500Error()}>Test 500 Error</Button>
            <Button variant='contained' onClick={() => agent.TestErrors.getValidationError()}>Test Validation Error</Button>
        </Container>
    )
}
