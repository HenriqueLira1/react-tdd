import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTech } from '../../store/modules/tech/actions';

export default function TechList() {
    const [newTech, setNewTech] = useState('');

    const dispatch = useDispatch();
    const techs = useSelector(state => state.techs);

    function handleAddNewTech() {
        dispatch(addTech(newTech));
        setNewTech('');
    }

    return (
        <form data-testid="tech-form" onSubmit={handleAddNewTech}>
            <ul data-testid="tech-list">
                {techs.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

            <label htmlFor="tech">Tech</label>
            <input
                id="tech"
                value={newTech}
                onChange={e => setNewTech(e.target.value)}
            />

            <button onClick={handleAddNewTech}>Adicionar</button>
        </form>
    );
}
