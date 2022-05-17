class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            score: 0,
            response:"",
            incorrect: false
        }
    }

    render() {
        if(this.state.score >= 10){
            return this.renderWin()
        } else{
            return this.renderProblem()
        }
    }

    renderProblem(){
        return(
            <div>
                <h1 className={this.state.incorrect ? "incorrect" : ""}>{this.state.num1} + {this.state.num2}</h1>
                <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response}/>
                <div><h3> Current score: {this.state.score} </h3></div>
                <button onClick = {this.resetProblem}>Reset</button>
            </div>
        )
    }

    renderWin(){
        return(
            <div>
                <h1>Congratulation! You Win!</h1>
                <button onClick = {this.resetProblem}>Reset</button>
            </div>
        )
    }

    resetProblem = (event) =>{
        this.setState({
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            score: 0,
            response:"",
            incorrect: false
        })
    }

    //Function that take event argument and updating the current value of response
    // () also work w/o event
    updateResponse = (event) => {
        this.setState({
            response: event.target.value
        })
    }
    inputKeyPress = (event) => {
        if(event.key === "Enter"){
            const answer = parseInt(this.state.response)
            if(answer === this.state.num1 + this.state.num2){
                this.setState(state => ({
                    score: state.score +1,
                    num1 : Math.ceil(Math.random() * 10),
                    num2 : Math.ceil(Math.random() * 10),
                    response :"",
                    incorrect: false
                }))
            } else{
                this.setState({
                    response: "",
                    incorrect: true
                })
            }
        }
    }

}

class App extends React.Component{
    render(){
        return(
            <div>
                <Counter/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#app"))