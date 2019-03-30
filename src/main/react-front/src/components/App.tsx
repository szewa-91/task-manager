import * as React from 'react';
import { ReactNode } from 'react';
import './App.css';
import TaskList from "src/components/tasks/TaskList";
import { Provider } from 'react-redux';
import TaskManagerStoreCreator from "src/store/configureStore";

class App extends React.Component {
    public render(): ReactNode {
        return (
            <Provider store={TaskManagerStoreCreator.create()}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to Task Manager</h1>
                    </header>
                    <p className="App-intro">
                        <TaskList/>
                    </p>
                </div>
            </Provider>
        );
    }
}

export default App;
