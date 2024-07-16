import {ChangeEvent, useState} from 'react';
import type {FormEvent} from 'react';

const App = () => {
    const [val, setVal] = useState('');
    const [wordsOfAdvice, setWordsOfAdvice] = useState<string[]>([]);

    const handleChange = (event: ChangeEvent) => {
        const inputElem = event.target as HTMLInputElement;
        setVal(inputElem.value);
    };

    const oracleMessage = (): string => {
        const index = Math.floor(Math.random() * 3);

        return [
            'Your commit messages will be full of joy today!',
            'Beware of black cats!',
            '42 represents all meaning of life',
        ][index];
    };

    const getAdvice = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setWordsOfAdvice((prev) => {
            return [
                ...prev,
                `Hi ${val ? val : 'unknown'}! This is my advice for you: ${oracleMessage()}`,
            ];
        });

        setVal('');
    };

    return (
        <main className="container mt-3">
            <article className="section">
                <div className="column is-offset-one-third is-one-third card">
                    <h1 className="title is-size-1">JavaScript Oracle 🔮</h1>
                    <form onSubmit={getAdvice} className="mb-5">
                        <label htmlFor="name">Who are you?</label>
                        <input
                            className="input mb-3 mt-1"
                            type="text"
                            id="name"
                            value={val}
                            onChange={handleChange}
                        />
                        <button className="button is-info" id="submit">
                            Get Advice 🔮
                        </button>
                    </form>
                    <ul className="is-size-5">
                        {wordsOfAdvice.map((advice) => (
                            <li>{advice}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </main>
    );
};
export default App;
