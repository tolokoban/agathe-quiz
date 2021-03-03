import React from "react"
import Button from 'tfw/view/button'
import Data from '../data'

import "./App.css"

interface IAppProps {
    className?: string
}
interface IAppState {
    mode: 'question' | 'answer'
    index: number
}

const FORMULA_PARSER_DEBOUNCING = 333

export default class App extends React.Component<IAppProps, IAppState> {
    state: IAppState = {
        mode: "question",
        index: getRandomQuestionIndex()
    }

    private readonly handleSeeAnswer = () => {
        this.setState({
            mode: 'answer'
        })
    }

    private readonly handleNextQuestion = () => {
        this.setState({
            mode: 'question',
            index: getRandomQuestionIndex()
        })
    }

    render() {
        const { mode } = this.state
        return <div className='App'>{
            mode === 'question' ? this.renderQuestion() : this.renderAnswer()
        }</div>
    }

    renderQuestion() {
        const { index } = this.state
        const question = Data[index].slice()
        if (!question) return "ERROR!"

        const answer = question.pop()
        const label = pick(question)

        return <div className='question'>
            <h1>Si je te dis...</h1>
            <div className='thm-bg2'>{label}</div>
            <Button
                label='Voir la réponse'
                width='auto'
                onClick={this.handleSeeAnswer}
            />
        </div>
    }

    renderAnswer() {
        const { index } = this.state
        const question = Data[index].slice()
        if (!question) return "ERROR!"

        const answer = question.pop()

        return <div className='answer'>
            <ul className='thm-bg1'>{
                question.map( label => <li>{label}</li>)
            }</ul>
            <div className='thm-bg2'>{answer}</div>
            <Button
                label='Question suivante'
                width='auto'
                onClick={this.handleNextQuestion}
            />
        </div>
    }
}


function getRandomQuestionIndex(): number {
    return Math.floor(Math.random() * Data.length)
}

function pick(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)] ?? 'ERROR'
}