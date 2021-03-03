import React from "react";
import "./App.css";
interface IAppProps {
    className?: string;
}
interface IAppState {
    mode: 'question' | 'answer';
    index: number;
}
export default class App extends React.Component<IAppProps, IAppState> {
    state: IAppState;
    private readonly handleSeeAnswer;
    private readonly handleNextQuestion;
    render(): JSX.Element;
    renderQuestion(): JSX.Element | "ERROR!";
    renderAnswer(): JSX.Element | "ERROR!";
}
export {};
//# sourceMappingURL=App.d.ts.map