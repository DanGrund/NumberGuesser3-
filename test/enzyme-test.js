import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import Application from '../lib/Components/Application';
import Input from '../lib/Components/Input';
import NewRange from '../lib/Components/NewRange';
import Output from '../lib/Components/Output';
import GuessCounter from '../lib/Components/GuessCounter';
import PreviousGuesses from '../lib/Components/PreviousGuesses';
import Score from '../lib/Components/Score';

//17 shallow tests 6 mount tests
describe('<Application/>', ()=>{
  it('should render an Input component', ()=>{
    const wrapper = shallow(<Application/>)
    const Input = wrapper.find('Input')
    expect(Input).to.have.length(1);
  })

  it('should render an Output component', ()=>{
    const wrapper = shallow(<Application/>)
    const Output = wrapper.find('Output')
    expect(Output).to.have.length(1);
  })

  it('should render an GuessCounter component', ()=>{
    const wrapper = shallow(<Application/>)
    const GuessCounter = wrapper.find('GuessCounter')
    expect(GuessCounter).to.have.length(1);
  })

  it('should render an Score component', ()=>{
    const wrapper = shallow(<Application/>)
    const Score = wrapper.find('Score')
    expect(Score).to.have.length(1);
  })

  it('calls componentDidMount', () => {
    sinon.spy(Application.prototype, 'componentDidMount');
      const wrapper = mount(<Application />);
      expect(Application.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should keep track of previous guesses in state', () => {
    const wrapper = mount(<Application />);
    wrapper.setState({guessArray: [1,2,3]
    });
    expect(wrapper.state('guessArray').length).to.equal(3);
  });

})

describe('<Input/>', ()=>{
  it('should render an Input field', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.numberInput')).to.have.length(1);

  })

  it('should render an Sumbit button', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.submit')).to.have.length(1);
  })

  it('should render an Clear button', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.clear')).to.have.length(1);
  })

  it('should render an Reset button', ()=>{
    const wrapper = shallow(<Input/>)
    expect(wrapper.find('.reset')).to.have.length(1);
  })

  it('should render an NewRange component', ()=>{
    const wrapper = shallow(<Input/>)
    const NewRange = wrapper.find('NewRange')
    expect(NewRange).to.have.length(1);
  })

  it('should update state of userGuess as a guess is typed', () => {
    const wrapper = mount(<Input />);
    const input = wrapper.find('.numberInput');

    expect (wrapper.state('userGuess')).to.equal('');
    input.simulate('change', {target: {value: '1'} });
    expect (wrapper.state('userGuess')).to.equal('1');
  })

  it('the input field should clear if user clicks clear button', () => {
    const wrapper = mount(<Input />);
    const input = wrapper.find('.numberInput');
    const clearButton = wrapper.find('.clear');

    input.simulate('change', {target: {value: '1'} });
    expect(wrapper.state('userGuess')).to.equal('1');
    clearButton.simulate('click');
    expect(wrapper.state('userGuess')).to.equal('');
  });

})

describe('<NewRange/>', ()=>{
  it('should render an new min input', ()=>{
    const wrapper = shallow(<NewRange/>)
    expect(wrapper.find('.new-min')).to.have.length(1);
  })

  it('should render an new max input', ()=>{
    const wrapper = shallow(<NewRange/>)
    expect(wrapper.find('.new-max')).to.have.length(1);
  })

  it('should render an new range button', ()=>{
    const wrapper = shallow(<NewRange/>)
    expect(wrapper.find('.new-range')).to.have.length(1);
  })

  it('should update state of newMin as a new min is entered', () => {
    const wrapper = mount(<NewRange />);
    const input = wrapper.find('.new-min');

    expect (wrapper.state('newMin')).to.equal('');
    input.simulate('change', {target: {value: '1'} });
    expect (wrapper.state('newMin')).to.equal('1');
  })

  it('should update state of newMax as a new max is entered', () => {
    const wrapper = mount(<NewRange />);
    const input = wrapper.find('.new-max');

    expect (wrapper.state('newMax')).to.equal('');
    input.simulate('change', {target: {value: '1'} });
    expect (wrapper.state('newMax')).to.equal('1');
  })

})

describe('<Output/>', ()=>{
  it('should render an guess output', ()=>{
    const wrapper = shallow(<Output/>)
    expect(wrapper.find('.guess-output')).to.have.length(1);
  })

  it('should render an hint output', ()=>{
    const wrapper = shallow(<Output/>)
    expect(wrapper.find('.hint')).to.have.length(1);
  })

})

describe('<Score/>', ()=>{
  it('should render an scoring div', ()=>{
    const wrapper = shallow(<Score/>)
    expect(wrapper.find('.scoring')).to.have.length(1);
  })
})

describe('<GuessCounter/>', ()=>{
  it('should render an guess count output', ()=>{
    const wrapper = shallow(<GuessCounter/>)
    expect(wrapper.find('.guess-count')).to.have.length(1);
  })

  it('should render an show guesses button', ()=>{
    const wrapper = shallow(<GuessCounter/>)
    expect(wrapper.find('.show-guesses')).to.have.length(1);
  })
})
