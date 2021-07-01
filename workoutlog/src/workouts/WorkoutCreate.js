import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const WorkoutCreate = (props) => {
    const [type, setType] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/log/', {
            method: 'POST',
            body: JSON.stringify({ log: { type: type, weight: weight, reps: reps}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                setType('');
                setWeight('');
                setReps('');
                props.fetchWorkouts();
            })
    };
    return (
        <>
            <h3>Log a Workout</h3>
            <Form>
                <FormGroup>
                    <Label htmlFor='type'/>
                    <Input name='type' value={type} onChange={(e) => setType(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='weight' />
                    <Input type='type' name='weight' value={weight} onChange={(e) => setReps(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='reps' />
                    <Input name='reps' value={reps} onChange={(e) => setResult(e.target.value)}/>
                </FormGroup>
                <Button type ='submut'>Click to Submit</Button>
            </Form>
        </>
    );
};

export default WorkoutCreate;