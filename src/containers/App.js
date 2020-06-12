import React, {Component} from "react";
import Animals from "../Components/Animals/Animals";
import Validation from "../Components/Validation/Validation";
import Char from "../Components/Char/Char";
import Cockpit from "../Components/Cockpit/Cockpit";
import WithClass from "../HOC/WithClass";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[Apps.js] constructor");
    }
    state = {
        animals: [
            {id: "1", name: "ee", type: "mouse"},
            {id: "2", name: "atchoum", type: "snake"},
            {id: "3", name: "Rick", type: "cow"},
        ],
        showAnimals: false,
        showCockpit: true,
        input: "",
    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

    componentDidMount() {
        console.log("[App.js] componentDidMount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[App.js] shouldComponentUpdate");
        return true;
    }
    componentDidUpdate() {
        console.log("[App.js] componentDidUpdate");
    }
    handleNameChange = (event, id) => {
        // boucle sur array animals et trouve si un objet animal est trouvé en comparant l'id envoyé en param et un id dans chaque elem de animals
        const animalIndex = this.state.animals.findIndex((a) => a.id === id);
        // variable contenant copie de l'objet animal a un certain index qui se trouve dans un state
        const animal = {...this.state.animals[animalIndex]};
        // change la valeur de propriété name dans current animal qui s'update a chaque evenement

        animal.name = event.target.value;
        // copie de toute l'array animals pour pouvoir aller changer la valeur d'un des objets
        const animals = [...this.state.animals];

        animals[animalIndex] = animal;
        // changer l'array animals avec nouvelle valeur
        this.setState({animals});
    };

    toggleAnimalsHandler = () => {
        const doesShow = this.state.showAnimals;

        this.setState({showAnimals: !doesShow});
    };

    deleteAnimal = (animalIndex) => {
        const animals = this.state.animals;
        const newArray = [...animals.slice(0, animalIndex), ...animals.slice(animalIndex + 1, animals.length)];

        this.setState({animals: newArray});
        console.log("animals", animals);
    };

    handleDeleteChar = (charIndex) => {
        const characters = this.state.input;
        const input = characters.slice(0, charIndex) + characters.slice(charIndex + 1, characters.length);

        this.setState({input});
    };

    inputChangeHandler = (event) => {
        this.setState({input: event.target.value});
    };

    render() {
        console.log("[App.js] render");
        let animals = null;

        if (this.state.showAnimals) {
            animals = (
                <Animals animals={this.state.animals} deleted={this.deleteAnimal} change={this.handleNameChange} />
            );
        }

        const charList = this.state.input.split("").map((ch, index) => {
            return <Char character={ch} key={index} deleted={() => this.handleDeleteChar(index)} />;
        });

        return (
            <WithClass myClasses="App">
                <div className="display">
                    <button
                        onClick={() => {
                            this.setState({showCockpit: false});
                        }}>
                        RemoveCockpit
                    </button>
                    {this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showAnimals={this.state.showAnimals}
                            animals={this.state.animals}
                            clicked={this.toggleAnimalsHandler}
                        />
                    ) : null}
                    {animals}
                    <input
                        className="input"
                        type="text"
                        onChange={(event) => this.inputChangeHandler(event)}
                        value={this.state.input}
                    />
                    {this.state.input}
                </div>
                <Validation textLength={this.state.input.length} />
                {charList}
            </WithClass>
        );
    }
}

export default App;
