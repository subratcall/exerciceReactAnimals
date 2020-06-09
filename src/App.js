import React, { Component } from 'react';
import Animal from './Animal/Animal.jsx';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        animals: [
            { id: '1', name: 'lilou', type: 'mouse'},
            { id: '2', name: 'atchoum', type: 'snake'},
            { id: '3', name: 'Rick', type: 'cow'}
        ],
        showAnimals: false,
        input: '',
    }
    
    handleNameChange = (event, id) => {
        // boucle sur array animals et trouve si un objet animal est trouvé en comparant l'id envoyé en param et un id dans chaque elem de animals
        const animalIndex = this.state.animals.findIndex(a => a.id === id)
        // variable contenant copie de l'objet animal a un certain index qui se trouve dans un state
        const animal = {...this.state.animals[animalIndex]}
        // change la valeur de propriété name dans current animal qui s'update a chaque evenement
        animal.name = event.target.value
        // copie de toute l'array animals pour pouvoir aller changer la valeur d'un des objets
        const animals = [...this.state.animals];
        animals[animalIndex] = animal;
        // changer l'array animals avec nouvelle valeur
        this.setState({animals})
    }
    
    toggleAnimalsHandler = () => {
        const doesShow = this.state.showAnimals;
        this.setState({showAnimals: !doesShow})
        
    }
    
    deleteAnimal = (animalIndex) => {
        const animals = this.state.animals;
        const newArray = [...animals.slice(0,animalIndex), ...animals.slice(animalIndex+1, animals.length)]
        this.setState({animals: newArray})
    }

    handleDeleteChar = (charIndex) => {
        const characters = this.state.input
        const input = characters.slice(0, charIndex) + characters.slice(charIndex+1, characters.length)
        this.setState({input})
    }
    
    inputChangeHandler = (event) => {
        this.setState({input: event.target.value})
    }
    
    render() {
        let animals = null;
        if (this.state.showAnimals){
            animals = (
                <div>
                    {this.state.animals.map((animal, index) => (
                        <Animal 
                            key={animal.id} 
                            deleted={() => this.deleteAnimal(index)}
                            change={(event) => this.handleNameChange(event, animal.id)}
                            name={animal.name} 
                            type={animal.type}
                        />
                    ))}
                </div>
            )
        }
    
        const charList = this.state.input.split('').map((ch, index) => {
            return (
                <Char
                character={ch}
                key= {index}
                deleted={()=>this.handleDeleteChar(index)}
                />
            )
        })

        let assignedclasses = []
        if (this.state.showAnimals){
            assignedclasses.push('toggleAnimalsOpen')
        } else {
            assignedclasses.push('toggleAnimals')
        }
        return (
            <div className="App">
                <div className='display'>
                    <button
                        alt={this.state.showAnimals}
                        className={assignedclasses}
                        onClick={() => this.toggleAnimalsHandler()}
                    >
                        Toggle animals
                    </button>
                    {animals}
                    <input
                        className="input" 
                        type="text"
                        onChange={(event) => this.inputChangeHandler(event)}
                        value={this.state.input}

                    />
                    {this.state.input}
                    </div>
                    <Validation textLength={this.state.input.length}/>
                    {charList}
            </div>
        );
    }
}

export default App;
