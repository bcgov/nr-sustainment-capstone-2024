import { useEffect, useState } from "react";
import axios from 'axios'
import { Table, Container } from 'react-bootstrap';

export interface Developer {
    id: number;
    first_name:string;
    last_name:string;
}
const FetchDevelopers = () => {
    const [developers, setDevelopers] = useState<Developer[]>([]);

    useEffect(() => {
        const backEndUrl = import.meta.env.VITE_BACKEND_URL;

        const url = `${backEndUrl}/api/developers`;
        axios.get(url)
            .then(response => {
                setDevelopers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error)
            });
    }, []);
    return (
        <Container className="mt-4">
            <Table bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {developers.map(developer => (
                    <tr key={developer.id}>
                        <td>{developer.first_name}</td>
                        <td>{developer.last_name}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default FetchDevelopers;
