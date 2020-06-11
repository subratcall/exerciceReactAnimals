import React, {Component} from 'react';
import Animal from './Animal/Animal';

class Animals extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Animals.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Animals.js], componentWillReceiveProps', props)
    // }

    // si nextProps.animals = this.props.animals alors tu laisse pas les methodes d'apres runner
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Animals.js] shouldComponentUpdate')
        if (nextProps.animals !== this.props.animals){
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Animals.js] getSnapShotBeforeUpdate')
        return {message: 'Snapshot'}
    }

    componentDidUpdate(prevProps, prevState, Snapshot){
        console.log('[Animals.js] componentDidUpdate')
        console.log(Snapshot)
    }

    componentWillUnmount(){
        console.log('[Animals.js] componentWillUnmount')
    }
    render(){
        console.log('[Animals.js] rendering...')
        return this.props.animals.map((animal, index) => {
        return (
                <Animal 
                    deleted={() => this.props.deleted(index)}
                    change={(event) => this.props.change(event, animal.id)}
                    name={animal.name} 
                    type={animal.type}
                    key={animal.id}
                />
            )
        }) 
    }
}



export default Animals;